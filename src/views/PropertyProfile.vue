<template>
<div>
 <div class="property-profile container-fluid">
    <div v-if="property" class="row">
      <div class="col col-12 mb-5">
        <a class="logo" href="" @click.prevent="goToHome">
          <img src="../assets/img/henko-logo.svg" alt />
        </a>
      </div>
      <div class="col col-12">
        <div class="row">
          <div class="col col-12 col-md-6 mb-md-5 mb-4">
            <h4 class="mt-0 green-text property-title">{{ property.title }}</h4>
            <p class="location-text">
              <i class="fas fa-map-marker-alt orange-text me-1" />
              {{ property.location.name }}
            </p>
          </div>
          <div class="col col-12 col-md-6">
            <div class="row">
              <div class="col col-auto col-md-12 text-md-end">
                <h1 class="mt-0">
                  {{ property.operations[0].formatted_amount + " " + property.operations[0].currency }}
                </h1>
              </div>
              <div class="col col-auto col-md-12 text-md-end">
                <span class="mt-0 operation-label">
                  {{
                    property.operations[0].type == "sale" ? "Venta" : "Renta"
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col col-12">
        <Galery :imagesSrc="property.property_images" />
      </div>

      <div class="col col-12 col-md-8 align-items-center">
        <h1 class="title-label mt-0 mb-3">Características</h1>
        <div class="row g-4 mb-5">
          <div v-if="property.lot_size" class="col col-auto">
            <span class="feature-icon">
              <i class="fas fa-expand-arrows-alt me-1" />
              {{
                new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                }).format(property.lot_size) + "m² de terreno"
              }}
            </span>
          </div>

          <div v-if="property.construction_size" class="col col-auto">
            <span class="feature-icon">
              <i class="fas fa-home me-1" />
              {{
                new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                }).format(property.construction_size) + "m² construídos"
              }}
            </span>
          </div>

          <div v-if="property.bedrooms" class="col col-auto">
            <span class="feature-icon">
              <i class="fas fa-bed me-1" />
              {{
                property.bedrooms +
                (property.bedrooms > 1 ? " habitaciones" : " habitación")
              }}
            </span>
          </div>

          <div v-if="property.bathrooms" class="col col-auto">
            <span class="feature-icon">
              <i class="fas fa-bath me-1"></i>
              {{
                property.bathrooms +
                (property.bathrooms > 1 ? " baños" : " baño")
              }}
            </span>
          </div>

          <div v-if="property.half_bathrooms" class="col col-auto">
            <span class="feature-icon">
              <i class="fas fa-toilet me-1"></i>
              {{
                property.half_bathrooms +
                (property.half_bathrooms > 1 ? " medios baños" : " medio baño")
              }}
            </span>
          </div>

          <div v-if="property.parking_spaces" class="col col-auto">
            <span class="feature-icon">
              <i class="fas fa-parking me-1"></i>
              {{
                property.parking_spaces +
                (property.parking_spaces > 1
                  ? " estacionamientos"
                  : " estacionamiento")
              }}
            </span>
          </div>

          <div v-if="property.floors" class="col col-auto">
            <span class="feature-icon">
              <i class="fas fa-layer-group me-1"></i>
              {{
                property.floors + (property.floors > 1 ? " niveles" : " nivel")
              }}
            </span>
          </div>

          <div v-if="property.floor" class="col col-auto">
            <span class="feature-icon">
              <i class="fas fa-building me-1"></i>
              {{ "Nivel de planta: " + property.floor }}
            </span>
          </div>
        </div>

        <h1 class="title-label mt-0 mb-3">Descripción</h1>
        <p class="mb-5">{{ property.description }}</p>

        <h1 v-if="property.features.length" class="title-label mt-0 mb-3">
          Otras características
        </h1>
        <div v-if="property.features.length" class="row mb-5 g-3">
          <div
            v-for="item in property.features"
            :key="item.id"
            class="col col-auto"
          >
            <span class="feature-label">{{ item.name }}</span>
          </div>
        </div>

        <h1 class="title-label mt-0 mb-3">Ubicación</h1>
        <p class="mb-3 address-text">
          {{
            property.location.street +
            (", CP. " + property.location.postal_code) +
            ", " +
            property.location.name
          }}
        </p>
        <Map v-if="property" :location="property.location" />
      </div>

      <div class="col col-12 col-md-4">
        <div class="card agent-card">
          <img
            class="agent-img"
            :src="property.agent.profile_image_url"
            alt="no_img"
          />
          <p class="text-center title-label mt-2">{{ property.agent.name }}</p>
          <p class="text-center">{{ property.agent.mobile_phone }}</p>
          <p class="text-center mb-4">{{ property.agent.email }}</p>
          <button id="contact-btn" @click="contact">Contactar</button>
        </div>
        <button id="contact-btn-m" @click="contact">Contactar</button>
      </div>
    </div>
   
  </div>
  <div v-if="!property" class="load-screen d-flex justify-content-center">
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  </div>
   <Footer/>
</div>
 
</template>

<script>
import HenkoServices from "../services/henkoServies";
import Galery from "../components/PropertyProfile/Galery";
import Map from "../components/PropertyProfile/Map";
import Footer from "../components/Footer";


export default {
  name: "PropertyProfile",
  components: {
    Galery,
    Map,
    Footer
  },
  data: () => ({
    property: null,
  }),

  async mounted() {
    this.property = await HenkoServices.getProperty(this.$route.params.id);
  },

  methods: {
    contact() {
      var url =
        "https://api.whatsapp.com/send?phone=+5216121694149" +
        "&text= *Hola!* vengo de henkomexico.com, quisiera saber más sobre la siguiente propiedad:%0a%0a" +
        "http://henkomexico.com" +
        window.location.pathname +
        "%0a";

      window.open(url, "_blank");
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.load-screen{
  height: 100vh;
}

.property-profile {
   .logo {
    img {
      height: 25px;
      margin-left: 0px;
      margin-bottom: 5px;
    }
  }
  padding: 50px 100px 0px 100px;
  .title-label {
    font-family: "Product Sans Bold", Arial, sans-serif !important;
    font-size: 1.2rem;
  }
  .property-title {
    font-family: "Product Sans Bold", Arial, sans-serif !important;
    font-size: 1.7rem;
  }
  .operation-label {
    font-family: "Product Sans Bold", Arial, sans-serif !important;
    background-color: #053844;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.1rem;
  }
  .feature-icon {
    font-size: 0.9rem;
    i {
      font-size: 1.3rem;
      color: #ff6b11;
    }
  }
  .feature-label {
    background-color: #053844;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
  }

  .agent-card {
    width: 95%;
    float: right;
    padding: 20px;
    .agent-img {
      height: 150px;
      width: 150px;
      object-fit: contain !important;
      margin: 0 auto;
      border-radius: 50%;
    }
    #contact-btn {
      background-color: #053844;
      color: #fff;
      font-size: 1rem;
      border: none;
    }
  }
  #contact-btn-m{
    display: none;
  }
  .address-text{
    text-transform: capitalize;
  }
}

@media screen and (max-width: 768px) {
  .property-profile {
    padding: 50px 30px 80px 30px;
    .property-title {
      font-size: 1.4rem;
    }
    .location-text {
      font-size: 0.8rem;
    }
    .title-label {
      font-size: 1.2rem;
    }
    .feature-icon {
      font-size: 0.9rem;
      i {
        font-size: 1rem;
      }
    }
    .agent-card {
      display: none;
    }

     #contact-btn-m {
       display: block;
      background-color: #ff6b11;
      color: #fff;
      font-size: 1rem;
      border: none;
      position: fixed;
      bottom: 20px;
      left: 30px;
      right: 30px;
      z-index: 99;
      width: calc(100vw - 60px);
      box-shadow: 0 8px 16px 0 rgba(51, 51, 51, 0.6);

    }
  }
}
</style>
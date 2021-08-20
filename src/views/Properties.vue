<template>
  <div>
    <div class="listing container-fluid">
      <nav id="filter-nav" :class="{ 'hidden-navbar': !showNavbar }">
        <a class="logo" href="/">
          <img class="logo" src="../assets/img/henko-logo.svg" alt />
        </a>
        <div :class="showMenu ? 'nav-filters nav-active' : 'nav-filters'">
          <i
            v-if="showClearFilter"
            class="fas fa-backspace cleat-filter-btn"
            @click="clearFilter"
          />
          <p class="mb-2">Operación</p>
          <div
            class="btn-group mb-4 btn-group-sm"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradio"
              id="nbtnradioSale"
              autocomplete="off"
              v-model="searchData.operation_type"
              value="sale"
            />
            <label class="btn btn-outline-primary" for="nbtnradioSale"
              >Venta</label
            >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradio"
              id="nbtnradioRental"
              autocomplete="off"
              v-model="searchData.operation_type"
              value="rental"
            />
            <label class="btn btn-outline-primary" for="nbtnradioRental"
              >Renta</label
            >
          </div>

          <!--  <p class="mb-2">Tipo de inmueble</p>
          <select class="form-select mb-4" aria-label="Default select example">
            <option selected>Selecciona un tipo</option>
            <option value="1">Casa</option>
            <option value="2">Terreno</option>
            <option value="3">Departamento</option>
            <option value="3">Local comercial</option>
          </select> -->

          <p class="mb-2">Precio ($)</p>
          <div class="input-group mb-4 input-group-sm">
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="Minimo"
              aria-label="Minimo"
              v-model="searchData.min_price"
            />
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="Maximo"
              aria-label="Maximo"
              v-model="searchData.max_price"
            />
          </div>

          <p class="mb-2">Superficie de terreno (m²)</p>
          <div class="input-group mb-4 input-group-sm">
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="Minimo"
              aria-label="Minimo"
              v-model="searchData.min_lot_size"
            />
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="Maximo"
              aria-label="Maximo"
              v-model="searchData.max_lot_size"
            />
          </div>

          <p class="mb-2">Superficie construída (m²)</p>
          <div class="input-group mb-4 input-group-sm">
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="Minimo"
              aria-label="Minimo"
              v-model="searchData.min_construction_size"
            />
            <input
              type="number"
              min="0"
              class="form-control"
              placeholder="Maximo"
              aria-label="Maximo"
              v-model="searchData.max_construction_size"
            />
          </div>

          <p class="mb-2">Baños</p>
          <div
            class="btn-group mb-4 btn-group-sm"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobath"
              id="nbtnradiobath1"
              autocomplete="off"
              checked
              v-model="searchData.min_bathrooms"
              value="1"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobath1"
              >1+</label
            >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobath"
              id="nbtnradiobath2"
              autocomplete="off"
              v-model="searchData.min_bathrooms"
              value="2"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobath2"
              >2+</label
            >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobath"
              id="nbtnradiobath3"
              autocomplete="off"
              v-model="searchData.min_bathrooms"
              value="3"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobath3"
              >3+</label
            >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobath"
              id="nbtnradiobath4"
              autocomplete="off"
              v-model="searchData.min_bathrooms"
              value="4"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobath4"
              >4+</label
            >
          </div>

          <p class="mb-2">Recamaras</p>
          <div
            class="btn-group mb-4 btn-group-sm"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobed"
              id="nbtnradiobed1"
              autocomplete="off"
              checked
              v-model="searchData.min_bedrooms"
              value="1"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobed1"
              >1+</label
            >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobed"
              id="nbtnradiobed2"
              autocomplete="off"
              v-model="searchData.min_bedrooms"
              value="2"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobed2"
              >2+</label
            >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobed"
              id="nbtnradiobed3"
              autocomplete="off"
              v-model="searchData.min_bedrooms"
              value="3"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobed3"
              >3+</label
            >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobed"
              id="nbtnradiobed4"
              autocomplete="off"
              v-model="searchData.min_bedrooms"
              value="4"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobed4"
              >4+</label
            >
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobed"
              id="nbtnradiobe5"
              autocomplete="off"
              v-model="searchData.min_bedrooms"
              value="5"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobe5">5+</label>
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobed"
              id="nbtnradiobe6"
              autocomplete="off"
              v-model="searchData.min_bedrooms"
              value="6"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobe6">6+</label>
            <input
              type="radio"
              class="btn-check"
              name="nbtnradiobed"
              id="nbtnradiobe7"
              autocomplete="off"
              v-model="searchData.min_bedrooms"
              value="7"
            />
            <label class="btn btn-outline-primary" for="nbtnradiobe7">7+</label>
          </div>

          <button
            class="btn btn-search"
            type="button"
            @click.prevent="getProperties"
          >
            Buscar
          </button>
        </div>

        <div :class="showMenu ? 'burger toggle' : 'burger'" @click="toggleMenu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>

      <div class="row">
        <div class="col col-12 mb-5 dv">
          <a class="logo" href="" @click.prevent="goToHome">
            <img src="../assets/img/henko-logo.svg" alt />
          </a>
        </div>
        <!-- COLUMNA DE FILTROS -->
        <div class="col col-12 col-md-3 dv">
          <h5 class="subtitle-listing orange-text mt-0 mb-4">
            Filtro de búsqueda
          </h5>
          <div class="card px-3 py-4">
            <i
              v-if="showClearFilter"
              class="fas fa-backspace cleat-filter-btn"
              @click="clearFilter"
            />
            <p class="mb-2">Operación</p>
            <div
              class="btn-group mb-5 btn-group-sm"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradioSale"
                autocomplete="off"
                v-model="searchData.operation_type"
                value="sale"
              />
              <label class="btn btn-outline-primary" for="btnradioSale"
                >Venta</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradioRental"
                autocomplete="off"
                v-model="searchData.operation_type"
                value="rental"
              />
              <label class="btn btn-outline-primary" for="btnradioRental"
                >Renta</label
              >
            </div>

            <!--  <p class="mb-2">Tipo de inmueble</p>
          <select class="form-select mb-5" aria-label="Default select example">
            <option selected>Selecciona un tipo</option>
            <option value="1">Casa</option>
            <option value="2">Terreno</option>
            <option value="3">Departamento</option>
            <option value="3">Local comercial</option>
          </select> -->

            <p class="mb-2">Precio ($)</p>
            <div class="input-group mb-5 input-group-sm">
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Minimo"
                aria-label="Minimo"
                v-model="searchData.min_price"
              />
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Maximo"
                aria-label="Maximo"
                v-model="searchData.max_price"
              />
            </div>

            <p class="mb-2">Superficie de terreno (m²)</p>
            <div class="input-group mb-3 input-group-sm">
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Minimo"
                aria-label="Minimo"
                v-model="searchData.min_lot_size"
              />
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Maximo"
                aria-label="Maximo"
                v-model="searchData.max_lot_size"
              />
            </div>

            <p class="mb-2">Superficie construída (m²)</p>
            <div class="input-group mb-5 input-group-sm">
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Minimo"
                aria-label="Minimo"
                v-model="searchData.min_construction_size"
              />
              <input
                type="number"
                min="0"
                class="form-control"
                placeholder="Maximo"
                aria-label="Maximo"
                v-model="searchData.max_construction_size"
              />
            </div>

            <p class="mb-2">Baños</p>
            <div
              class="btn-group mb-5 btn-group-sm"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobath"
                id="btnradiobath1"
                autocomplete="off"
                checked
                value="1"
                v-model="searchData.min_bathrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobath1"
                >1+</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobath"
                id="btnradiobath2"
                autocomplete="off"
                value="2"
                v-model="searchData.min_bathrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobath2"
                >2+</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobath"
                id="btnradiobath3"
                autocomplete="off"
                value="3"
                v-model="searchData.min_bathrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobath3"
                >3+</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobath"
                id="btnradiobath4"
                autocomplete="off"
                value="4"
                v-model="searchData.min_bathrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobath4"
                >4+</label
              >
            </div>

            <p class="mb-2">Recamaras</p>
            <div
              class="btn-group mb-5 btn-group-sm"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobed"
                id="btnradiobed1"
                autocomplete="off"
                checked
                value="1"
                v-model="searchData.min_bedrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobed1"
                >1+</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobed"
                id="btnradiobed2"
                autocomplete="off"
                value="2"
                v-model="searchData.min_bedrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobed2"
                >2+</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobed"
                id="btnradiobed3"
                autocomplete="off"
                value="3"
                v-model="searchData.min_bedrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobed3"
                >3+</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobed"
                id="btnradiobed4"
                autocomplete="off"
                value="4"
                v-model="searchData.min_bedrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobed4"
                >4+</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobed"
                id="btnradiobe5"
                autocomplete="off"
                value="5"
                v-model="searchData.min_bedrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobe5"
                >5+</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobed"
                id="btnradiobe6"
                autocomplete="off"
                value="6"
                v-model="searchData.min_bedrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobe6"
                >6+</label
              >
              <input
                type="radio"
                class="btn-check"
                name="btnradiobed"
                id="btnradiobe7"
                autocomplete="off"
                value="7"
                v-model="searchData.min_bedrooms"
              />
              <label class="btn btn-outline-primary" for="btnradiobe7"
                >7+</label
              >
            </div>

            <button @click="getProperties" class="btn btn-search" type="button">
              Buscar
            </button>
          </div>
        </div>

        <!-- COLUMNA DE PROPIEDADES -->
        <div class="col col-12 col-md-6 mobile-mt">
          <h5 class="subtitle-listing green-text mt-0 mb-4">
            Encuentra tu patrimonio
          </h5>
          <PropertyCard
            v-for="property in properties"
            :key="property.id"
            :property="property"
          />

          <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <p
            v-if="!properties && !loading"
            class="orange-text subtitle2-text text-center mt-5"
          >
            No se encontró nada
          </p>

          <nav v-if="!loading && properties" aria-label="Page navigation">
            <ul class="pagination justify-content-center">
              <li
                :class="
                  searchData.page > 1 ? 'page-item' : 'page-item disabled'
                "
              >
                <a
                  class="page-link"
                  @click.prevent="backPage()"
                  href=""
                  tabindex="-1"
                  aria-disabled="true"
                  >Anterior</a
                >
              </li>
              <li
                v-for="page in pages"
                :key="page.id"
                :class="
                  page == searchData.page ? 'page-item active' : 'page-item'
                "
              >
                <a
                  class="page-link"
                  @click.prevent="selectPage(page)"
                  href=""
                  >{{ page }}</a
                >
              </li>
              <li
                :class="
                  pagination.next_page ? 'page-item' : 'page-item disabled'
                "
              >
                <a
                  class="page-link"
                  aria-disabled="true"
                  @click.prevent="nextPage()"
                  href=""
                  >Siguiente</a
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="col col-md-3 dv">
          <h5 class="subtitle-listing green-text mt-0 mb-4">
            Espacio publicitario
          </h5>

          <div v-if="loadingAds" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <img
            v-for="ad in ads"
            :key="ad.id"
            :src="ad.img"
            @click="goTo(ad.url)"
            alt="no_img"
            class="ads-img"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HenkoServices from "../services/henkoServies";
import Navbar from "../components/Navbar.vue";
import PropertyCard from "../components/Listing/PropertyCard";
import Footer from "../components/Footer";
import { db } from "../firebase";

export default {
  name: "Properties",
  components: {
    Navbar,
    PropertyCard,
    Footer,
  },
  data: () => ({
    //Para el navbar
    showMenu: false,
    showNavbar: true,
    lastScrollPosition: 0,
    scrollValue: 0,

    properties: null,
    loading: false,
    searchData: {
      page: 1,
      operation_type: null,
      min_price: null,
      max_price: null,
      min_bedrooms: null,
      min_bathrooms: null,
      min_parking_spaces: null,
      min_construction_size: null,
      max_construction_size: null,
      min_lot_size: null,
      max_lot_size: null,
    },
    pagination: null,

    ads: [],
    loadingAds: false,
  }),

  created() {
    this.getProperties();
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);

    this.getAds();
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  computed: {
    pageUrl() {
      return this.pagination.next_page.replace("api/", "");
    },
    pages() {
      return Math.ceil(this.pagination.total / this.pagination.limit);
    },
    showClearFilter() {
      return (
        this.searchData.operation_type ||
        this.searchData.min_price ||
        this.searchData.max_price ||
        this.searchData.min_bedrooms ||
        this.searchData.min_bathrooms ||
        this.searchData.min_parking_spaces ||
        this.searchData.min_construction_size ||
        this.searchData.max_construction_size ||
        this.searchData.min_lot_size ||
        this.searchData.max_lot_size
      );
    },
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;

      //Disable scroll
      if (document.body.style.overflow == "hidden") {
        document.body.style.overflow = "visible";
      } else {
        document.body.style.overflow = "hidden";
      }
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    async getProperties() {
      this.properties = null;
      this.loading = true;
      await HenkoServices.getProperties(this.searchData)
        .then((res) => {
          this.pagination = res.pagination;
          this.properties = res.content.length > 0 ? res.content : null;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
      this.showMenu = false;
      document.body.style.overflow = "visible";
    },
    async nextPage() {
      this.searchData.page++;
      this.getProperties();
    },
    async backPage() {
      this.searchData.page--;
      this.getProperties();
    },
    async selectPage(page) {
      this.searchData.page = page;
      this.getProperties();
    },
    goTo(url) {
      window.open(url, "_blank");
    },
    goToHome() {
      this.$router.push("/");
    },
    async getAds() {
      try {
        this.loadingAds = true;
        const resDB = await db.collection("ads").get();
        resDB.forEach((res) => {
          this.ads.push({
            id: res.id,
            img: res.data().img,
            url: res.data().url,
          });
        });
        this.loadingAds = false;
      } catch (error) {
        console.log(error);
        this.loadingAds = false;
      }
    },
    clearFilter() {
      this.searchData = {
        page: 1,
        operation_type: null,
        min_price: null,
        max_price: null,
        min_bedrooms: null,
        min_bathrooms: null,
        min_parking_spaces: null,
        min_construction_size: null,
        max_construction_size: null,
        min_lot_size: null,
        max_lot_size: null,
      };
    },
  },
};
</script>

<style lang="scss">
#filter-nav {
  display: none;
}

.ads-img {
  width: 100%;
  margin-bottom: 30px;
  object-fit: contain;
  border-radius: 10px;
  cursor: pointer;
}

.cleat-filter-btn {
  cursor: pointer;
  color: #ff6b11;
  font-size: 1.3rem;
  transition: 0.2s ease-in;
  position: absolute;
  right: 15px;
}

.listing {
  padding: 30px;
  .logo {
    img {
      height: 25px;
      margin-left: 0px;
      margin-bottom: 5px;
    }
  }

  .subtitle-listing {
    font-size: 1.2rem;
    font-family: "Product Sans Bold", Arial, sans-serif !important;
  }
}
.card {
  border-radius: 10px;
  padding: 0.7rem;
  transition: 0.3s;
}

.btn-outline-primary {
  color: #ff6b11;
  border-color: #ff6b11;
}

.btn-search {
  color: #fff;
  background-color: #053844;
  border-color: #053844;
}

.btn-check:active + .btn-outline-primary,
.btn-check:checked + .btn-outline-primary,
.btn-outline-primary.active,
.btn-outline-primary.dropdown-toggle.show,
.btn-outline-primary:active {
  color: #fff;
  background-color: #ff6b11;
  border-color: #ff6b11;
}

.btn-check:hover + .btn-outline-primary {
  color: #fff;
  background-color: #ff6b11;
  border-color: #ff6b11;
}

.page-link {
  color: #ff6b11;
  border-color: #ff6b11;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #ff6b11;
  border-color: #ff6b11;
}

.btn:hover {
  color: #fff;
}
/*Mobile view---------------------------------------------------------------------------------------------------------------------*/

@media screen and (max-width: 768px) {
  #filter-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s ease-out;
    padding: 30px;
    z-index: 999;
  }

  .hidden-navbar {
    transform: translate3d(0, -100%, 0);
  }

  .cleat-filter-btn {
    right: 30px;
  }

  .logo {
    img {
      height: 25px;
      margin-left: 0px;
      margin-bottom: 5px;
    }
  }

  .nav-filters {
    background-color: #ffffff;
    padding: 100px 30px 80px 30px;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.5s, opacity 0.5s ease-in;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .burger {
    display: block;
    cursor: pointer;
    background-color: #ffffff;
    padding: 10px 7px;
    div {
      width: 25px;
      height: 3px;
      margin: 5px;
      background: #053844;
      transition: 0.3s ease-in-out;
    }
  }

  .nav-active {
    opacity: 1;
    visibility: visible;
  }

  .toggle {
    .line1 {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    .line2 {
      opacity: 0;
    }
    .line3 {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }

  .mobile-mt {
    margin-top: 100px;
  }
}
</style>
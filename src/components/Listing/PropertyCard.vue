<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <a class="open-profile-link" @click="goTo('/property/' + property.public_id)">
          <img
            :src="property.title_image_full"
            class="img-fluid property-img"
            alt="..."
          />
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h6 class="green-text open-profile-link" @click="goTo('/property/' + property.public_id)">{{ property.title }}</h6>
          <p class="property-card-price open-profile-link" @click="goTo('/property/' + property.public_id)">
            {{
              property.operations[0].formatted_amount +
              " " +
              property.operations[0].currency
            }}
            <span class="operation-label white-text">{{
              property.operations[0].type == "rental"
                ? "En Renta"
                : property.operations[0].type == "sale"
                ? "En Venta"
                : "Rental temporal"
            }}</span>
          </p>
          <p class="card-text">
            <small class="text-muted open-profile-link" @click="goTo('/property/' + property.public_id)">{{ property.location }}</small>
          </p>
          <p class="card-text">
            <span v-if="property.lot_size" class="me-2"
              ><i
                class="fas fa-expand-arrows-alt"
                style="font-size: 1rem; color: #ff6b11"
              />
              {{
                new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                }).format(property.lot_size) + "m²"
              }}
            </span>
            <span v-if="property.construction_size"
              ><i class="fas fa-home" style="font-size: 1rem; color: #ff6b11" />
              {{
                new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                }).format(property.construction_size) + "m²"
              }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyCard",
  props: {
    property: null,
  },
  methods: {
    goTo(path) {
      let routeData = this.$router.resolve(path);
      window.open(routeData.href, "_blank");
      //this.$router.push(path);
    },
  },
};
</script>

<style>
.open-profile-link{
  cursor: pointer;
}

.property-img {
  height: 10rem;
  width: 100%;
  background: grey;
  border-radius: 5px;
  transition: 0.3s;
}

.property-card-price {
  font-family: "Product Sans Bold", Arial, sans-serif !important;
  font-size: 1.3rem;
}

.operation-label {
  background-color: #053844;
  font-size: 0.8rem;
  padding: 3px 5px;
  border-radius: 5px;
}
</style>
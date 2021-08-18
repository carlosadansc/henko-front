<template>
  <div id="map" class="card p-0" />
</template>

<script>
export default {
  name: "Map",
  props: {
    location: null,
  },
  data: () => ({
    map: null,
  }),
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiaGVua29tZXhpY28iLCJhIjoiY2tzZ214OTN4MWxtOTMwczY5ZW94N2hjeSJ9.L3fTbZMnYP9bKa40igmxRg";

      this.map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/henkomexico/cksgmzflk3yuw18qxxqzpcsnc", //hosted style id
        center: [this.location.longitude, this.location.latitude], // starting position
        zoom: 13,
        interactive: false,
      });

      new mapboxgl.Marker({
        color: "#ff6b11",
        draggable: false,
      })
        .setLngLat([this.location.longitude, this.location.latitude])
        .addTo(this.map);
    },
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 400px;
}

@media screen and (max-width: 768px) {
  #map {
    width: 100%;
    height: 300px;
  }
}
</style>
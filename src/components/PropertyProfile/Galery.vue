<template>
  <Gallery :images="images"></Gallery>
</template>

<script>
import Gallery from "vue-cover-gallery";

export default {
  name: "Galery",
  props: {
    imagesSrc: null,
  },
  components: {
    Gallery,
  },
  data: () => ({
    images: [],
  }),
  async mounted() {
    this.images = await this.imagesSrc.map((img) => {
      return {
        title: "",
        description: "",
        href: img.url,
      };
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
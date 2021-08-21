<template>
  <div class="home">
    <div v-if="show" id="splash">
      <h1 class="title-text withe-text fade-in">Unidos por tu visión.</h1>
    </div>
    <div v-if="!show" id="main" class="fade-in">
      <Navbar />
      <Header />
      <Philosophy />
      <Team />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/home/Header.vue";
import Philosophy from "../components/home/Philosophy.vue";
import Team from "../components/home/Team.vue";
import Contact from "../components/home/Contact.vue";
import Footer from "../components/Footer"

export default {
  components: { Navbar, Header, Philosophy, Team, Contact, Footer },
  name: "Home",

  data: () => ({
    show: false,
  }),

  created() {
    this.showSplash();
  },

  methods: {
    showSplash() {
      this.show = true;
      setInterval(() => {
        this.show = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

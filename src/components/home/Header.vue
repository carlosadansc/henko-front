<template>
  <div id="inicio" class="header container-fluid">
    <div class="row">
      <div class="col col-12 col-md-6">
        <h1 class="green-text">
          <ul>
            <li class="title-text">Unidos por tu visión</li>
            <li class="title-text">desde el principio</li>
            <li class="title-text">hasta... el éxito.</li>
          </ul>
        </h1>

        <img
          class="mv s1-bg-m"
          src="../../assets/img/s1-bg-m.png"
          alt=""
        />

        <p class="orange-text general-text">
          Un servicio inmobiliario especializado en encontrar un espacio para
          ti, tus nuevos proyectos o tu familia
        </p>
        <button @click.prevent="goTo('/properties')">
          Busca tu patrimonio
        </button>
      </div>

      <div class="col col-12 col-md-6">
        <img class="dv" src="../../assets/img/s1-bg.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 110vh;
  padding: 30px;
  h1 {
    margin-top: 20%;
  }
  p {
    width: 70%;
    margin-top: 40px;
    font-size: 18px !important;
  }
  button {
    margin-top: 50px;
    background-color: #053844;
    color: #ffffff;
  }
  img {
    height: calc(100vh - 60px);
    width: 100%;
  }
  .s1-bg-m {
    height: 200px;
  }
}

@media screen and (max-width: 768px) {
  .header {
    height: 100%;
    width: 100%;
    padding: 30px;
    h1 {
      margin-top: 30%;
    }
    p {
      width: 100%;
      margin-top: 40px;
      font-size: 18px !important;
      text-align: center;
    }
    button {
      margin-top: 70px;
      width: 100%;
    }
    img {
      height: calc(100vh - 60px);
      width: 100%;
      margin-top: 40px;
    }
    .s1-bg-m {
      height: 200px;
    }
  }
}
</style>
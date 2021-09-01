<template>
  <div id="equipo" class="team container-fluid">
    <div class="row">
      <div class="col col-12 col-md-4" >
        <h1 class="green-text subtitle-text mt-5">
          Quienes hacemos Henko crecemos en la unión.
        </h1>
        <p class="orange-text dv">
          Henko está conformado por un equipo de profesionales inmobiliarios
          listos para ayudar a nuestros clientes en cada aspecto de su
          crecimiento, juntos desde una idea, propuestas de compra o venta y la
          adquisición o la venta de un espacio.
        </p>
        <img class="team-img my-4 mv" src="../../assets/img/team-m.png" alt="" />
        <button class="mt-5" @click.prevent="send">Hablar con un asesor</button>
      </div>
      <div class="col col-12 col-md-8" >
        <img class="team-img mt-5 dv" src="../../assets/img/team.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  methods:{
    send(){
      window.open("https://wa.link/ddyo9x", "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.team {
  height: 80vh;
  width: 100%;
  padding: 30px;
  .team-img {
    width: 80%;
    float: right;
    object-fit: contain !important;
  }
}

@media screen and (max-width: 768px) {
  .team {
    height: 100%;
    padding: 30px;

    button{
      width: 100%;
    }
    .team-img {
      width: 100%;
      object-fit: contain !important;
    }
  }
}
</style>
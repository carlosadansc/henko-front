<template>
  <div id="filosofia" class="philosophy container-fluid">
    <div class="row">
      <div class="col col-12">
        <div class="row philosophy-text">
          <div class="col col-10 col-md-4">
            <h1
              class="green-text subtitle-text"
            >
              Un compromiso contigo y con nuestra filosofía.
            </h1>
          </div>

          <div class="col col-8 dv">
            <p class="orange-text" >
              Siempre fieles a nuestra filosofía “Unidos por tu visión” el
              equipo de Henko hacemos 3 compromisos claves para nuestros
              clientes siempre viendo por el éxito que trae a la vida un nuevo
              espacio, desde un hogar hasta una oficina o un terreno listo para
              un proyecto nuevo.
            </p>
          </div>
        </div>
      </div>

      <div class="col col-12">
        <div class="img-absolute">
          <div class="row g-0 card-container">
            <div class="col col-4">
              <div class="my-card">
                <div class="my-card-header">
                  <p class="my-card-title green-text">Unidos por tu familia</p>
                  <img
                    class="my-card-icon"
                    src="../../assets/img/family-icon.svg"
                    alt=""
                  />
                </div>

                <p class="green-text">
                  Tu familia es tan importante para nosotros como para ti. Es
                  tener un lugar armónico dónde crecer al que llamarán un hogar,
                  en Henko nos unimos por eso que más amas y atesoras.
                </p>
                <p class="my-card-link">
                  <a
                    class="orange-text"
                    href="https://wa.link/ddyo9x"
                    target="_blank"
                    >Contacta a un asesor >
                  </a>
                </p>
              </div>
            </div>
            <div class="col col-4">
              <div class="my-card">
                <div class="my-card-header">
                  <p class="my-card-title green-text">Unidos por tu proyecto</p>
                  <img
                    class="my-card-icon"
                    src="../../assets/img/start-up.svg"
                    alt=""
                  />
                </div>

                <p class="green-text">
                  Sabemos lo difícil que es salir adelante por cuenta propia y
                  todo el esfuerzo que hay de por medio, el equipo de Henko se
                  ocupará de darte un espacio adecuado para el desarrollo de
                  esos proyectos que tienes en mente.
                </p>
                <p class="my-card-link">
                  <a
                    class="orange-text"
                    href="https://wa.link/ddyo9x"
                    target="_blank"
                    >Quiero apoyo en mi proyecto >
                  </a>
                </p>
              </div>
            </div>
            <div class="col col-4">
              <div class="my-card">
                <div class="my-card-header">
                  <p class="my-card-title green-text">Unidos por tu empresa</p>
                  <img
                    class="my-card-icon"
                    src="../../assets/img/suitcase.svg"
                    alt=""
                  />
                </div>

                <p class="green-text">
                  Los negocios como los espacios nos unen para sacar lo mejor de
                  nosotros, por tanto hoy deja que el equipo de Henko se ocupe
                  de tus espacios mientras te ocupas de hacer crecer esa
                  empresa.
                </p>
                <p class="my-card-link">
                  <a
                    class="orange-text"
                    href="https://wa.link/ddyo9x"
                    target="_blank"
                    >Hablar con un profesional >
                  </a>
                </p>
              </div>
            </div>
          </div>

          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
              <div class="my-card">
                <div class="my-card-header">
                  <p class="my-card-title green-text">Unidos por tu familia</p>
                  <img
                    class="my-card-icon"
                    src="../../assets/img/family-icon.svg"
                    alt=""
                  />
                </div>

                <p class="green-text">
                  Tu familia es tan importante para nosotros como para ti. Es
                  tener un lugar armónico dónde crecer al que llamarán un hogar,
                  en Henko nos unimos por eso que más amas y atesoras.
                </p>
                <p class="my-card-link">
                  <a
                    class="orange-text"
                    href="https://wa.link/ddyo9x"
                    target="_blank"
                    >Contacta a un asesor >
                  </a>
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="my-card">
                <div class="my-card-header">
                  <p class="my-card-title green-text">Unidos por tu proyecto</p>
                  <img
                    class="my-card-icon"
                    src="../../assets/img/family-icon.svg"
                    alt=""
                  />
                </div>

                <p class="green-text">
                  Sabemos lo difícil que es salir adelante por cuenta propia y
                  todo el esfuerzo que hay de por medio, el equipo de Henko se
                  ocupará de darte un espacio adecuado para el desarrollo de
                  esos proyectos que tienes en mente.
                </p>
                <p class="my-card-link">
                  <a
                    class="orange-text"
                    href="https://wa.link/ddyo9x"
                    target="_blank"
                    >Quiero apoyo en mi proyecto >
                  </a>
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="my-card">
                <div class="my-card-header">
                  <p class="my-card-title green-text">Unidos por tu empresa</p>
                  <img
                    class="my-card-icon"
                    src="../../assets/img/family-icon.svg"
                    alt=""
                  />
                </div>

                <p class="green-text">
                  Los negocios como los espacios nos unen para sacar lo mejor de
                  nosotros, por tanto hoy deja que el equipo de Henko se ocupe
                  de tus espacios mientras te ocupas de hacer crecer esa
                  empresa.
                </p>
                <p class="my-card-link">
                  <a
                    class="orange-text"
                    href="https://wa.link/ddyo9x"
                    target="_blank"
                    >Hablar con un profesional >
                  </a>
                </p>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Philosophy",
  data: () => ({
    swiperOptions: {
      pagination: {
        el: ".swiper-pagination",
      },
      // Some Swiper option/callback...
    },
  }),
};
</script>

<style lang="scss" scoped>
.philosophy {
  height: 100vh;
  width: 100%;
  padding: 30px;
  margin-bottom: 50px;
  .philosophy-text {
    height: 60vh;
  }
  .philosophy-text p {
    margin-top: 3rem;
    margin-left: 3rem;
  }

  .img-absolute {
    height: 40vh;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    background-image: url("~@/assets/img/s3-bg.jpg");

    .swiper-container {
      display: none;
    }

    .card-container {
      position: absolute;
      top: -7rem;
      .my-card {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin: 0 auto;
        height: 300px;
        width: 90%;
        background: white;
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 16px 32px 0 rgba(51, 51, 51, 0.2);

        .my-card-header {
          height: 50px;
          display: flex;
          justify-content: space-between;
          .my-card-title {
            font-family: "Product Sans Bold", Arial, sans-serif !important;
            font-size: 1.3rem;
            width: 70%;
          }
          .my-card-icon {
            height: 1.5rem;
          }
        }
        .my-card-link {
          text-align: center;
          margin-top: 30px;
          a {
            text-decoration: none;
            font-size: 1rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .philosophy {
    height: 100vh;
    padding: 30px;
    margin-bottom: 0;
    .philosophy-text {
      height: 25vh;
    }
    .philosophy-text p {
      margin-top: 0;
      margin-left: 0;
    }

    .img-absolute {
      height: 75vh;
      background: url("~@/assets/img/s3-bg-m.png");
      background-size: cover;
      margin: 0;
      display: flex;
      align-items: center;

      .card-container {
        display: none;
      }

      .swiper-container {
        display: block;

        .swiper-slide {
          .my-card {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: 330px;
            width: 90% !important;
            background: white !important;
            padding: 20px 30px 20px 30px;
            box-shadow: 0 16px 32px 0 rgba(51, 51, 51, 0.8) !important;
            margin: 0 auto;
            border-radius: 10px;

            .my-card-header {
              height: 50px;
              display: flex;
              justify-content: space-between;
              .my-card-title {
                font-family: "Product Sans Bold", Arial, sans-serif !important;
                font-size: 1.3rem;
                width: 70%;
              }
              .my-card-icon {
                height: 1.5rem;
              }
            }
            .my-card-link {
              text-align: center;
              margin-top: 30px;
              a {
                text-decoration: none;
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div id="contacto" class="contact container-fluid">
    <div class="row">
      <div class="col col-12">
        <h1 class="subtitle-text green-text text-center">
          Conecta con nuestro equipo, te ayudaremos.
        </h1>
      </div>
      <div class="col col-12 col-md-6">
        <div id="form_container">
          <form
            v-if="form.success == false"
            role="form"
            method="post"
            @submit.prevent="sendEmail"
          >
            <input
              class="input-text"
              placeholder="Escribe tu nombre aquí."
              type="text"
              id="name"
              name="name"
              v-model="form.name"
              required
            />

            <input
              class="input-text"
              placeholder="Escribe tu email aquí."
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              required
            />

            <textarea
              class="input-text"
              placeholder="Escribe un mensaje aquí.."
              type="textarea"
              id="message"
              name="message"
              v-model="form.message"
              maxlength="6000"
              rows="7"
              @keyup="form.errorMessage = ''"
            ></textarea>

            <button id="submit-button" type="submit">{{form.sending ? "Enviando..." : "Enviar"}}</button>
          </form>

          <h3 id="success_message" v-if="form.success == true"  class="orange-text">
            ¡Gracias por comunicarte con nosotros, en un momento un asesor te
            atenderá!
          </h3>
          <small
            id="error_message"
            v-if="form.errorMessage"
           
          >
            {{ form.errorMessage }}
          </small>
        </div>
      </div>
      <div class="col dv"></div>
      <div class="col col-12 col-md-5">
        <div class="row">
          <div class="col col-12 col-md-5">
            <h1 class="subtitle2-text green-text">Contacto</h1>
            <a href="https://wa.link/ddyo9x" target="_blank"
              ><p class="green-text">Tel. 612 169 4149</p></a
            >
            <a href=""><p class="green-text">contacto@henkomexico.com</p></a>
            <a href="https://www.facebook.com/henkorealestate" target="_blank"><p class="green-text">Fb. Henko Consulta Inmobiliaria</p></a>
          </div>
          <div class="col col-1 text-center dv">
            <img src="../../assets/img/linea.svg" alt />
          </div>
          <div class="col col-12 col-md-5">
            <h1 class="subtitle2-text green-text">Domicilio</h1>
            <p class="green-text">Calle Isabel La Católica #350</p>
            <p class="green-text">CP. 23000, Col. Centro</p>
            <p class="green-text">La Paz B.C.S</p>
          </div>
        </div>
      </div>
      <div class="col col-12">
        <img class="contact-img dv" src="../../assets/img/s4-bg.jpg" alt="" />
        <img class="contact-img mv" src="../../assets/img/s4-bg-m.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Contact",
  data: () => ({
    form: {
      name: null,
      email: null,
      message: null,
      success: false,
      errorMessage: "",
      sending: false
    },
  }),
  methods: {
    sendEmail(e) {
      this.form.sending = true;
      if (!this.form.name || !this.form.email || !this.form.message){
        this.form.sending = false;
        this.form.errorMessage = "¡Escriba algún mensaje!"
      }else{
         emailjs
        .sendForm(
          "service_wllniy2",
          "template_rx4bt65",
          e.target,
          "user_KlhwQzG7EmnguJ6n8hwtu"
        )
        .then(
          (result) => {
            this.form.success = true;
            console.log(this.form.success);
            this.form.sending = false;
            //console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            this.form.sending = false;
            //console.log("FAILED...", error);
          }
        );
      }
     
    },
  },
};
</script>

<style  lang="scss" scoped>
.contact {
  height: 100vh;
  padding: 30px;
  #form_container {
    width: 100%;
    float: left;
    .input-text {
      width: 100%;
      font-size: 1rem;
      background-color: #ffffff;
      color: #053844;
      border: solid 2px;
      border-color: #053844 !important;
      margin-top: 1rem;
      padding: 10px;
      -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
      -moz-box-sizing: border-box; /* Firefox, other Gecko */
      box-sizing: border-box;
      resize: none;
    }
    #submit-button {
      margin-top: 1rem;
      margin-bottom: 0;
      float: right;
      background: #ff6b11;
      color: #ffffff;
      border: none;
      padding: 10px 25px;
      font-size: 1rem;
      font-family: "Product Sans Bold", Arial, sans-serif;
    }
    #success_message {
      font-size: 1rem;
      text-align: center;
    }
    #error_message{
       color: red;
       font-size: .8rem;
    }
  }
  .contact-img {
    height: calc(80% - 3.5rem);
    width: 100%;
    margin-top: 70px;
  }
}

@media screen and (max-width: 768px) {
  .contact {
    height: 100%;
    padding: 30px;
    #form_container {
      width: 100%;
      .input-text {
        width: 100%;
        font-size: 1rem;
        background-color: #ffffff;
        color: #053844;
        border: solid 2px;
        border-color: #053844 !important;
        margin-top: 1rem;
        padding: 10px;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box; /* Firefox, other Gecko */
        box-sizing: border-box;
        resize: none;
      }
      #submit-button {
        margin-top: 1rem;
        margin-bottom: 1rem;
        background: #ff6b11;
        color: #ffffff;
        border: none;
        padding: 10px 25px;
        font-size: 1rem;
        font-family: "Product Sans Bold", Arial, sans-serif;
        width: 100%;
      }
    }
    .contact-img {
      height: 100%;
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
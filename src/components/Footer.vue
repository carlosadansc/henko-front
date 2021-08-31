<template>
  <footer>
    <div class="copyright dv">
      <a class="footer-logo" href="/">
        <img src="../assets/img/footer-logo.png" alt />
      </a>

      <p class="footer-title terms-privacy-policy dv">Henko Real State</p>
      <p class="dv">
        <strong class="text-footer-size">@Henko2021</strong>
        <span
          ><a class="text-footer-size green-text" @click="goTo('/terms')">
            Términos y condiciones</a
          ></span
        >
        |
        <span
          ><a class="text-footer-size green-text" href="">
            Politicas de privacidad</a
          ></span
        >
      </p>
    </div>

    <div class="social-container dv">
      <p class="footer-title social">
        <span
          ><a href="https://www.facebook.com/henkorealestate" target="_blank"
            >Facebook,
          </a></span
        >
        <span
          ><a href="https://www.instagram.com/henkorealestate/" target="_blank"
            >Instagram,
          </a></span
        >
        <span
          ><a
            href="https://www.linkedin.com/company/henko-real-estate/mycompany/"
            target="_blank"
            >LinkedIn</a
          ></span
        >
      </p>
      <p class="text-footer-size">
        Made with ❤ by
        <strong>
          <a class="text-footer-size green-text" href="#">Async</a>
        </strong>
        Agencia Creativa
      </p>
    </div>

    <a class="footer-logo mv" href="/">
      <img src="../assets/img/footer-logo-m.png" alt />
    </a>

    <div class="social-container mv">
      <p class="footer-title social social-link-m">
        <span
          ><a href="https://www.facebook.com/henkorealestate" target="_blank"
            >Facebook</a
          ></span
        >
      </p>
      <p class="footer-title social social-link-m">
        <span
          ><a href="https://www.instagram.com/henkorealestate/" target="_blank"
            >Instagram</a
          ></span
        >
      </p>
      <p class="footer-title social social-link-m">
        <span
          ><a
            href="https://www.linkedin.com/company/henko-real-estate/mycompany/"
            target="_blank"
            >LinkedIn</a
          ></span
        >
      </p>
    </div>

    <ul class="orange-text mv">
      <li>Tel. 612 169 4149</li>
      <li>contacto@henkomexico.com</li>
    </ul>

    <p class="terms-privacy-policy-mobile">
      <strong>@Henko2021</strong>
      <span><a href="" @click="goTo('/terms')">Términos y condiciones</a></span>
      &
      <span><a href=""> Politicas de privacidad</a></span>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goTo(path) {
      let routeData = this.$router.resolve(path);
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
/*Mobile view styles*/
footer {
  background: #053844;
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 30px 30px 0 30px;
  a{
    cursor: pointer;
  }
}

.footer-title {
  font-family: "Product Sans Regular", Arial, sans-serif;
}

.footer-logo img {
  height: 150px;
  display: inline-block;
}

.copyright {
  text-align: center;
  width: 100%;
}

.social-container {
  text-align: center;
  width: 100%;
}

.terms-privacy-policy {
  display: none;
}

.terms-privacy-policy-mobile {
  display: block;
  padding-top: 0;
  font-size: small;
}

.terms-privacy-policy-mobile span a {
  font-size: small;
  color: #ffffff;
}

.social {
  text-align: center;
}

.social a {
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
}

.social-link-m {
  margin: 10px 0;
}

/*Tablet view styles--------------------------------------------------------------------------------------------------------------*/
@media only screen and (min-width: 768px) {
}

/*Desktop view styles----------------------------------------------------------------------------------------------------------------*/
@media only screen and (min-width: 992px) {
  footer {
    background: #ffffff;
    height: 8rem;
    display: block;
    color: #053844;
    margin: 2rem 0 2rem 0;
  }

  .footer-title {
    font-family: "Product Sans Bold", Arial, sans-serif;
    font-size: 20px;
  }

  .text-footer-size {
    font-size: 0.8rem;
  }

  .footer-logo img {
    float: left;
    height: 90px;
    display: inline;
    margin-right: 15px;
  }

  .copyright {
    width: 50%;
    float: left;
    text-align: left;
  }

  .social-container {
    width: 50%;
    float: right;
    text-align: right;
  }

  .terms-privacy-policy {
    display: block;
    padding-top: 20px;
  }

  .terms-privacy-policy-mobile {
    display: none;
  }

  .social {
    text-align: right;
    padding-top: 20px;
  }

  .social a {
    font-size: 20px;
    font-weight: bold;
    color: #053844;
  }
}
</style>
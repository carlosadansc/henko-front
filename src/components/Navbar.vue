<template>
  <nav :class="{ 'hidden-navbar': !showNavbar }">
    <div
      id="burger-d"
      :class="showMenu ? 'burger toggle' : 'burger'"
      @click="toggleMenu"
    >
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>

    <a class="logo" href="#">
      <img class="logo" src="../assets/img/henko-logo.svg" alt />
    </a>
    <ul :class="showMenu ? 'nav-links nav-active' : 'nav-links'">
      <li>
        <h1 class="subtitle2-text green-text">Menú</h1>
      </li>
      <li>
        <a href="/properties" @click="toggleMenu">Buscar</a>
      </li>
      <li>
        <a href="#inicio" @click="toggleMenu">Inicio</a>
      </li>
      <li>
        <a href="#filosofia" @click="toggleMenu">Filosofía</a>
      </li>
      <li>
        <a href="#equipo" @click="toggleMenu">Equipo</a>
      </li>
      <li>
        <a class="link-toggle" href="#contacto" @click="toggleMenu">Contacto</a>
        <img src="../assets/img/henko-circle.svg" alt="" />
      </li>
    </ul>

    <div
      id="burger-m"
      :class="showMenu ? 'burger toggle' : 'burger'"
      @click="toggleMenu"
    >
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    showNavbar: true,
    lastScrollPosition: 0,
    scrollValue: 0,
  }),

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
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-size: 16px;
  color: #053844;
}

li {
  list-style: none;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  min-height: 8vh;
  transition: all 0.5s ease-out;
  padding: 30px 30px 0 30px;
  z-index: 1;
}

.hidden-navbar {
  transform: translate3d(0, -100%, 0);
}

.logo {
  img {
    height: 25px;
    margin-left: 0px;
    margin-bottom: 5px;
  }
}

.nav-links {
  background-color: #ff6b11;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 50%;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0.5s, opacity 0.5s ease-in;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  li {
    list-style: none;
    padding: 30px 35px;
    &:last-child {
      padding-right: 100px;
    }
    a {
      font-size: 2.5rem;
      font-weight: bold;
      color: #ffffff;
      font-family: "Quincy Bold", Arial, sans-serif !important;
    }
    img {
      float: right;
    }
  }
}

.burger {
  display: block;
  cursor: pointer;
  background-color: transparent;
  padding: 10px 7px;
  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background: #053844;
    transition: 0.3s ease-in-out;
  }
}

#burger-m {
  display: none;
}

#burger-d {
  display: block;
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

/*Mobile view---------------------------------------------------------------------------------------------------------------------*/

@media screen and (max-width: 768px) {
  nav {
    justify-content: space-between;
    padding: 30px 35px 0 30px;
    z-index: 999;
  }

  .logo {
    img {
      margin-left: 0;
    }
  }

  .nav-links {
    width: 100%;
    li {
      list-style: none;
      padding: 20px 30px;
      &:last-child {
        padding-right: 90px;
      }
      a {
        font-size: 1.5rem;
      }
      img {
        float: right;
      }
    }
  }

  #burger-d {
    display: none;
  }

  #burger-m {
    display: block;
  }
}
</style>
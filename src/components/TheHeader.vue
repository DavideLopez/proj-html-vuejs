<template>
  <div>
      <header>
          <div class="navigation-bar">
              <div class="container">
                  <div class="d-flex justify-content-between align-items-center">

                      <!--LOGO PAGINA-->
                      <div class="page-logo">
                          <img src="../assets/img/logo-dark.png" alt="logo-landrick">
                      </div>

                      <!--LINK DI NAVIGAZIONE-->
                      <div class="page-navlink">
                          <ul class="list-unstyled m-0 d-flex">
                              <li v-for="(link, i) in navLinks" :key="i">
                                  <a href="#">{{ link.name }} <i :class="link.icon" class="ms-1"></i></a>
                              </li>
                          </ul>
                      </div>

                      <!--FEATURES-->
                      <div class="page-features">
                          <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                          <button v-for="btn in features" :key="btn.name" class="square-btn">
                              <i :class="btn.icon"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          <!--JUMBOTRON PRESENTAZIONE PAGINA-->
          <TheJumbrotron></TheJumbrotron> 

      </header>
  </div>
  
</template>

<script>
import TheJumbrotron from "./TheJumbrotron.vue";

export default {
  name: "TheHeader",
  data() {
      return {
          navLinks: [
              {
                  name: "Home",
                  icon: null,
              },
              {
                  name: "Landing",
                  icon: "fa-solid fa-angle-down"
              },
              {
                  name: "Pages",
                  icon: "fa-solid fa-angle-down",
              },
              {
                  name: "Docs",
                  icon: "fa-solid fa-angle-down",
              },
          ],
          features: [
              {
                  name: "GitHub",
                  icon: "fa-brands fa-github",
              },
              {
                  name: "Stack Overflow",
                  icon: "fa-brands fa-stack-overflow",
              },
              {
                  name: "User",
                  icon: "fa-regular fa-user",
              }
          ],
      };
  },
  components: { TheJumbrotron }
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
@import "../style/buttons.scss";



header {
  background-color: $primary;

  .navigation-bar {
      background-color: $primary;
      position: fixed;
      padding: 5rem 0;
      width: 100%;
      z-index: 1;
  }

  .page-logo img {
      height: 20px;
  }

  .page-navlink {
      text-transform: uppercase;
      font-size: .7rem;

      a {
          font-weight: bold;
          color: $font-darkgray;
          text-decoration: none;
          padding: 1.5rem;

          &:focus {
              color: $secondary;
      }
      }
  }

  .page-features {
      .fa-magnifying-glass {
          color: $font-gray;
          font-size: .9rem;
          margin-right: .5rem;
      }

      button {
          width: 30px;
          margin: .2rem;
          box-shadow: 0px 2px 5px #c5d0f2;

          i {
              display: block;
              color: $secondary;
              font-size: .8rem;
              padding: .4rem .1rem;
          }

          &:hover {
              background-color: $secondary;

              i {
                color: white;
              }
          }
      }
  }
}
</style>

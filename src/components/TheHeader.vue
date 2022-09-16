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
                          <a href="#"><font-awesome-icon icon="fa-magnifying-glass"></font-awesome-icon></a>
                          <button v-for="btn in features" :key="btn.name" class="square-btn">
                              <i :class="btn.icon"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          <!--JUMBOTRON -->
          <TheJumbrotron />

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
  components: { TheJumbrotron,}
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
@import "../style/buttons.scss";
@import "../style/index.scss";

  header {
    background-color: $primary;
    .navigation-bar {
        background-color: $primary;
        position: fixed;
        padding: 30px 0;
        width: 100%;
        z-index: 1;
    }
    .page-logo img {
        height: 20px;
    }
    .page-navlink {
        text-transform: uppercase;
        font-size: 14px;

        a {
            font-weight: bold;
            color: $font-darkgray;
            text-decoration: none;
            padding: 1.5rem;
            &:focus {
                color: $secondary;                
            }
            &:hover {
                    color: #007bFF;
            }
        }
    }
    
    .page-features {
        .fa-magnifying-glass {
            color: $font-gray;
            font-size: 18px;
            margin-right: 8px;
        }

         .fa-github {
            font-size: 18px;
            color: black;
         }   

        button {
            width: 30px;
            margin: 5px;
            box-shadow: 0px 2px 5px #c5d0f2;
            i {
                display: block;
                color: $secondary;
                font-size: 14px;
                padding: 8px 2px;
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

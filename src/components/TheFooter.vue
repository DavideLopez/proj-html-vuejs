<template>
    <div class="wrapper">
        <footer>
            <div class="container">

                <!--SOMMARIO LANDRICK + SOCIAL-->
                <div class="row">
                    <div class="col">
                        <img src="img/logo-light.png" alt="logo landrick">
                        <p class="pb-1">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <div class="social-container">
                            <button class="square-btn" v-for="(social, i) in social" :key="i"><i :class="social.icon"></i></button>
                        </div>
                    </div>

                    <!--COLONNE CON LINK INTERNI AL SITO-->
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <h6 class="fw-bold text-white pb-2">Company</h6>
                                <ul class="list-unstyled m-0">
                                    <li v-for="(link, i) in companyLinks" :key="i">
                                    <font-awesome-icon icon="fa-solid fa-chevron-right"></font-awesome-icon><a href="#"> {{ link }}</a></li>
                                </ul>
                            </div>

                            <div class="col">
                                <h6 class="fw-bold text-white pb-2">Useful Links</h6>
                                <ul class="list-unstyled m-0">
                                    <li v-for="(link, i) in usefulLinks" :key="i">
                                    <font-awesome-icon icon="fa-solid fa-chevron-right"></font-awesome-icon><a href="#"> {{ link }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!--ISCRIZIONE NEWSLETTER-->
                    <div class="col-3">
                        <h6 class="fw-bold text-white pb-3">Newsletter</h6>
                        <p>Subscribe and receive the latest tips via email.</p>
                        <div class="fw-bold pb-1">Write your email <span class="asterisk-sign">*</span></div>

                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput"><font-awesome-icon icon="fa-regular fa-envelope me-2"></font-awesome-icon> Your email:</label>
                            <button class="sub-btn">Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>
        </footer>

        <LowFooter />
        
        <!--BOTTONE CHE SCROLLA IN CIMA ALLA PAGINA-->
        <button class="scroll-btn square-btn" @click="toTheTop()"><font-awesome-icon icon="fa-solid fa-arrow-up"></font-awesome-icon></button>
    </div>
</template>


<script>
import LowFooter from './LowFooter.vue'

export default {
    name: "TheFooter",
    components: { LowFooter },
    data() {
        return {
            social: [
                {
                    name: "Facebook",
                    icon: "fa-brands fa-facebook",
                },
                {
                    name: "Instagram",
                    icon: "fa-brands fa-instagram",
                },
                {
                    name: "Twitter",
                    icon: "fa-brands fa-twitter",
                },
                {
                    name: "Linkedin",
                    icon: "fa-brands fa-linkedin-in",
                },
            ],
            companyLinks: ["About us", "Services", "Team", "Pricing", "Project", "Careers", "Blog", "Login"],
            usefulLinks: ["Terms of Services", "Privacy Policy", "Documentation", "Changelog", "Components"],
        };
    },
    methods: {
        toTheTop() {
            window.scrollTo(0, 0);
        }
    },
}
</script>



<style scoped lang="scss">
@import "../style/variables.scss";
@import "../style/buttons.scss";


.wrapper {
    position: relative;

    footer {
        background-color: $quaternary;
        padding: 40px 0;
        color: $font-lightgray;
        font-size: 14px;
        border-bottom: 1px solid #27314f;

        img {
            height: 20px;
            margin-bottom: 25px;
        }

        .square-btn {
            background-color: $quaternary;
            width: 25px;
            height: 25px;
            margin: 5px;
            border: 1px solid $font-lightgray;

            &:hover {
                background-color: lighten($color: $quaternary, $amount: 20);
            }

            i {
                color: $font-lightgray;
                font-size: 12px;
            }
        }

        //LINKS SECTION 
        li {
            padding-top: 8px;

            i {
                font-size: 6px;
                margin-right: 8px;
                vertical-align: middle;
            }

            a {
                text-decoration: none;
                color: $font-lightgray;
            }
        }
        
        //NEWSLETTER SECTION 
        .asterisk-sign {
            color: $reddish;
        }

        .form-floating > .form-control {
            height: 20px;
        }
        .form-control {
            background-color: #27314f;
            border: none;
        }

        .form-floating > label {
            padding: 5px 15px;
            height: auto;
        }

        .sub-btn {
            width: 100%;
            background-color: #27314f;
            color: $secondary;
            font-size: 14px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            padding: 10px;
            margin-top: 1rem;
            box-shadow: 0px 2px 5px $tertiary;

            &:hover {
                background-color: lighten($color: #27314f, $amount: 5);
                color: $font-lightgray;
            }
        }
    }
    .scroll-btn {
        background-color: transparent;
        width: 30px;
        height: 30px;
        position: fixed;
        right: 20px;
        bottom: 20px;
        line-height: 35%;
        
            i {
                color: $font-lightgray;
                font-size: 12px;
            }

            &:hover {
                background-color: $tertiary;
                    
                i {
                    color: white;
                }
            }
    }
}   
</style>
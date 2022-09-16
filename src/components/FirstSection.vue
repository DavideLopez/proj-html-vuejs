<template>
    <div class="container py-5">
        <h4 class="fw-bold pt-5 pb-3 text-black">Key Features</h4>
        <p class="w-50">Start working with <span>Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

        <div class="row">
            <div class="col" v-for="(card, i) in keyFeatures" :key="i">

                <div class="my-card">
                    <div class="square-btn"><i class="fa-solid" :class="card.icon"></i></div>
                    <h6 class="fw-bold text-black pt-3">{{ card.title }}</h6>
                    <p class="w-100">{{ card.content }}</p>
                    <a href="#">Read More <font-awesome-icon icon="fa-chevron-right"></font-awesome-icon></a>

                    <i class="fa-solid bg-icon" :class="card.icon"></i>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'FirstSection',
    data() {
        return {
            keyFeatures: [
                {
                    icon: 'fa-layer-group',
                    title: 'Modular',
                    content: 'Composed in a pseudo-Latin language which more or less corresponds',
                },
                {
                    icon: 'fa-display',
                    title: 'Responsive',
                    content: 'Composed in a pseudo-Latin language which more or less corresponds',
                },
                {
                    icon: 'fa-arrows-to-eye',
                    title: 'Customizable',
                    content: 'Composed in a pseudo-Latin language which more or less corresponds',
                },
                {
                    icon: 'fa-maximize',
                    title: 'Scalable',
                    content: 'Composed in a pseudo-Latin language which more or less corresponds',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
@import "../style/buttons.scss";


.container {
    font-size: 14px;
    color: $font-gray;

        & > p {
            width: 50%;
            padding-bottom: 30px;

            span {
                color: $secondary;
                font-weight: bold;
            }
        }

        //CARD INTERNA ALLE COL
        .my-card {
            border: 1px solid $light-border;
            border-radius: 5px;
            padding: 1rem;
            transition: transform .3s linear;
            position: relative;
            overflow: hidden;

            .square-btn {
                height: 50px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;

                i {
                    font-size: 1rem;
                    color: $secondary;
                    text-align: center;
                }
            }

            //READ MORE
            a {
                text-decoration: none;
                color: $secondary;
                font-size: 14px;
                font-weight: bold;

                & > i {
                    font-size: .5rem;
                }

            &:hover {
                color: $tertiary;
                transition: color .3s linear;
            }
        }

        //ICONA GRANDE ALL'HOVER
        .bg-icon {
            font-size: 150px;
            color: $btn-grey;
            position: absolute;
            left: 60px;
            top: 30px;
            z-index: -1;
            opacity: 0;
            transition: opacity .3s linear;
        }

        //ENTRAMBI GLI HOVER DELLA CARD
        &:hover {
            transform: translate(0px, -15px);
        }

        &:hover .bg-icon {
            opacity: 1;
        }
    }
}
</style>
<template>
    <div class="lower-footer">
        <div class="container d-flex justify-content-between align-items-center">

            <div class="copyright">
                <font-awesome-icon icon="fa-regular fa-copyright"></font-awesome-icon> 2020 Landrick. Design with <font-awesome-icon icon="fa-solid fa-heart"></font-awesome-icon> by Shreethemes.
            </div>

            <div class="payments">
                <img v-for="(img, i) in paymentMethods" :key="i"
                :src="'img/' + img.url" :alt="'Icona di' + img.name">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'LowFooter',
    data() {
        return {
            paymentMethods: [
                {
                    name: 'American Express',
                    url: 'american-ex.png',
                },
                {
                    name: 'Discover',
                    url: 'discover.png',
                },
                {
                    name: 'MasterCard',
                    url: 'master-card.png',
                },
                {
                    name: 'PayPal',
                    url: 'paypal.png',
                },
                {
                    name: 'Visa',
                    url: 'visa.png',
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.lower-footer {
    background-color: $quaternary;
    padding: 25px;
    position: relative;

    .copyright {
        color: $font-lightgray;
        font-size: 14px;

        

        .fa-heart {
            color: $reddish;
        }
    }
    .payments > img {
        gap: 10px;
        height: 20px;
        margin-left: 5px;
    }
}
</style>
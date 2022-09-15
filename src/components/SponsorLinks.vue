<template>
    <div class="low-header">
        <div class="container">
            <ul class="list-unstyled d-flex justify-content-center align-items-center">
                <li v-for="(sito, i) in extLinks" :key="i" class="px-5">
                    <a href="#">
                        <img :src="'img/' + sito.svg" :alt="'immagine di ' + sito.name">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExternalLinks',
    data() {
        return {
            extLinks: [
                {
                    name: 'Amazon',
                    svg: 'amazon.svg',
                },
                {
                    name: 'Google',
                    svg: 'google.svg',
                },
                {
                    name: 'Lenovo',
                    svg: 'lenovo.svg',
                },
                {
                    name: 'Paypal',
                    svg: 'paypal.svg',
                },
                {
                    name: 'Shopify',
                    svg: 'shopify.svg',
                },
                {
                    name: 'Spotify',
                    svg: 'spotify.svg',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.low-header {
    background-color: $primary;
    padding: 1.5rem;
    border-radius: 0 0 30% 30%;

    img {
        height: 20px;
    }
}



</style>
<template>
    <div>
        <div class="my-card">

            <div class="ribbon-container">
                <div class="ribbon" v-if="isBestPlan">Best!</div>
            </div>

            <div class="plan-nametag">{{ planTag }}</div>
            <h3 class="fw-bold pt-4 text-black mb-1">{{ planPrice }}</h3>
            <div>{{ planRep }}</div>
            <p class="pt-2 pb-3 border-bottom">{{ planDesc }}</p>

            <ul class="list-unstyled">
                <li class="pb-1" v-for="(el, i) in planDetails" :key="i"><i class="fa-regular fa-circle-check"></i> {{ el }}</li>
            </ul>

            <button class="my-btn blue-button">Buy Now</button>
            <p class="mb-0 pt-2">* No Credit Card required</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MyCard',
    props: {
        planTag: String,
        planPrice: String,
        planRep: String,
        planDesc: String,
        planDetails: Array,
        isBestPlan: Boolean,
    },
}
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";
@import "../style/buttons.scss";


.my-card {
    background-color: white;
    height: 100%;
    border-bottom: 3px solid $font-lightgray;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 1px $light-border;
    padding: 15px;
    position: relative;
    font-size: 14px;
    color: $font-gray;
    transition: border-bottom 1s, transform 1s, box-shadow 1s;

    .plan-nametag {
        background-color: $btn-grey;
        font-size: 1rem;
        color: $secondary;
        font-weight: 600;
        padding: 5px 15px;
        border-radius: 25px;
        border: 1px solid $btn-grey;
        display: inline-block;
    }

    li i {
        color: $secondary;
        margin-right: 5px;
    }

    button {
        margin: 0;
        display: block;
        width: 100%;
        

        // &:hover {
        //     cursor: pointer;
        // }
    }
    
    &:hover {
        transform: scale(1.05);
        border-bottom: 3px solid $secondary;
        box-shadow: 0px 5px 10px $font-lightgray;
        cursor: pointer;
    }
}

.ribbon-container {
    height: 80px;
    width: 80px;
    position: absolute;
    right: -5px;
    top: -5px;
    overflow: hidden;

    .ribbon {
        background-color: $orange;
        color: white;
        font-size: 14px;
        font-weight: bold;
        line-height: 15px;
        text-align: center;
        text-shadow: 0px 0px 2px $dark-orange;
        height: 15px;
        width: 85px;
        z-index: 2;
        position: absolute;
        right: -20px;
        top: 15px;
        transform: rotate(45deg);
    }
    .ribbon::before,
    .ribbon::after {
        position: absolute;
        z-index: -1;
        content: '';
        display: block;
        border: 3.2px solid $dark-orange;
        border-bottom-color: transparent;
    }

    .ribbon::before {
        top: 15px;
        left: 3px;
        border-right-color: transparent;
    }

    .ribbon::after {
        top: 15px;
        right: 3px;
        border-left-color: transparent;
    }
}
</style>
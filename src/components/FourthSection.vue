<template>
    <div class="container py-4">

        <!--INTESTAZIONE SECTION-->
        <div class="row justify-content-center text-center">
            <div class="col-7">
                <h4 class="fw-bold pb-3">Our rates for developer from landrick team</h4>
                <p>Start working with <span>Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
        </div>      

        <!--CARD PIANI TARIFFARI-->
        <div class="row">
            <div class="col" v-for="(element, i) in fetchData" :key="i">
                <MyCard :plan-tag="element.name" :plan-price="element.price" :plan-rep="element.repetition" :plan-desc="element.description" :plan-details="element.list" :is-best-plan="element.bestPrice === true"></MyCard>
            </div>
        </div>

    </div>
</template>

<script>
import MyCard from './MyCard.vue';
import { state } from '../storeCards.js'

export default {
    name: "FourthSection",
    components: { MyCard },
    computed: {
        fetchData() {
            return state.subscriptionData;
        },
    }
}
</script>

<style scoped lang="scss">
@import "../style/variables.scss";

p {
    color: $font-gray;
    font-size: 14px;
    padding-bottom: 30px;

    span {
        color: $secondary;
    }
}
</style>
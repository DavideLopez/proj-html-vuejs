<template>   <!--   QUI TUTTO IL CONTENUTO DELLE VARIE SEZIONI -->
    <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
       <!--  <FifthSection /> -->

    </div>
</template>

<script>   //DA CREARE!!!!!!!!!!!!!!!!! FORSE SONO 5 SEZIONI
import FirstSection from './FirstSection.vue';
import SecondSection from './SecondSection.vue';
import ThirdSection from './ThirdSection.vue';
import FourthSection from './FourthSection.vue';
// import FifthSection from './FifthSection.vue';

export default {
    name: "TheMain",
    components: { FirstSection, SecondSection, ThirdSection, FourthSection,},  //DA CREARE!!!!!!!!!!!!!!!!! FORSE SONO 5 SEZIONI
}

</script>

<style scoped lang="scss"> 

</style>
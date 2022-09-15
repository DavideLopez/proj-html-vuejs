   <!--   TUTTO IL CONTENUTO DELLE VARIE SEZIONI -->
<template>
    <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection /> 

    </div>
</template>

<!--     QUI TUTTO L'IMPORT DELLE VARIE SEZIONI -->
<script>    
import FirstSection from './FirstSection.vue';
import SecondSection from './SecondSection.vue';
import ThirdSection from './ThirdSection.vue';
import FourthSection from './FourthSection.vue';
import FifthSection from './FifthSection.vue';

export default {
    name: "TheMain",
    components: { FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection,},  
}

</script>

<style scoped lang="scss"> 

</style>
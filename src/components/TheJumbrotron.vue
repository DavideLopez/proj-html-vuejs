<template>
    <div class="jumbotron border-bottom">

        <div class="container pt-4">
            <div class="row align-items-center justify-content-center">

                <!--CONTENUTO TESTUALE-->
                <div class="col" v-for="(content, i) in textContainer" :key="i">
                    <span class="tag">{{ content.tag }}</span>

                    <h1>{{ content.title }}</h1>
                    <p class="pb-2">{{ content.paragraph }}</p>

                    <button class="my-btn blue-button">Get Started</button>
                    <button class="my-btn outline-btn">Documentation</button>

                    <p class="mt-2"><small>{{ content.version }}</small></p>
                </div>

                <!--IMMAGINE JUMBO-->
                <div class="col">
                    <img src="../assets/img/about.png" alt="jumbotron image" class="float-end">
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TheJumbrotron",
    data() {
        return {
            textContainer: [
                {
                    tag: "Development",
                    title: "A Complete Developer Toolset",
                    paragraph: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
                    version: "Current Version: v2.6.0",
                }
            ]
        };
    },
}
</script>


<style lang="scss" scoped>
@import "../style/variables.scss";
@import "../style/buttons.scss";

.jumbotron {
    padding-top: 8rem;
    padding-bottom: 4rem;

    .tag {
        border: none;
        border-radius: 50px;
        background-color: $btn-grey;
        border: 1px solid $btn-grey;
        color: $secondary;
        font-size: .6rem;
        font-weight: bold;
        margin-bottom: 1rem;
        padding: .1rem .2rem;
    }

    h1 {
        font-weight: bold;
        line-height: 60px;
    }

    p {
        color: $font-gray;
        font-size: .9rem;
    }
}
</style>
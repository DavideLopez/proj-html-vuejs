<template>
<div class="container py-4">

     <!--INTESTAZIONE SECTION-->
<div class="row justify-content-center text-center">
    <div class="col-6">
        <div class="quickstart">Quickstart</div>
        <h4 class="fw-bold pb-3">Awesome isn't it? Let's dive in!</h4>
        <p>Start working with <span>Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
    </div>
</div>

                <!--MOCKUP CODICE E COMANDI-->
<div class="row justify-content-center">
    <div class="col-8">
        <div class="code-table">
            
            <div class="code-navbar">
                <div class="code-btn" v-for="(command, i) in codeSection" :key="i">
                    <a @click="changePage(i)" :href="'#page-' + (i + 1)" :class="{'active' : selected === i}">{{ command }}</a>
                </div>
            </div>

            <div class="code-content">
                <div :id="'page-' + currentPage" :class="{'show' : currentPage === 0, 'd-none' : currentPage !== 0}">
                    <p class="mb-2"><span>$</span> npm install <span>-g</span> claps.js</p>
                </div>

                <div :id="'page-' + currentPage" :class="{'show' : currentPage === 1, 'd-none' : currentPage !== 1}">
                    <p class="mb-2"><span>£</span> nuget i <span>-f</span> claps.js</p>
                </div>

                <div :id="'page-' + currentPage" :class="{'show' : currentPage === 2, 'd-none' : currentPage !== 2}">
                    <p class="mb-2"><span>&</span> spm install Bootstrap <span>-h</span> claps.js</p>
                </div>

                <div :id="'page-' + currentPage" :class="{'show' : currentPage === 3, 'd-none' : currentPage !== 3}">
                    <p class="mb-2"><span>create</span> github repo <span>-d</span> claps.js</p>
                </div>
            </div>

        </div>

        <div class="d-flex pt-3">
            <p class="pe-4"><i class="fa-regular fa-circle-check"></i> Organize your data</p>
            <p><i class="fa-regular fa-circle-check"></i> Work with any team</p>
        </div>
    </div>
</div>
</div>    
</template>

<script>
export default {
    name: 'SecondSection',
    data() {
    return {
        codeSection: ['npm', 'nuget', 'spm', 'github'],
        currentPage: 0,
        selected: 0,
    }
        },
    methods: {
        changePage(indice) {
            this.currentPage = indice
            this.selected = indice
        },
    }
    }
</script>

<style scoped lang="scss">
@import "../style/variables.scss";

.quickstart, p > span {
    color: $secondary;
}

.quickstart, p {
    font-size: 14px;
}

p {
    color: $font-gray;
    padding-bottom: 2rem;
}

.code-table {
    background-color: $slate-gray;
    padding: 10px;
    border-radius: 5px;

    .code-navbar {
        background-color: #4f5a69;
        border-radius: 5px;
        margin: 10px;
        text-align: center;
        display: flex;

        .code-btn {
            width: calc(100% / 4);
            height: 100%;
            border-radius: 5px;

            a {
                height: 100%;
                color: white;
                text-decoration: none;
                font-weight: bold;
                padding: 5px 40px;
                display: block;
                border-radius: 5px;
                border: 1px solid #4f5a69;
            }
        }
    }

    .active {
        background-color: $slate-gray;
        border: 1px solid #576272;
    }

    .code-content {
        padding: 10px;
        font-weight: bold;

        & > div > p > span {
            color: $acid-green;
        }

        p {
            padding-bottom: 0;
        }
    }
}

.fa-circle-check {
    color: $acid-green;
    margin-right: 5px;
}

</style>



<script>
import { store } from '../store.js';
import ActorCard from './ActorCard.vue';
export default {
    name: 'CharactersGroup',
    components: {
        ActorCard
    },
    data(){
        return {
            store 
        }
    }
}
</script>

<template>
    <div class="container p-5 mt-3 bg-light">
            <div class="p-3 bg-dark text-light">Found {{store.length}} characters</div>
            <div class="row p-3 row-cols-5">
                <ActorCard v-for="character in store.characters" :test="character" />
                <!-- <div class="col" v-for="character in store.characters">
                    <div class="character text-center mb-2 rounded p-3">
                        <img class="rounded img-fluid" :src="character.img" alt="">
                        <h3 class="name fw-bolder text-light p-2 fs-5">{{ character.name }}</h3>
                        <div class="category fs-5">{{ character.category }}</div>
                        <div class="status pb-3 fs-5">{{ character.status }}</div>
                    </div>
                </div> -->
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .character {
        background-color: #2E3A46;
        max-height: 436px;
    }

    img {
        height: 280px;
    }
</style>
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
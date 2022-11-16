<script>
import CharactersGroup from './CharactersGroup.vue';
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        CharactersGroup,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <main>
        <div class="container">
            <select @change="$emit('test')"  class="form-select form-select-lg mb-3" v-model="store.selectCategory" aria-label=".form-select-lg example">
                <option value="All Character">Tutti i personaggi</option>
                <option value="Breaking Bad">Breaking Bad</option>
                <option value="Better Call Saul">Better Call Saul</option>
            </select>

        </div>
        <CharactersGroup />
    </main>

</template>


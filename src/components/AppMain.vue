<script>
//import DropDown from './DropDown.vue';
//import { store } from '../store.js';
import CharactersGroup from './CharactersGroup.vue';
export default {
    name: 'AppMain',
    components: {
        //DropDown,
        CharactersGroup,
    },/*
    methods: {
        test(event) {
            console.log('funziono');
            this.selected = event.target.value
            console.log( this.selected );
            if (this.selected == 'Breaking Bad') {
                console.log('qui metto api_url e funziono per i personaggi di breaking bad ');
            } else {
                console.log('qui metto api_url e funziono per i personaggi di Better Call Saul ');
            }
        }
    }
    */
}
</script>

<template>

    <main>
        <div class="container">
            <select @change="$emit('test')" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <!-- <option selected>Open this select menu</option> -->
                <!-- <option value="">Scegli la serie TV</option> -->
                <option value="">Seleziona una serie TV</option>
                <option value="Breaking Bad">Breaking Bad</option>
                <option value="Better Call Saul">Better Call Saul</option>
            </select>
            <!-- <div class="dropdown-center">
                <select class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false" @change="$emit('test')" >
                    <option class="dropdown-item" value="1">Breaking bad</option>
                    <option class="dropdown-item" value="2">Better Call Saul</option>
                </select>
            </div> -->
            <!-- <select class="dropdown-menu" v-model="categorySelector" @change="">
                <option class="dropdown-item" value="alive">Alive</option>
                <option class="dropdown-item" value="dead">Dead</option>
                <option class="dropdown-item" value="unknow">Unknow</option>
            </select> -->

            <!-- <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Lorem 1</a></li>
                <li><a class="dropdown-item" href="#">Lorem 2</a></li>
                <li><a class="dropdown-item" href="#">Lorem 3</a></li>
            </ul> -->

        </div>
        <!-- <DropDown /> -->
        <CharactersGroup />
    </main>

</template>


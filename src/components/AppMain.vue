<script>
import DropDown from './DropDown.vue';
import { store } from '../store.js';
import CharactersGroup from './CharactersGroup.vue';
export default {
    name: 'AppMain',
    components: {
        DropDown,
        CharactersGroup
    }
}
</script>

<template>

    <main>
        <DropDown />
        <CharactersGroup/>
    </main>

</template>


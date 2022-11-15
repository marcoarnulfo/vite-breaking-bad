
<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          this.store.characters = response.data
          this.store.length = response.data.length
        })
    },
    changeCharacters() {
      this.selected = event.target.value
      if (this.selected == 'Breaking+Bad') {
        const breakingBad = `${this.store.API_URL}?category=${this.selected}`
        this.callApi(breakingBad)
      } else if (this.selected == 'Better+Call+Saul'){
        const betterCallSoul = `${this.store.API_URL}?category=${this.selected}`
        this.callApi(betterCallSoul)
      } else {
        this.callApi(this.store.API_URL)
      }
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
  }
}

</script>

<template>

  <AppHeader />

  <AppMain @test="changeCharacters" />

  <footer>

  </footer>

  <!-- <p v-for="character in store.characters">{{character.nickname}}</p> -->

</template>




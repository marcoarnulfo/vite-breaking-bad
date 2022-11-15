
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
          console.log(response);
          this.store.characters = response.data
          this.store.length = response.data.length
          //this.store.info = response.data.img
        })
    },
    testMio() {
      console.log('funziono');
      this.selected = event.target.value
      console.log(this.selected);
      if (this.selected == 'Breaking Bad') {
        console.log('qui metto api_url e funziono per i personaggi di breaking bad ');
        this.callApi(this.store.test2_url)
      } else {
        console.log('qui metto api_url e funziono per i personaggi di Better Call Saul ');
        this.callApi(this.store.test_url)
      }
    }
  },
  mounted() {
    //this.callApi(this.store.API_URL)
    //console.log(this.store);
  }
}

</script>

<template>

  <AppHeader />

  <AppMain @test="testMio" />

  <footer>

  </footer>

  <!-- <p v-for="character in store.characters">{{character.nickname}}</p> -->

</template>




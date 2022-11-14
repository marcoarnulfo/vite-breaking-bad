
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
  components:{
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
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
    console.log(this.store);
  }
}

</script>

<template>

  <AppHeader/>
  <AppMain/>
  <footer>

  </footer>

  <!-- <p v-for="character in store.characters">{{character.nickname}}</p> -->

</template>




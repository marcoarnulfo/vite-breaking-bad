
<script>
import axios from 'axios';
import {store} from './store.js';
export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  methods : {
    callApi(url) {
      axios.get(url)
      .then (response => {
        console.log(response);
        this.store.characters = response.data.name
        this.store.info = response.data.img
      })
    } 
  },
  mounted(){
    this.callApi(this.store.API_URL)
    console.log(this.store);
  }
}

</script>

<template>

<p>
  {{store.name}}
</p>

</template>

<style lang="scss" scoped>

</style>

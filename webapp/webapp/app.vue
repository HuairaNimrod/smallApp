<template>

<form v-on:submit.prevent="lookMovie">
  <input v-model="itemMovie" placeholder="Enter movie name" />
  <button>search</button>
</form>

<div id="app">
  {{ info }}
</div>


</template>


<script>
import axios from 'axios'

export default {
  data(){
    {
      return{
        itemMovie : null ,// this is used to prevent access to input during render
        info : null 
      }
    }
  },
  methods:{
    async lookMovie(){
      axios 
      .get(`http://localhost:8080/movies?query=${this.itemMovie}`)
      .then(response => (this.info = response.data))
      .catch(error => console.log(error))
    }
  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

button {
  display: block;
  color: white;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: navy 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

button:active {
  background: rgb(52, 52, 162) 15px center;
}



</style>
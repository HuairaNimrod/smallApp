<template>

<input type="text" v-model="input" placeholder="Enter movie name" />
<button @click="lookMovie">search</button>
 
</template>


<script setup>
async function lookMovie(){
  try {
    const movie = "mulan"
    const response =  await fetch(`http://localhost:8080/movies?query=${movie}`);
    const listmovies =  response.json();
    console.log(listmovies);
  } catch (error) {
    console.error(error);
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
  background: white url("assets/search-icon.svg") no-repeat 15px center;
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
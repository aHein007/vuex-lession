<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter bg-danger">
       {{ counter }}
    </div>
    <button @click="increaseCounter()">+</button>
    <button @click="decreaseCounter()">-</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  
  },

  data(){
    return {
      counter:0
    }
  },

  methods:{
    increaseCounter(){
      this.counter++
    },

    decreaseCounter(){
      this.counter--
    }
  }
}


</script>
<style>
.counter{
  font-size: 50px;
}

button{
 width: 50px;
 margin: 30px;
 padding: 10px;
 cursor: pointer;
 font-size: 20px;
 background-color: aqua;
 border: none;
}
</style>
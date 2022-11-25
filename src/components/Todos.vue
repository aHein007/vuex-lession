<template>
  <h1 class="text-danger">All Todos </h1>
  <AddTodo></AddTodo>
  
    
   <div class="container d-flex flex-wrap ">
        <div class="card-container m-2" v-for="todo in myTodos" :key="todo"> 
            <div class="card text-white bg-danger mb-3 p-2" style="max-width: 18rem;">
        <div class="card-header">{{ todo.title }}</div>
        <div class="card-body d-flex ">
            <h5 class="card-title"></h5>
               
            <p class="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <i @click="deleteTodos(todo.id)" class="fa-solid fa-trash mt-1 "></i>
        </div>
    </div>
        </div>
   </div>
</template>

<script>

import AddTodo from './AddTodo'
import { mapActions, mapGetters } from 'vuex';
export default {
  components: { AddTodo },

    computed:{
       ...mapGetters([
        'myTodos'
       ])
    },

    methods:{
        ...mapActions([
            'getTodos'
        ]),

        ...mapActions([
            "deleteTodos"
        ])
    },

    mounted(){
        this.getTodos()
    }

    

   
}
</script>

<style>
.card-body i{
    cursor: pointer;
    font-size: 18px;
}
</style>
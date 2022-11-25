<template>
  <div class="input-group mb-3 w-50 m-auto">
    <input type="text" class="form-control " v-model="newToDo.title" placeholder="Add To Do List" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <span type="button" class="input-group-text" id="basic-addon2" @click="addTodos(newToDo)">Add Todo</span>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            newToDo:{
                title:""
            }
        }
    },

    methods:{
        ...mapActions(["addTodos"])
    }
}
</script>

<style>

</style>
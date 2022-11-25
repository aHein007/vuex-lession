import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    todos:[]
  },
  getters: { // get data form state here
    myTodos(state){
      return state.todos
    }
  },
  mutations: {// update your state in here
    setTodos(state,todoData){
      state.todos =todoData
    },

    newDataTodo(state,updatedata){
      state.todos.unshift(updatedata)
    },

    toDoDelete(state,id){
      state.todos.shift(id)
    }

    
  },
  actions: { //fetch in data here
   async getTodos({commit}){//commit is for call function from mutations
    let res =await axios.get('https://jsonplaceholder.typicode.com/todos')
    let todosData =res.data;
    commit('setTodos',todosData)
    },

    async addTodos(context,newTodo){
      let res =await axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
      let updatedata =res.data
      context.commit('newDataTodo',updatedata)
      
    },

    async deleteTodos(context,id){
      let res= await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      let idData =res.data
      context.commit("toDoDelete",idData)
    }
  },
  modules: {
  }
})

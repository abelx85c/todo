import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
Vue.use(Vuex)


console.log("印出 store/index.js")



export default new Vuex.Store({
  strict:true,

  state: {
    tasklist: []
  },
  mutations: {
    setContents(state, data){
      state.tasklist = data
      //alert("mutations/setContents")
      //console.log(state.contents)
    },
    addContent(state, data){
      state.tasklist.push(data)
    }
  },
  actions: {
    CONTENTS_READ: (context) => {
      return axios.get('http://localhost:3000/contents').then((res)=>{
        context.commit('setContents', res.data)
        //alert("actions/CONTENTS_READ")
      })
    }
  },
  modules: {
  }
})

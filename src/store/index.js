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
    tasklist: [],

  },
  mutations: {
    setContents(state, data){
      state.tasklist = data
      //alert("mutations/setContents")
      //console.log(state.contents)
    },
    editContent(state, data){
      let index = data.id
      state.tasklist[index] = data
      console.log("mutation editContent 接收到的 data是")
      console.log(data)
      console.log(state.tasklist[index])
    },
    addContent(state, data){
      state.tasklist.push(data)
    },
    removeContent(state, data){
      state.tasklist.splice(data, 1)
    },

  },
  actions: {
    CONTENTS_READ:(context) => {
      return axios.get('http://localhost:3000/contents/').then((res)=>{
        context.commit('setContents', res.data)
        // console.log("action 呼叫的讀取API返回的是")
        // console.log(res.data)
      })
    },
    CONTENT_DELETE:(context, { target  }) => {
      let index = context.state.tasklist.indexOf(target)
      console.log("action拿到的index是" + index)
      if(index <= -1) {return false}
      return axios.delete('http://localhost:3000/contents/' + target.id).then((res)=>{
        context.commit('removeContent', index)
        console.log("action 呼叫的刪除API返回的是")
        console.log( res)
        console.log("傳去mutation的index是"+ index)
      })
    }
  },
  modules: {
  }
})

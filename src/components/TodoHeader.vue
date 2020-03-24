<template>
    <div class="header">
        <h2>Todo Header</h2>
		<h3 class="big-title">添加任务：</h3>
		<input  
			placeholder="在此添加任务" 
			class="task-input" 
			type="text"
			v-model.trim="inputTask"
			@keyup.enter="createHandler"
		/>
		<input class="btn-input" type="button" @click="createHandler" value="+" />
        <ol>
            <li v-for="item in taskList" :key="item.id">
                {{item}}
            </li>
        </ol>
    </div>    
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
console.log("印出 components/TodoHeader.vue")


export default {
    name: 'TodoHeader',
    //不用data:{}物件的形式，而是使用function的形式避開傳值傳址的問題
    data: function() {
        return {
            inputTask:'',
        }
    },
    methods:{
        createHandler(){
            if(!this.inputTask){return false}
            axios.post('http://localhost:3000/contents',{
                tittle: this.inputTask,
                ischecked: false
            }).then((res)=>{
                this.inputTask = ''
                this.$store.commit('addContent', res.data)
            })
        }
    },
    mounted(){
        this.$store.dispatch('CONTENTS_READ')
    },
    computed:{
        taskList(){
            return this.$store.state.tasklist
        }
    }
}
</script>
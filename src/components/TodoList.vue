<template>
  <div class="main">
    <h3 class="big-title">添加任务：</h3>
    <input
      placeholder="在此添加任务"
      class="task-input"
      type="text"
      v-model.trim="inputTask"
      @keyup.enter="createHandler"
    />
    <input class="btn-input" type="button" @click="createHandler" value="+" />

    <el-table :data="taskList">
      <el-table-column prop="id" label="項目ID" width="120"></el-table-column>
      <el-table-column prop="tittle" label="項目標題"></el-table-column>
      <el-table-column>
        <el-button size="mini" type v-on:click="updateHandler">UPDATE</el-button>
      </el-table-column>
      <el-table-column>
        <el-button size="mini" type="danger" v-on:click="deleteHandler(index)">DELETE</el-button>
      </el-table-column>
    </el-table>

    

  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
console.log("印出 components/TodoHeader.vue");

export default {
  name: "TodoList",
  //不用data:{}物件的形式，而是使用function的形式避開傳值傳址的問題
  data: function() {
    return {
      inputTask: ""
    };
  },
  methods: {
    createHandler() {
      if (!this.inputTask) {
        return false;
      }
      axios
        .post("http://localhost:3000/contents", {
          tittle: this.inputTask,
          ischecked: false
        })
        .then(res => {
          this.inputTask = "";
          this.$store.commit("addContent", res.data);
        });
    },
    updateHandler() {},
    deleteHandler(index) {
      let target = this.taskList[index];
      console.log("從components TodoList 刪除功能 dispatch到action 的是");
      console.log(target);
      console.log({ target });
      this.$store.dispatch("CONTENT_DELETE", { target });
    }
  },
  mounted() {
    this.$store.dispatch("CONTENTS_READ");
  },
  computed: {
    taskList() {
      return this.$store.state.tasklist;
    }
  }
};
</script>
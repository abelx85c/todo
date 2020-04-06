<template>
  <div class="main">
    <div class="big-title">
      <h2>待辦清單</h2>
    </div>

    <!-- <input
      placeholder="在此添加任务"
      class="task-input"
      type="text"
      v-model.trim="inputTask"
      @keyup.enter="createHandler"
    />
    <input class="btn-input" type="button" @click="createHandler" value="新增" />-->

    <div class="add-button">
      <el-button type="primary" @click="on_click">新增任務</el-button>
      <TodoListDialog
        v-if="parent_dialogFormVisible == true"
        v-on:offDialog="parent_dialogFormVisible = false"
        v-bind:child_dialogFormVisible="parent_dialogFormVisible"
      ></TodoListDialog>
    </div>

    <el-table v-bind:data="taskList">
      <el-table-column prop="id" label="ID" width="140"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="type" label="類型"></el-table-column>
      <el-table-column prop="title" label="標題"></el-table-column>
      <el-table-column>
        <template>
          <el-button size="mini" type="warning" v-on:click="updateHandler()">UPDATE</el-button>
        </template>
      </el-table-column>
      <el-table-column>
        <template scope="scope_for_delete">
          <el-button
            size="mini"
            type="danger"
            v-on:click="deleteHandler(scope_for_delete.$index)"
          >DELETE</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import TodoListDialog from "@/components/TodoListDialog";

Vue.use(VueAxios, axios);
console.log("印出 components/TodoHeader.vue");

export default {
  name: "TodoList",
  data: function() {
    return {
      // inputTask: "",
      inputTask:{
        date:"",
        type:"",
        title:""
      },
      parent_dialogFormVisible: false
    };
  },
  components: {
    TodoListDialog
  },
  methods: {
    on_click() {
      this.parent_dialogFormVisible = true;
      console.log(
        "按了click按鈕parent_dialogFormVisible的值是" +
          this.parent_dialogFormVisible
      );
    },
    createHandler() {
      if (!this.inputTask) {
        return false;
      }
      axios
        .post("http://localhost:3000/contents", {
          date: this.inputTask.date,
          type: this.inputTask.type,
          title: this.inputTask.title,
          ischecked: false
        })
        .then(res => {
          // this.inputTask = "";
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
    //讀取任務清單
    this.$store.dispatch("CONTENTS_READ");
  },
  computed: {
    //讀取任務清單
    taskList() {
      return this.$store.state.tasklist;
    }
  }
};
</script>


<style scoped>

.big-title {
  text-align: center;
}
.add-button {
  text-align: left;
}
</style>
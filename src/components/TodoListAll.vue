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

    <div class="input">
      <el-input class="input-date" type="text" placeholder="日期" v-model="inputTask.date"></el-input>
      <el-input class="input-type" type="text" placeholder="類型" v-model="inputTask.type"></el-input>
      <el-input class="input-title" type="text" placeholder="請輸入欲修改的標題" v-model="inputTask.title"></el-input>
      <el-button class="input-summit"
                            size="small"
                            type="primary"
                            plain
                            @click = "summitHandler"
                            >送出修改</el-button>
      <el-button class="input-cancel"
                            size="small"
                            type="info"
                            plain
                            @click = "cancelHandler"
                            >取消修改</el-button>
    </div>

    <el-table v-bind:data="taskList">
      <el-table-column>
        <template>
          <el-button type="success" icon="el-icon-check" circle></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID" width="140"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="type" label="類型"></el-table-column>
      <el-table-column prop="title" label="標題"></el-table-column>
      <el-table-column>
        <template  scope="scope_for_edit">
          <el-button size="mini" type="warning" v-on:click="editHandler(scope_for_edit.$index)">EDIT</el-button>
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
    <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
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
      inputTask: {
        date: "",
        type: "",
        title: ""
      },
      editIndex: null,
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
    // createHandler() {
    //   if (!this.inputTask) {
    //     return false;
    //   }
    //   axios
    //     .post("http://localhost:3000/contents", {
    //       date: this.inputTask.date,
    //       type: this.inputTask.type,
    //       title: this.inputTask.title,
    //       ischecked: false
    //     })
    //     .then(res => {
    //       // this.inputTask = "";
    //       this.$store.commit("addContent", res.data);
    //     });
    // },
    editHandler(index) {
      this.editIndex = index
      console.log("src/components/TodoListAll editHandler收到的參數是 " +  index)
      //讓這東西短一點
      let date = this.taskList[index].date
      let type = this.taskList[index].type
      let title = this.taskList[index].title

      this.inputTask.date = date
      this.inputTask.type = type
      this.inputTask.title = title

    },
    deleteHandler(index) {
      let target = this.taskList[index];
      console.log("從components TodoList 刪除功能 dispatch到action 的是");
      console.log(target);
      console.log({ target });
      this.$store.dispatch("CONTENT_DELETE", { target });
      this.cancelHandler()
    },
    summitHandler(){
      //讓this.inputTask.date這種短一點
      let { date, type, title} = this.inputTask
      if(!date || !type || !title) return
      // console.log("src/componets/TodoListAll summitHandler 傳到action的是")
      // console.log(this.inputTask)
      // this.$store.dispatch("CONTENT_UPDATE", this.inputTask);
      axios.put("http://localhost:3000/contents/" + this.editIndex, {
          date: this.inputTask.date,
          type: this.inputTask.type,
          title: this.inputTask.title,
          ischecked: false
      })
      .then((res)=>{
        console.log("src/componets/TodoListAll summitHandler 傳到mutation的是")
        console.log(res.data)
        this.$store.commit('editContents', res.data)
      })
    },
    cancelHandler(){
      this.editIndex = null
      this.inputTask.date = "",
      this.inputTask.type = "",
      this.inputTask.title = ""
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
.input-date {
  width: 10%;
}
.input-type {
  width: 10%;
}
.input-title {
  width: 55%;
}
.input-summit {
  width: 10%;
}
.input-summit {
  width: 10%;
}
</style>
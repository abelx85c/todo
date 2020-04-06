<template>
  <el-dialog title="新增任務" :visible.sync="child_dialogFormVisible" :before-close="offClick">
    <el-form :model="form">

      <el-form-item label="日期" :label-width="formLabelWidth">
        <el-input v-model="form.date" autocomplete="off" placeholder="請輸入"></el-input>
      </el-form-item>  
      <el-form-item label="類型" :label-width="formLabelWidth">  
        <el-input v-model="form.type" autocomplete="off" placeholder="請輸入"></el-input>
      </el-form-item>  
      <el-form-item label="標題" :label-width="formLabelWidth">
        <el-input v-model="form.title" autocomplete="off" placeholder="請輸入"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="createHandler_dialog">確定</el-button>
      <el-button @click="offClick">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
//import Vue from "vue";
import axios from "axios";
//import VueAxios from "vue-axios";

export default {
  data() {
    return {
      form: {
        date: "",
        type: "",
        title: ""
      },
      formLabelWidth: "50px"
    };
  },
  props: {
    child_dialogFormVisible: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    offClick() {
          this.$emit('offDialog')
          console.log("子組件Dialog offClick() 回傳母組件")
    },
    createHandler_dialog() {
      this.$emit('offDialog')
      console.log("子組件Dialog offClick() 回傳母組件")
      if (!this.form.title) {
        return false;
      }
      axios
        .post("http://localhost:3000/contents", {
          date: this.form.date,
          type: this.form.type,
          title: this.form.title,
          ischecked: false
        })
        .then(res => {
          this.form.date = "";
          this.form.type = "";
          this.form.title = "";
          this.$store.commit("addContent", res.data);
          console.log(res.data);
        });

    }
  }
};
</script>
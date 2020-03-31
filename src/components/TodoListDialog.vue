<template>
  <el-dialog title="新增任務" :visible.sync="child_dialogFormVisible" :before-close="offClick">
    <el-form :model="form">
      <el-form-item label="任務名稱" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="offClick">取 消</el-button>
      <el-button type="primary" @click="createHandler_dialog">確定</el-button>
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
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
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
      if (!this.form.name) {
        return false;
      }
      axios
        .post("http://localhost:3000/contents", {
          tittle: this.form.name,
          ischecked: false
        })
        .then(res => {
          this.form.name = "";
          this.$store.commit("addContent", res.data);
          console.log(res.data)
        });

    }
  }
};
</script>
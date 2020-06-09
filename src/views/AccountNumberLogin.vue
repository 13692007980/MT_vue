<template>
  <div class="ANlogin-wrapper">
      <el-form ref="form" :rules="rules" label-position="left" :model="form" class="ANlogin-box">
        <el-form-item prop="username">
            <el-input placeholder="账户名/手机号/Email" v-model.trim="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input placeholder="请输入您的密码" type="password" v-model.trim="form.password"></el-input>
        </el-form-item>
        <el-form-item v-show="isRegister" prop="nickname">
            <el-input placeholder="昵称" v-model.trim="form.nickname"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="btn" type="primary" @click="onSubmit">{{isRegister ? '注册': '登录'}}</el-button>
        </el-form-item>
        <p class="login-link">
            <router-link v-if="isRegister" to="/anlogin" tag="div" class="btn-right">已有账号？去登录</router-link>
            <router-link v-else to="/register" tag="div" class="btn-right">没有账号？去注册</router-link>
        </p>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isOn: false,
      form: {
        username: "",
        password: "",
        nickname: ""
      }
    };
  },
  computed: {
    isRegister() {
      return this.$route.path === "/register";
    },
    rules() {
      return {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        nickname: [
          { required: this.isRegister, message: "输入昵称", trigger: "blur" }
        ]
      };
    }
  },
  methods: {
    ...mapActions(["registerUser", "onLogin"]),

    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.isRegister) {    
            // 注册
            this.registerUser(this.form)
              .then(() => this.onLogin(this.form))
              .then(() => this.$router.push("/home"));
          } else {
            this.onLogin(this.form).then(res => {
              console.log(res)
              this.$router.push("/home")
            });
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.ANlogin-wrapper {
  width: 100vw;
  background: #fff;
}

.el-button {
      background: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
      border: 0;
      width: 90%;
      margin-left: 5%;
      padding: 10px 0 10px 0;
      font-size: 18px;
      border-radius: 6px;
      outline: none;
    }
.login-link {
  padding: 0 5px;
  line-height: 24px;
  font-size: 14px;
  text-align: right;

  .btn-right {
      display: inline-block;
      margin-right: 10px;
      font-size: 12px;
      color: #fe8c00;
    }
}
</style>

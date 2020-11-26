<template>
  <div class="color">
    <div id="loginbox">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img
          src="../assets/logo.png"
          alt=""
        >
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginref"
        :rules="loginrules"
        :model="loginform"
        class="login_form"
      >
        <el-form-item prop="usename">
          <el-input
            v-model="loginform.usename"
            prefix-icon="el-icon-s-custom"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginform.password"
            prefix-icon="el-icon-lock"
            show-password
          />
        </el-form-item>
        <el-form-item class="btns">
          <el-button
            type="primary"
            @click="login"
          >
            登录
          </el-button>
          <el-button
            type="info"
            @click="resetform"
          >
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginform: {
        usename: 'admin',
        password: '123456'
      },
      loginrules: {
        usename: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetform () {
      this.$refs.loginref.resetFields()
    },
    login () {
      this.$refs.loginref.validate(vaild => {
        if (!vaild) return
        // this.$http.get('').then(res =>{console.log(res);})
        this.$Message.success('登录成功')
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .color{
    background-color: #2b4b6b;
    height: 100%;
  }
  #loginbox{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box{
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns{
    display: flex;
    justify-content: flex-end;
  }
</style>

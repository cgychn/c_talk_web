<template>
  <div class="login-container">
    <div class="login-dialog">
      <div class="login-dialog-title">
        <span style="font-size: 30px; font-weight: bolder; color: white; margin-left: 30px;">C_Talk</span>
      </div>
      <div class="login-dialog-body">
        <div class="login-dialog-body-left">
          <div class="logo">
            c>_<br/>
            talk
          </div>
        </div>
        <div class="login-dialog-body-right">
          <p style="font-size: 25px; font-weight: bolder; color: white; margin-top: -35px;">
            登录
          </p>
          <a-input size="large" ref="userNameInput" placeholder="请输入用户名" style="margin-bottom: 30px;">
            <a-icon slot="prefix" type="user" />
          </a-input>
          <a-input size="large" ref="userPwdInput" placeholder="请输入密码" style="margin-bottom: 30px;">
            <a-icon slot="prefix" type="code" />
          </a-input>
          <a-button type="primary">
            登录
            <a-icon type="arrow-right" />
          </a-button>
        </div>
      </div>
      <div class="login-dialog-foot">
        <span style="color: #808080;">copyright 2022.5.2 @cgychn</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style lang="scss">

.login-container {
  width: 100%;
  height: 100%;
  background: #555555;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-dialog {
  width: 40%;
  height: 470px;
  background: #1d1d1d;
  overflow: hidden;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px 0px 4px 1px #1d1d1d;
}
.login-dialog-title {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.login-dialog-body {
  width: 100%;
  height: calc(100% - 130px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 160px;
  height: 160px;
  background: #f56b6b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
  margin-top: -15px;
  font-weight: bolder;
}
.login-dialog-foot {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-dialog-body-left {
  height: 100%;
  width: 40%;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-dialog-body-right {
  padding-right: 40px;
  padding-left: 20px;
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
}
.ant-input {
  background: #555555 !important;
  border-color: #000 !important;
  color: #e5e5e5;
}

</style>

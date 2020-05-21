<template>
  <div class="register">
    <van-nav-bar
  title="注册"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

    <van-field v-model="text" label="客户名称" />
    <van-field v-model="text" label="服务单位" />
    <van-field v-model="text" label="用户名" />
    <van-field v-model="password" type="password" label="密码" />
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field v-model="tel" type="tel" label="手机" />
    <van-field v-model="text" label="email" />
    <van-field v-model="text" label="备注" />
       <div style="margin: 16px">
     <van-button type="info" size="normal" native-type="submit" to="login">提交</van-button>
       </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);

export default {
  name: "register",

  data() {
    return {
      tel: "",
      text: "",
      digit: "",
      number: "",
      password: ""
    };
  },
  components: {},
  created() {},
  mounted() {},
   methods: {
    onClickLeft() {
  
        this.$router.push('login');
    },
  
  }
};
</script>
<style lang='scss' scoped>
</style>

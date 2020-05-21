<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button type="info" size="large" native-type="submit" to="index">登录</van-button>
      </div>
    </van-form>
    <div style="margin: 16px">
      <van-row type="flex">
        <van-col span="19">
          <van-field name="radio">
            <template #input>
              <van-radio-group v-model="radio" direction="horizontal">
              
              </van-radio-group>
            </template>
          </van-field>
        </van-col>
        <van-col span="5">
          <van-button color plain type="default" size="normal" native-type="submit" to="register">注册</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form } from "vant";
import { Button } from "vant";
import { Field } from "vant";
import { Col, Row } from "vant";
import { RadioGroup, Radio } from "vant";

const axios = require("axios");
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Field);
Vue.use(Form);
Vue.use(Button);

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      username: "",
      password: "",
      radio: "1",
      info: null
    };
  },
  mounted() {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      // axios
      //   .post("http://localhost:3000/login", {
      //     user: "luxiao", // 参数 firstName
      //     password: "123" // 参数 lastName
      //   })
      //   .then(function(response) {
      //     console.log(response.data.ResultMessage);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


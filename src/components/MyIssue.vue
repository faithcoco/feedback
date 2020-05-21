<template>
  <div class="issue">
    <van-nav-bar title="问题详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field label="问题" value="什么是U8?" readonly />
      <van-field label="问题类型" value="咨询" readonly />
      <van-field label="问题描述" value="U8要怎么使用" readonly />
      <van-field label="日期" value="2019-3-10" readonly />
      <van-field label="状态" value="已关闭" readonly />
      <van-field label="提问者" value="curry" readonly />
      <van-field label="关闭日期" value="2019-3-10" readonly />
    </van-cell-group>

    <van-list v-model="loading" :finished="finished" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" is-link to="issue" />
    </van-list>
    <van-row type="flex" justify="center">
  <van-col span="6"><van-button type="info" v-on:click="reverseMessage">未解决</van-button></van-col>
  <van-col span="6"><van-button type="info" v-on:click="reverseMessage">已解决</van-button></van-col>
</van-row>


    <van-divider>客户评价</van-divider>
    <van-rate v-model="value"  />
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";
import { Rate } from "vant";
import { NavBar } from "vant";
import { List } from "vant";
import { Divider } from "vant";
import { Button } from 'vant';
import { Col, Row } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Divider);
Vue.use(List);
Vue.use(NavBar);
Vue.use(Rate);
Vue.use(Field);
export default {
  name: "issue",
  data() {
    return {
      
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      value: 4
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
     reverseMessage: function () {
      Toast('谢谢反馈，再见！');
    },
    onClickLeft() {
      this.$router.push("my");
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        this.list.push(
          "客服回复：用友U8+承载了用友人十余年来为成长型企业的信息化管理所倾注的心血，它以U8财务业务一体化、U8 ERP、U8 All-in-One、U8+形象伴随中国经济的高速发展一路走来，见证了成长型企业信息化从7个应用模块到126个产品及行业应用、从简单管理到粗放管理到精细管理、从部门级应用到企业级应用到供应链级应用、从局部到集成到全面到软件及云应用、从少数人应用到全员应用、从中国走向亚太走向世界的发展历程。"
        );
        this.loading = false;

        if (this.list.length >= 1) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

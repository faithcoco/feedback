<template>
  <div class="Index">
    <div class="title" background="#3296FA" >
      <van-nav-bar title="首页" @click-right="onClickRight" >
          <van-icon name="manager-o" slot="right"  size="20"/>
      
      </van-nav-bar>
    </div>
   <form action="/">
  <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  
  />
  <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
</form>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" is-link to="issue" label="咨询" value="2020-3-27" />
    </van-list>
  </div>
</template>

<script>
import Vue from "vue";
import { List } from "vant";
import { Cell, CellGroup } from "vant";
import { PullRefresh } from "vant";
import { Icon } from 'vant';
import { Search } from 'vant';
import { Toast } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Tag } from 'vant';

Vue.use(Tag);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Search);
Vue.use(Icon);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(List);
export default {
  name: "",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      info:null,
      value: '',
         value1: 0,
      value2: 'a',
      option1: [
        { text: '全部问题', value: 0 },
        { text: '咨询', value: 1 },
        { text: '操作', value: 2 },
          { text: 'BUG', value: 3 },
        { text: '数据', value: 4 },
          { text: '其他', value: 5 },
     
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '最新回复', value: 'b' },
        { text: '最受关注', value: 'c' },
      ]
    };
  },
  components: {},
  created() {},
  mounted() {
  
  },
  methods: {
      onSearch(val) {
       this.list=[];
       this.list.push(val );
    },
    onCancel() {
      Toast('取消');
    },
    onClickRight() {
      this.$router.push("my");
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push("问题" + this.list.length);
        }
        this.loading = false;

        if (this.list.length >= 20) {
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

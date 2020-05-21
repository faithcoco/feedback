<template>
  <div class='my'>
      <van-nav-bar
  title="我的"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
      <van-cell title="我的问题" is-link to="my_issue" />
      <van-cell title="提交新问题" is-link to="add" />
  </div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
export default {
  name: 'my',
  
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    onClickLeft() {
       this.$router.push('index');
    },
    onClickRight() {
     
    }
  }
}
</script>
<style lang='scss' scoped>
</style>

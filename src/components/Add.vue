<template>
  <div class='Add'>
        <van-nav-bar
  title="提交新问题helloworld"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-field v-model="text" label="标题" />
<van-divider>问题类型</van-divider>
       <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />

</van-dropdown-menu>



<van-field
  v-model="message"
  rows="2"
  autosize
  label="问题描述"
  type="textarea"
  maxlength="50"
  placeholder="请输入"
  show-word-limit
/>
<van-divider>附件</van-divider>
<van-uploader v-model="fileList" multiple />
    <div style="margin: 16px">
      <van-button color plain type="default" size="normal" native-type="submit" to="index">提交</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';
import { Panel } from 'vant';
import { Field } from 'vant';
import { Divider } from 'vant';
import { Uploader } from 'vant';

Vue.use(Uploader);
Vue.use(Divider);
Vue.use(Field);
Vue.use(Panel);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  name: 'Add',
  data(){
   return {
        fileList: [
      
      ],
       message:"",
      value1: 0,
      option1: [
        { text: '请选择', value: 0 },
        { text: '咨询', value: 1 },
        { text: '操作', value: 2 },
        { text: 'BUG', value: 3},
           { text: '数据', value: 4 },
        { text: '其他', value: 5 },
      ]
    }
  },
  components: {},
  created(){},
  mounted(){},
  methods: {
    onClickLeft() {
      this.$router.push('my');
    },
    onClickRight() {
     
    }
  }
}
</script>
<style lang='scss' scoped>
</style>

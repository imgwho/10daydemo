<template>
  <div id="navbar">
    <span>XX报表</span>
    <img v-bind:src="img" v-on:click="toggle" />
    <div class="list" v-show="listShow">
      <div class="item" v-on:click="changedata('2016Q1')">2016Q1</div>
      <div class="item" v-on:click="changedata('2016Q2')">2016Q2</div>
    </div>
  </div>
</template>

<script>
import funnel from "../assets/logo.png";
export default {
  data () {
    return {
      img: funnel,
      listShow: false
    }
  },
  methods: {
    /* 控制菜单的开合 */
    toggle: function() {
      this.listShow = !this.listShow;
    },
    /* 向父组件发送事件change，并捎带参数id，也就是选择的时间 */
    changedata: function(id) {
      this.$emit('change', id);
      this.listShow = false;
    }
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #37363b;
  color: #fff;
  img {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
  }
  .list {
    position: absolute;
    right: 5px;
    top: 40px;
    width: 70px;
    height: 80px;
    background: #37363b;
  }
}
</style>
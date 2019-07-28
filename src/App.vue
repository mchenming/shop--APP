<template>
  <div id="app">
    <!-- 头部的部分 -->
    <div class="van-doc-nav-bar van-nav-bar van-hairline--bottom" style="z-index: 1;">
      <div class="van-nav-bar__left">
        <i class="van-icon van-icon-arrow-left van-nav-bar__arrow" v-if="$route.path!='/home'" @click='exit'></i>
      </div>
      <div class="van-nav-bar__title van-ellipsis">yqnsgszb</div>
      <div class="van-nav-bar__right"></div>
    </div>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- 底部公共的部分 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="star-o" to="/home">
        <span>i</span>
      </van-tabbar-item>
      <van-tabbar-item icon="gem-o" to="/find">发现</van-tabbar-item>
      <van-tabbar-item :info="$store.getters.forball" icon="cart-o" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      flag:false
    };
  },
  methods:{
    exit(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  padding-top:45px; 
  padding-bottom: 50px;
  .van-doc-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .van-nav-bar__title{
    color: #ff9;
    .van-nav-bar .van-icon{
      color: red;
    }
  }
  .van-nav-bar {
    background-color: rgb(171, 224, 245) !important;
  }
}

.v-enter {
  opacity: 0;
  transform: translate(100%);
  position: absolute;
}
.v-leave-to {
  opacity: 0;
  transform: translate(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}
</style>

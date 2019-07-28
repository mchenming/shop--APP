<template>
  <div class="appcon">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-if="flag"></div>
    </transition>
    <div class="content">
      <div class="mui-card">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in swipe" :key="index">
            <img :src="item.src" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="mui-card">
        <div class="mui-card-header"></div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>
              市场价:
              <span>￥{{this.message.market_price}}</span>
              销售价:
              <span>￥{{this.message.sell_price}}</span>
            </p>

            <div class="btn">
              <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
                <button class="mui-btn mui-btn-numbox-minus" type="button" style="width:30px;">-</button>
                <input id="test" class="mui-input-numbox" type="number" value="1" ref="change" />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
              <input type="button" value="立即购买" />
              <input type="button" value="加入购物车" @click="getball" />
            </div>
          </div>
        </div>
      </div>

      <div class="mui-card">
        <div class="mui-card-header"></div>
        <div class="product">
          <p>商品货号:{{this.message.goods_no}}</p>
          <p>库存情况:{{this.message.stock_quantity}}件</p>
          <p>上架时间:{{this.message.add_time}}</p>
        </div>
        <hr />
        <div class="mbtn">
          <!-- <mt-button plain size="large" type="primary">图文介绍</mt-button>
          <mt-button plain size="large" type="danger">商品评论</mt-button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../../../dabs/mui/js/mui.js";

export default {
  data() {
    return {
      id: this.$route.params.id,
      swipe: [],
      message: {},
      flag: false
    };
  },
  created() {
    this.getmessage();
    this.getdata();
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    getmessage() {
      this.axios.get("api/getthumimages/" + this.id).then(res => {
        // console.log(res)
        this.swipe = res.data.message;
      });
    },
    getdata() {
      this.axios.get("api/goods/getinfo/" + this.id).then(res => {
        console.log(res);
        this.message = res.data.message[0];
      });
    },
    beforeEnter(el) {
      el.style.transform = "translate(0)";
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.transform = "translate(100px,100px)";
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    // 获取小球的 里面商品的个数
    getball() {
      this.flag = !this.flag;
      var aa = this.$refs.change.value;
      var productinfo={
          id:this.message.id,
          price:this.message.sell_price,
          title:this.message.title,
          count:aa,
          kc:this.message.stock_quantity,
          flag:true
      }
        this.$store.commit("getproductInfo",productinfo)
        // console.log(productinfo)
    }
  }
};
</script>

<style lang="less" scoped>
.van-swipe {
  // height: 200px;
  img {
    width: 100%;
    background-size: cover;
  }
}
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: 465px;
  left: 90px;
  z-index: 1000;
}
.appcon {
  position: relative;
  height: 1000px;
}
</style>

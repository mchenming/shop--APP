<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3" router>
      <van-grid-item icon="gift-o" text="n" to="/home/news"/>
      <van-grid-item icon="point-gift-o" text="h" to="/home/pics"/>
      <van-grid-item icon="smile-o" text="h" @click='goproduct'/>
      <van-grid-item icon="flower-o" text="g" />
      <van-grid-item icon="like" text="b" />
      <van-grid-item icon="fire" text="d" />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [],
    };
  },
  created() {
    this.getimg();
  },
  methods: {
    getimg() {
      this.axios.get("api/getlunbo").then(res => {
        // console.log(res);
        this.imgList = res.data.message;
      });
    },
    goproduct(){
      this.$router.push('/home/product')
    }
  }
};
</script>


<style scoped lang="less">
.van-swipe {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

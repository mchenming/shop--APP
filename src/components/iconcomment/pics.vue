<template>
  <div>
    <van-tabs @click="onClick">
      <van-tab :title="value.title" v-for="value in titlelist" :key="value.id" :id="value.id" :name="value.id"></van-tab>
    </van-tabs>
    <ul>
      <router-link v-for="item in piclis" :key="item.id" :to="'/home/picsinfo/'+item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="content" v-html="item.content"></div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      piclis: [],
      titlelist: [],
      
    };
  },
  created() {
    this.getpics();
  },
  mounted() {
    this.onClick(0);
  },
  methods: {
    getpics() {
      this.axios.get("api/getimgcategory").then(res => {
        console.log(res);
        res.data.message.unshift({ title: "全部", id: 0 });
        this.titlelist = res.data.message;
      });
    },

    // 获取图片
    onClick(id, name) {
      this.axios.get("api/getimages/" + id).then(res => {
        // console.log(res);
        // console.log(id);
        // console.log(title);
        // console.log(name);
        this.piclis = res.data.message;
      });
    }
  }
};
</script>

<style lang="less" scoped>
ul > {
  background-color: #fff;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  li {
      margin-top: 10px;
    width: 100%;
    position: relative;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
    img {
      width: 100%;
      display: block;
    }
    .content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 48px;
        color: #fff;
        overflow: hidden;
        line-height: 16px;
        font-size: 14px;
        background: rgba(71, 70, 70, 0.5)
    }
  }
}
</style>

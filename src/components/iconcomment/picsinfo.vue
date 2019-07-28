<template>
  <div class="mpp">
    <div class="title">
      <h3>{{this.conts.title}}</h3>
      <p>
        <span>创建时间:{{this.conts.add_time | dateFormat}}</span>
        <span>点击次数:{{this.conts.click}}</span>
      </p>
    </div>
    <!-- 缩略图组件 -->
    <vue-preview :slides="slide1"></vue-preview>
    
    <div class="content" v-html="this.conts.content"></div>
    <!-- {{this.id}} -->

    <!-- 评论的组件 -->
    <comments :id='id'></comments>
  </div>
</template>

<script>
import comments from '../comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      conts: [],
      slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            w: 600,
            h: 400
          }
        ]
    };
  },
  created() {
    this.getcoms();
    this.getpics();
  },
  methods: {
    //   获取的信息
    getcoms() {
      this.axios.get("api/getimageInfo/" + this.id).then(res => {
        console.log(res);
        this.conts = res.data.message[0];
      });
    },
    // 获取的图片（缩略图）
    getpics() {
      this.axios.get("api/getthumimages/" + this.id).then(res => {
        console.log(res);
        this.slide1 = res.data.message;
        this.slide1.forEach(item=>{
            item.msrc=item.src
            item.w=600
            item.h=400
        })
      });
    }
  },
  components:{
      comments
  }
};
</script>

<style lang="less">
.title {
  padding: 10px;
  h3 {
    color: red;
  }
  p {
    display: flex;
    justify-content: space-between;
    color: yellowgreen;
  }
  .content {
    // padding: 10px;
    font-size: 14px;
  }
}
.mpp {
  padding: 10px;
  font-size: 14px;
}
 .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }

</style>

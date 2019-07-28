<template>
  <div class="appcar">
    <div class="shopcomments" v-for="item in productComments" :key="item.id">
      <!-- 按钮的开关默认为开 -->
      <div class="left">
        <van-switch
          v-model="$store.getters.taggleSelected[item.id]"
          @change="changeswitch(item.id)"
        />
      </div>
      <!-- 增加商品数量的增减 -->
      <div class="right">
        <div class="top">{{item.title}}</div>
        <div class="footer">
          <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button" style="width:30px;">-</button>
            <input
              id="test"
              class="mui-input-numbox"
              type="number"
              :value="$store.getters.getshopCarCount[item.id]"
              ref="change"
            />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
          </div>
          单价：{{item.sell_price}}
        </div>
        <!-- 库存：{{item.thumb_path}} -->
        <van-panel  desc="描述信息" :status="'件数:'+$store.getters.getprices.count+'总价:'+$store.getters.getprices.price" style="position:fixed;bottom:100px;width:100%;">
          <div slot="footer">
            <van-button size="large" type="danger">结算</van-button>
          </div>
        </van-panel>
      </div>
    </div>
  </div>
</template>

<script>
// import mui from '../../../dabs/mui/js/mui.js'
import mui from "../../../dabs/mui/js/mui.js";
export default {
  data() {
    return {
      checked: true,
      // 获取的商品的信息数组
      productComments: []
    };
  },
  created() {
    this.getid();
    // console.log(this.$store.getters.getprices)
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    getid() {
      // 获取vuex里面的id值来发送ajax请求
      var arr = this.$store.getters.getid;
      this.axios.get("api/goods/getshopcarlist/" + arr.join(",")).then(res => {
        console.log(res);
        this.productComments = res.data.message;
      });
    },
    // 点击勾选状态 触发事件  传入点击的那个商品的id和勾选状态的值
    changeswitch(id) {
      var info = {
        id: id,
        flag: this.checked
      };
      console.log(info);
      this.$store.commit("checkedtaggle", info);
      this.checked = this.$store.getters.taggleSelected[id];
    },
  }
};
</script>


<style lang="less" scoped>
.appcar {
  padding: 10px;
}
.shopcomments {
  border-radius: 5px;
  margin-bottom: 10px;
  height: 100%;
  display: flex;
  height: 80px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
  .left {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 70%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    .footer {
      color: red;
    }
  }
}
</style>


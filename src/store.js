import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

var shopcar=JSON.parse(localStorage.getItem('shopcar')||'[]')
export default new Vuex.Store({
  state: {
    car :shopcar
  },
  mutations: {
    // 传进来的数据接收 点击加入购物车然后传递数据过来
    getproductInfo(state,productinfo){
      var flag=false
        state.car.some(item=>{
          if(item.id==productinfo.id){
            flag=true
            item.count=parseInt(item.count)+parseInt(productinfo.count)
            return true
          }
        })
        if(flag==false){
          state.car.push(productinfo)
        }
        localStorage.setItem('shopcar',JSON.stringify(state.car))
    },
    // 前端发送商品的id和商品的count来修改state vuex里面的和本地缓存里面的数据
    
    // 根据shopcar传进来的选中状态来切换状态
    checkedtaggle(state,checkedinfo){
      state.car.some(item=>{
        if(item.id==checkedinfo.id){
          item.flag=checkedinfo.flag
          return true
        }
      })
      localStorage.setItem('shopcar',JSON.stringify(state.car))
    }
  },
  getters:{
    // 遍历数组将state.car里面的所有的购物信息的长度传递个给app.vue根组件
    forball(state){
      var count=0
      state.car.forEach(e => {
        count+=Number(e.count)
      });
      return count
    },
    // 遍历所有的购物信息id值传递给shopcar.vue里面用来发送ajax请求
    getid(state){
      var IDarr=[]
      state.car.forEach(item=>{
          IDarr.push(item.id)
      })
      return IDarr
    },

    // 获取购物车模块的商品信息的个数
    getshopCarCount(state){
      var obj={}
      state.car.forEach(item=>{
        obj[item.id]=item.count
      })
      return obj
    },

    // 切换状态根据id获取状态
    taggleSelected(state){
      var obj={}
      state.car.forEach(item=>{
        obj[item.id]=item.flag
      })
      return obj
    },
    getprices(state){
      var obj={
        count:0,
        price:0
      }
      state.car.forEach(item=>{
        if(item.flag==true){
          obj.count+=parseInt(item.count)
          obj.price+=Number(item.count*item.price)
        }
      })
      return obj
    }
  },
  actions: {

  }
})

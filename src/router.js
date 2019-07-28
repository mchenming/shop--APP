import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// tabber
import home from './components/tabbe/home.vue'
import find from './components/tabbe/find.vue'
import shopcar from './components/tabbe/shopcar.vue'
import my from './components/tabbe/my.vue'

// 新闻
import news from './components/iconcomment/news.vue'
import newcomt from './components/iconcomment/newcomt.vue'

// 图片
import pics from './components/iconcomment/pics.vue'
import picsinfo from './components/iconcomment/picsinfo.vue'

// 产品的页面
import product from './components/iconcomment/product.vue'
import productInfo from './components/iconcomment/productInfo.vue'

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {path:"/home",component:home},
    {path:"/find",component:find},
    {path:"/shopcar",component:shopcar},
    {path:"/my",component:my},
    {path:"/home/news",component:news},
    {path:"/home/newcomt/:id",component:newcomt},
    {path:"/home/pics",component:pics},
    {path:"/home/picsinfo/:id",component:picsinfo},
    {path:"/home/product",component:product},
    {path:"/home/productInfo/:id",component:productInfo},
  ]
})

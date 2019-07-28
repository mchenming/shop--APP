<template>
    <div>
        <div class="phone">
            <router-link class="show" v-for="value in message" :key="value.id" :to="'/home/productInfo/'+value.id" tag="div">
                <img :src="value.img_url">
                <h3>{{value.title}}</h3>
                <p class="title">
                    <span>原价&nbsp;&nbsp;&nbsp;&nbsp;{{value.market_price}}</span>
                    <span>现价&nbsp;&nbsp;{{value.sell_price}}</span>
                </p>
                <div class="sell">
                    <span>点击次数:{{value.click}}</span>
                    <span>剩余数量:{{value.stock_quantity}}</span>
                </div>
            </router-link>
            <van-button type="danger" size="large" @click="getmore">获取更多</van-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            number:1,
            message:[]
        }
    },
    created(){
        this.getproduct()
    },
    methods:{
        getproduct(){
            fetch("http://www.liulongbin.top:3005/api/getgoods?pageindex="+this.number).then(response=>{
                return response.json()
            }).then(res=>{
                console.log(res)
                this.message=this.message.concat(res.message)
            })
        },
        getmore(){
            this.number++
            this.getproduct()
        }
    }
}
</script>

<style lang="less" scoped>
.phone{
    padding: 10px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    .show{
        border: 1px solid #ccc;
        box-shadow: 0 0 4px rgb(245, 208, 208);
        width: 49%;
        margin-bottom: 7px;
        padding:  0 5px;
        img{
            width: 100%;
            height: 140px;
        }
        h3{
            font-size: 13px;
            font-weight: 500;
            text-align: center;
            height: 30px;
            line-height: 15px;
            overflow: hidden;
        }
        .title{
            display: flex;
            justify-content: space-between;
            margin: 0;
            span{
                margin: 0 5px;
                font-size: 12px;
                &:nth-of-type(1){
                    text-decoration: line-through;
                    color: #2e2e2e;
                }
                &:nth-of-type(2){
                    color: red;
                    font-weight: 700;
                }
            }
        }
        .sell{
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            padding: 0 5px;
        }
    }
}
</style>

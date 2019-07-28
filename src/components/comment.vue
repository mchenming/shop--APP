<template>
    <div class="coms">
        <h2>评论列表</h2>
        <textarea placeholder="请输入您要bb的感想,最多只能输入120字!!!" maxlength=120 v-model="cbody"></textarea>
        <button type="button" class="mui-btn mui-btn-primary  mui-btn-block" @click='add'>发表评论</button>
        <div class="comments" v-for="(list,index) in comList" :key="index">
            <div class="title">
                第{{index+1}}楼：
                用户:{{list.user_name}}
                创建时间:{{list.add_time | dateFormat}}
            </div>
            <div class="content">
                {{list.content==''? '这个人是真的懒什么都没写':list.content}}
            </div>
        </div>

        <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined" @click='getMore'>加载更多</button>

    </div>
</template>

<script>
// import {Toast} from 'mint-ui'
// import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            pageIndex:1,
            comList:[],
            cbody:""
        }
    },
    props:['id'],
    created(){
        this.getComment()
    },
    methods:{
        // 获取评论信息的
        getComment(){
            this.axios.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(res=>{
                // console.log(res)
                this.comList=this.comList.concat(res.data.message)
            })
        },
        // 添加评论
        add(){
            // if(this.cbody.trim()==''){
            //     Toast("请输入评论信息")
            //     return 
            // }
            this.axios.post('/api/postcomment/'+this.id,{content:this.cbody}).then(res=>{
                console.log(res)
                // this.getComment()
                var s={add_time:new Date(),content:this.cbody,user_name:"匿名⊥"}
                this.comList.unshift(s)
                this.cbody=''
            })
        },
        // 加载更多评论
        getMore(){
            this.pageIndex++
            this.getComment()
        }
    }
}
</script>

<style lang="less" scoped>
    .coms{
        h2{
            margin-top: 20px;
            font-size: 25px;
        }
        textarea{
            height: 100px;
            margin: 0;
        }
        .comments{
            font-size: 14px;
            .title{
                padding: 5px;
                background-color: #ccc;
            }
            .content{
                text-indent: 2em;
                padding: 5px 0;
            }
            padding: 10px 0;
        }
    }
</style>


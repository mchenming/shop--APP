<template>
    <div>
        <div class="title">
            <h3>{{this.comt.title}}</h3>
            <div class="ctime">
                <span>创建时间:{{this.comt.add_time | dateFormat}}</span>
                <span>点击次数:{{this.comt.click}}</span>
            </div>
        </div>
        <hr>
        <div class="content" v-html="this.comt.content">
        </div>

        <comments :id=this.id></comments>
        
    </div>
</template>

<script>
import comments from '../comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id,
            comt:[]
        }
    },
    created(){
        this.getcomt()
    },
    methods:{
        getcomt(){
            this.axios.get("api/getnew/"+this.id).then(res=>{
                console.log(res)
                this.comt=res.data.message[0]
            })
        }
    },
    components:{
        comments
    }
}
</script>

<style lang="less" scoped>
    .title{
        h3{
            font-size: 20px;
            color: red;
        }
        .ctime{
            display: flex;
            padding: 0 10px;
            font-size: 14px;
            color: #fa9;
            justify-content: space-between;
        }
    }
    .content{
        font-size: 12px;
        text-align: left;
    }
</style>

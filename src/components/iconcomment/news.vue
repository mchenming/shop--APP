<template>
    <div>
        <ul class="mui-table-view">
				<router-link class="mui-table-view-cell mui-media" v-for="value in list " :key="value.id" :to="'/home/newcomt/'+value.id" tag="li">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="value.img_url">
						<div class="mui-media-body">
							<div class="title">{{value.title}}</div>
							<p class='mui-ellipsis'>
                                <span>创建时间:{{value.add_time | dateFormat}}</span>
                                <span>点击次数:{{value.click}}</span>
                            </p>
						</div>
					</a>
				</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.getmes()
    },
    methods:{
        getmes(){
            this.axios.get('api/getnewslist').then(res=>{
                console.log(res)
                this.list=res.data.message
            })
        }
    }
}
</script>

<style lang="less" scoped>
.mui-media-body{
    .title{
        font-size: 15px;
        overflow: hidden;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
}
</style>

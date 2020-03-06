<template>
<div class="newinfs">
    <div v-for="newinf in newsinff" class="new_inf fx">
        <div class="new_date">
            <p class="new_day">{{newinf.created_at.split(' ')[0].split('-')[2]}}</p>
            <P class="new_year">{{newinf.created_at.split(' ')[0].slice(0,7).replace('_','/')}}</p>
        </div>
        <div class="new_img">
             <span @click="pushrouter(newinf.id)"><img :src="newinf.thumbnail_url"/></span>
        </div>
        <div class="new_cont" @click="pushrouter(newinf.id)" :indexSpan='indexSpan'>
            <p class="new_titile" v-if="newinf.title">{{newinf.title.substring(0,20)}}</p>
            <div class="new_text">
               {{newinf.description.substring(0,120)}}...
            </div>
            <p class="new_a"><span v-for="tag in newinf.tag_name">{{tag}}</span></p>
            <p class="new_see"><img src="../../img/newimg3.png"/>{{newinf.clicknum}}</p>

        </div>
    </div>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="listnum" @current-change="changesize" v-if="newlenght" :current-page.sync="pagination.page">
</el-pagination>
</div>
</template>
<script>
export default {
    data:function(){
        return {
            newsinff: [],
            pagination:{
                page:1,
                limit:4,
                category_id:''
            },
            listnum:''
        }
    },
    props:['indexSpan'],
    methods:{
        getNews:function(){
            const _this=this;
            this.$axios.get('/api/news/list',_this.pagination)
            .then((res) =>{
                if(res.code==200){
                    _this.newsinff=res.data.list;
                    _this.listnum =Math.ceil(res.data.total * 10 / this.pagination.limit);
                    

                }else{
                    alert("获取数据失败");
                }
            })
        },
        changesize:function(val){
            this.pagination.page=val;
            this.getNews();
        },
        pushrouter:function(value){
            const query={id:value }
            this.$router.push({ path: '/newslist1/newinfos', query})

        }
    },
    mounted(){
        this.category_id=Number(this.indexSpan,10) + 1
        this.getNews();
    },
    computed:{
        newlenght(){
           return this.newsinff.length>0
        }
    },
    watch:{
        'indexSpan' (){
            this.pagination.category_id=Number(this.indexSpan,10) + 1;
            this.pagination.page=1;
            this.getNews();
        }
    }
}
</script>
<style lang="less" scoped>
</style>












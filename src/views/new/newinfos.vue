<template>
<div class="newcontent">
    <h1>{{news.title}}</h1>
    <p class="new_p1"><span>阅读量：{{news.clicknum}}</span><span class="fr">发布时间：{{news.created_at}}</span></p>
    <div class="new_img"><img :src="news.thumbnail_url" /></div>
    <div class="new_conti" v-html="news.content">
    </div>
    <p class="new_p2"><span @click="topage(lastpage)" v-if="lastpage">{{lastpage.title}}</span><span class="fr" @click="topage(nextpage)"  v-if="nextpage">{{nextpage.title}}</span></p>
    <p class="new_p4">更多新闻动态</p>
    <div class="new_more">
        <div class="new_mor fx" v-for="newsdata in datalis" @click="topage(newsdata)">
            <img :src="newsdata.thumbnail_url" />
            <div class="new_mor1">
                <h3 v-if="newsdata.title">{{newsdata.title}}</h3>
                <p class="new_p3">{{newsdata.content}}...</p>
                <p>{{newsdata.created_at}}</p>
            </div>
        </div>
    </div>

</div>
</template>
<script>
export default {
    data:function(){
        return {
            news:{},
            lastpage:{},
            nextpage:{},
            datalis:{},
        }
    },
    props:['indexSpan'],
    methods:{
        getnews(){
            const id=this.$route.query.id;
            const _this=this;
            this.$axios.get('/api/news/info?id='+id)
            .then(res=>{
                _this.news=res.data.info;
                _this.lastpage=res.data.list.lastpage;
                _this.nextpage=res.data.list.nextpage;
                _this.datalis=res.data.list.datalist;

            })
        },
        topage(value){
            const query={ id:value.id }
            this.$router.push({ path: '/newslist1/newinfos', query});

        }
    },

watch: {
	  '$route' (to, from) { //监听路由是否变化
          this.getnews();
	  }
},
    mounted:function(){
        this.getnews();
    }

}
</script>
<style lang="less" scoped>
.newcontent{
    font-size: 16px;
    text-align: left;
    color: #666;}
.newcontent h1{
    background-color: #3669f9;
    font-size: 24px;
    color: #fff;
    text-align:center;
    line-height: 2.3;
    border-radius: 4px;}
.new_p1{
    color: #999;
    margin-bottom:25px;
    padding: 20px 10px 10px;
    border-bottom: 1px solid #ccc;}
.new_img img{
    width: 100%;
    height: 100%;
    }
.new_conti{
    color: #333;
    padding-bottom: 15px;
    padding-top: 20px;
    p{text-indent: 20px;margin-bottom: 30px}
}
.new_p2{
    background-color: #f2f2f2;
    line-height: 45px;
    padding-left: 15px;
    padding-right: 15px;
    a{color: #666;}
    a:hover{color: #3669f9;}
}
.new_p4{
    position: relative;
    padding-top: 40px;
    padding-bottom: 30px;
    &::before{
        position: absolute;
        content: ' ';
        height: 1px;
        background-color: #ccc;
        top: 53%;
        left: 13%;
        width: 87%;
        }
    }
.new_mor img{
    width: 216px;
	height: 130px;
    }
.new_mor{
        margin: 0px 0 30px 20px;
    }
.new_mor1{
    margin-left: 20px;
    width: 580px;
    border-bottom: 1px solid #f2f2f2;
    h3{
        color: #333;
        font-weight: bold;
        }
    p{
        font-size: 12px;
        line-height: 20px;
        &.new_p3{
            padding-top: 10px;
            padding-bottom: 10px;
        }
      }

}



</style>












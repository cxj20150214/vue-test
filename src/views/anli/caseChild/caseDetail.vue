<template>
    <div class="con case_detail">
       <div class="detail1">
         <div class="detail_box1">
            <h2>项目介绍</h2>
            <p class="title">{{info.title}}</p>
            <p class="txt">{{info.description}}</p>
        </div>
        <div class="detail_box2">
            <h2>CONTENT</h2>
            <ul class="list">
                <li>网站平台开发</li>
                <li>前端开发</li>
                <li>后端开发</li>
                <li>交互设计</li>
                <li>文案撰写</li>
            </ul>
            <div class="detail"><a href="">点击访问</a></div>
        </div>
       </div>
       <div class="content">
         <p v-html="info.content"></p>
       </div>
    </div>
</template>
<script>
export default {
    namme:'case1',
    data(){
        return{
           title:'',
           description:'',
           info:{}
        }
    },
    methods:{
  
    },
    mounted(){
     
    },
    created: function() {
        var newsID=this.$route.query.id;
        console.log(newsID);
        this.$axios.get('/api/cases/info?id='+ newsID)
        .then((res) =>{
            console.log(res)
            this.info = res.data.info
            console.log(res.data.info)
        })
    }
}
</script>
<style lang="less" scoped>
.case_detail{
    display: flex;
    flex-direction: column;
    .content{
        border:3px solid #F5F8FF;
        padding:70px;
        margin-top: 40px;
        .img{
            max-width: 800px;
            margin-top: 40px;
        }
        p{
            font-size: 16px;
            line-height: 32px;
        }
    }
}
.detail1{
    display: flex;
    flex-direction: row;
}
.detail_box1{
    width:700px;
    margin-top: 40px;
    height:200px;
    float: left;
    background-color: #eef4ff;
    padding:75px;
    h2{
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        position: relative;
        &:after{
            position: absolute;
            content: '';
            width:40px;
            height:3px;
            background-color: #2A68F9;
            left:0px;
            top:50px;
        }
    }
    p{
        text-align: center;
        float: left;
        &.title{
            font-size: 16px;
            font-weight: 700;
            margin-top: 50px;
        }
        &.txt{
            font-size: 14px;
            text-align: left;
            margin-top: 20px;
            width:100%;
        }
    }
}
.detail_box2{
    width: 500px;
    height: 200px;
    margin-top: 40px;
    float: left;
    background-color: #F5F8FF;
    padding:75px;
    h2{
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        position: relative;
        &:after{
            position: absolute;
            content: '';
            width:40px;
            height:3px;
            background-color: #2A68F9;
            left:0px;
            top:50px;
        }
    }
    .list{
        float: left;
        text-align: left;
        margin-top: 40px;
        margin-left: 20px;
        li{
            margin-bottom: 5px;
            list-style-type: disc;
            color:#666;
        }
    }
    .detail{
        width: 125px;
        height: 40px;
        background-color: #197bff;
        float: right;
        margin-top: 140px;
        border-radius: 5px;
        a{
            color: #fff;
            display: block;
            line-height: 40px;
        }
    }
}
</style>
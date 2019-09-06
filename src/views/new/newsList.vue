<template>
<div class="newslist">
    <div class="newimg1"><img src="../../img/newimg1.png"></div>
    <div class="btsty">
    <div class="content fx">
        <div class="left_box wow animated fadeInLeft">
            <ul>
                <li v-for="value,index in newsdata"  v-bind:class="{'active':index==indexSpan}"  v-on:click="changeSpan(index)" :key="index">
                    <router-link :to="value.link">
                        <span>{{value.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="right_box wow animated fadeInRight">
             <router-view :indexSpan='indexSpan'/>
        </div>
        </div>
    </div>
    <foot></foot>
</div>
</template>
<script>
const axios = require('axios');
import foot from '../../components/foot'
import {WOW} from 'wowjs'
export default {
    data:function(){
        return {
            newsdata:[
                {name:'平台新闻',link:'/newslist1'},
                {name:'行业动态',link:'/newslist2'},
                {name:'最新资讯',link:'/newslist3'},
                {name:'热门资讯',link:'/newslist4'},
            ],
            indexSpan:'0',

        }
    },
    methods:{
        changeSpan(index){
            this.$store.commit('setindex',index)
            this.indexSpan=this.$store.state.indexspan

        }
    },
    mounted(){
    this.indexSpan =this.$store.state.indexspan
    new WOW().init()
  },
 components:{ foot},


}
</script>
<style lang="less" >
.newslist{background-color: #fff;}
.newimg1 {
    overflow: hidden;
    img {background-position: center;
        display: block;
        margin: 0 auto;}
    }
.newslist .content{width: 1200px;margin: 0 auto;background-color: #f2f2f2;}
.left_box{width: 285px;
          background-color: #fff;
          border-right: 15px solid #f2f2f2;
          padding-top: 20px;
          position: relative;
          li{
            line-height: 65px;
            margin-top: 5px;
            a{ color: #666;
               display: block;
               height: inherit;
               padding: 11px 20px 11px 35px;
               position: relative;
               margin-right: -15px;
               span{
                   box-shadow: -4px 4px 9px 0px rgba(153, 153, 153, 0.17);
                   display: block;
                   border-radius: 10px;}}
            a:hover{ color: #1c9fd6}
            a::before{
              position: absolute;
              left: 48px;
              content: '';
              width: 10px;
              height: 10px;
              border-radius: 50%;
              bottom: 25px;
                 }
                 }
        li.active a{background: url(../../img/newimg2.png) no-repeat;}
    }
.left_box li:nth-child(1) ::before{background-image: linear-gradient(0deg,#3c82f4 0%,#aed5ff 100%);}
.left_box li:nth-child(2) ::before{background-image: linear-gradient(0deg,#18b07f 0%,#83e9ba 100%);}
.left_box li:nth-child(3) ::before{background-image: linear-gradient(0deg,#f77440 0%,#fec882 100%);}
.left_box li:nth-child(4) ::before{background-image: linear-gradient(0deg, #fb6362 0%, #ffacac 100%);}
.right_box{
    margin-left: 2px;
    min-height: 900px;
    background-color: #fff;
    width: 900px;padding: 35px;
}
.btsty{border-bottom:18px solid #f2f2f2;}
.el-pagination{margin-top: 40px;}
.new_date{
    color: #fff;
    margin-right: 20px;
    }
.new_day{
    font-size: 40px;
    font-weight: bold;
    background-color: #007fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-left: 20px;
    padding-right: 20px;
    }
.new_year{
    background-color: #00a2ff;
    font-size: 15px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    line-height: 1.6;
    }
.new_img img{
    width: 225px;
    height: 140px;
    }
.new_titile{
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 5px;
    }
.new_text{
    text-indent: 20px;
    text-align: left;
    font-size: 12px;
    a{color: #666;}
    }
.new_cont{
    margin-left: 20px;
    width: 490px;
    a{color: #000;}
    a:hover{color: #409EFF;}
}
.new_a{
    text-align: left;
    margin-top: 10px;
    color: #666;
    font-size: 8px;}
.new_see{
    text-align: right;
    margin-top: -16px;
    color: #ff6d26;
    font-size: 8px;}
.new_see img{margin-right: 5px;vertical-align: -0.4ex;}
.new_inf{
    position: relative;
    margin-bottom: 30px;
    padding-bottom: 30px;}
.new_inf::before{
    position: absolute;
    content: '';
    bottom: 0px;
    height: 2px;
    width: 740px;
    left:60px;
    background-color: #ffffff;
    box-shadow: -4px 4px 9px 0px rgba(51, 51, 51, 0.22);
    border-radius: 50%;
    }
.new_page li{border: 1px solid #ccc;padding: 10px;}
</style>













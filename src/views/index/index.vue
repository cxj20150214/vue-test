<template>
    <div>
      <!--轮播-->
      <div class="banner-box">
        <img src="../../img/bg2.png" alt="" class="title">
        <p class="title_1">手机APP、微信公众号、微信小程序、网站建设一网打尽</p>
        <swiper class="wow animated fadeInUp d1"></swiper>
      </div>
      <!--4大优势-->
      <div class="advantage">
        <div class="con">
          <img class="bg" src="../../img/bg4.png" alt="">
          <div class="advantage_box">
            <div class="box1 wow animated fadeInLeft">
              <p class="city">厦门市</p>
              <p class="company">叁猿网络科技有限公司</p>
            </div>
            <div class="box2 wow animated fadeInRight">
              <el-tabs :tab-position="tabPosition" style="height: 360px;" class="tab_advantage">
                <el-tab-pane label="01">
                  <div class="tab_advantage_box">
                    <img src="../../img/bg6.png" alt="">
                    <p class="title">我们的优势</p>
                    <p class="txt">响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营。全面整合微信公众号、小程序，数据对接微信互动与分享。高技术，高稳定性运维解决方案。系统化整合客户快速营销。</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="02">
                  <div class="tab_advantage_box">
                    <img src="../../img/bg6.png" alt="">
                    <p class="title">我们的优势2</p>
                    <p class="txt">响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营。全面整合微信公众号、小程序，数据对接微信互动与分享。高技术，高稳定性运维解决方案。系统化整合客户快速营销。</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="03">
                  <div class="tab_advantage_box">
                    <img src="../../img/bg6.png" alt="">
                    <p class="title">我们的优势3</p>
                    <p class="txt">响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营。全面整合微信公众号、小程序，数据对接微信互动与分享。高技术，高稳定性运维解决方案。系统化整合客户快速营销。</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="04">
                  <div class="tab_advantage_box">
                    <img src="../../img/bg6.png" alt="">
                    <p class="title">我们的优势4</p>
                    <p class="txt">响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营。全面整合微信公众号、小程序，数据对接微信互动与分享。高技术，高稳定性运维解决方案。系统化整合客户快速营销。</p>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
      <!--精选案例-->
      <div class="case">
          <h2Title class="wow animated fadeInDown" title1="精选案例" title2="SELECTED CASES" ></h2Title>
          <swiperCover :listData="list" ref="mychild" class="wow animated fadeInUp" ></swiperCover>
      </div>
      <!--服务流程-->
      <div class="service">
        <h2Title class="wow animated fadeInDown" title1="服务流程" title2="SERVICE FLOW" ></h2Title>
        <div class="con">
        <ul class="list">
          <li class="wow animated fadeInLeft d1">
            <img class="img" src="../../img/ser_icon1.png">
            <img class="img_jt" src="../../img/jt.png">
            <p class="title wow animated fadeInDown d7">需求分析</p>
            <p class="txt wow animated fadeInDown d7">
              专属风格定制</br>
              用户界面设计</br>
              网站内容撰写排版设计</br>
              人与人之间设计
            </p>
          </li>
          <li class="wow animated fadeInLeft d2">
            <img class="img" src="../../img/ser_icon2.png">
            <img class="img_jt" src="../../img/jt.png">
            <p class="title wow animated fadeInDown d9">UI设计</p>
            <p class="txt wow animated fadeInDown d9">
              专属风格定制</br>
              用户界面设计</br>
              网站内容撰写排版设计</br>
              人与人之间设计
            </p>
          </li>
          <li class="wow animated fadeInLeft d3">
            <img class="img" src="../../img/ser_icon3.png">
            <img class="img_jt" src="../../img/jt.png">
            <p class="title wow animated fadeInDown d11">应用开发</p>
            <p class="txt wow animated fadeInDown d11">
              专属风格定制</br>
              用户界面设计</br>
              网站内容撰写排版设计</br>
              人与人之间设计
            </p>
          </li>
          <li class="wow animated fadeInLeft d4">
            <img class="img" src="../../img/ser_icon4.png">
            <img class="img_jt" src="../../img/jt.png">
            <p class="title wow animated fadeInDown d13">系统测试</p>
            <p class="txt wow animated fadeInDown d13">
              专属风格定制</br>
              用户界面设计</br>
              网站内容撰写排版设计</br>
              人与人之间设计
            </p>
          </li>
          <li class="wow animated fadeInLeft d5">
            <img class="img" src="../../img/ser_icon5.png">
            <p class="title wow animated fadeInDown d15">产品上线</p>
            <p class="txt wow animated fadeInDown d15">
              专属风格定制</br>
              用户界面设计</br>
              网站内容撰写排版设计</br>
              人与人之间设计
            </p>
          </li>
        </ul>
        </div>
      </div>
      <!--公司信息-->
      <div class="company_box">
        <div class="con">
          <img :src="logoimg" class="icon1 wow animated fadeInLeft" alt="">
          <div class="company_txt wow animated fadeInRight">
            <h2>{{company_name}}</h2>
            <span>{{keyword}}</span>
            <p>{{description}}</p>
            <div class="more"><router-link to="/about">MORE</router-link></div>
          </div>
        </div>
      </div>
      <!--合作伙伴-->
      <div class="partner">
        <div class="con">
          <h2Title class="wow animated fadeInDown" title1="合作伙伴" title2="COOPERATIVE PARTNER" ></h2Title>
          <ul class="list wow animated fadeInLeft">
            <li v-for="item in partener">
              <div>
                <div class="img_box">
                 <img v-lazy='item' alt="">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <foot></foot>
    </div>
</template>
<script>
import Swiper from 'swiper';
import swiper from '../../components/swiper'
import swiperCover from '../../components/swiperCover'
import h2Title from '../../components/h2Title'
import foot from '../../components/foot'
import {WOW} from 'wowjs'
export default {
  name: 'index',
  components:{
    swiper,
    h2Title,
    swiperCover,
    foot
  },
  data(){
    return{
       tabPosition: 'left',
       limit:'',
       list:[],
       company_name:'',
       description:'',
       partener:'',
       logoimg:'',
       keyword:''
    }
  },
  methods:{
    caseLoad:function(){
      this.$axios.get('/api/cases/list?page=1&limit='+this.limit)
      .then((res) => {
        this.list = res.data.list
        this.$nextTick(() => {  // 下一个UI帧再初始化swiper
          this.swiperCover();
        });
      })
    },
    companyload:function(){
      this.$axios.get('/api/about/list')
      .then((res) => {
        var i = 4
        this.company_name = res.data.list[i].company_name
        this.keyword = res.data.list[i].keyword
        this.description = res.data.list[i].description
        this.$store.commit("Company",res.data.list[i])
        this.partener =res.data.list[i].company_imgsurlarr
        this.logoimg =res.data.list[i].logo_url
      })
    },
    swiperCover(){
      this.$refs.mychild.initSwiper()
    },
  },
  mounted(){
    new WOW().init(); 
    this.caseLoad();
    this.companyload();
  }
}
</script>
<style lang="less" scoped>
.swiper-container2 {
    width: 1200px;
    margin: 0px auto;
    height: 600px;
}  
  .el-main{
    padding:0px;
  }
  .banner-box{
    width:100%;
    height: 800px;
    background-color:#F4F4F4;
    background-image:url('../../img/bg1.png');
    background-position: center;
    background-position-y:0px;
    background-repeat:no-repeat;
  }
  .title{
    margin-top: 100px;
  }
  .title_1{
    color: #fff;
    font-size:16px;
    margin-top: 10px;
    text-shadow:2px 2px 6px rgba(0,0,0,.3);
  }
  .advantage{
    height: auto;
    background-image:url('../../img/bg3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 0px;
    .bg{
      margin-top: 200px;
    }
    .advantage_box{
      background-color: #fff;
      width:100%;
      height:360px;
      margin: 60px auto 110px;
      .box1{
        width: 265px;
        height:360px;
        margin-right: 40px;
        float: left;
        background-image: url(../../img/bg5.png);
        background-repeat: no-repeat;
        text-align: left;
        font-size: 16px;
        .city{
          margin:50px 0px 0px 20px;
        }
        .company{
          margin:10px 0px 0px 20px;
          font-weight: 700;
        }
      }
      .box2{
        width:780px;
        float: left;
        .tab_advantage{
         .tab_advantage_box{
           text-align: left;
           .title{
             margin-top: 10px;
             margin-bottom: 10px;
             font-size: 24px;
             font-weight: 700;
           }
           .txt{
             font-size:16px;
             font-weight: 700;
             letter-spacing:3px;
           }
         }
        }
      }
    }
  }
  .case{
    height: 880px;
    background-image: url(../../img/bg7.png);
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 0px;
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
  }
  .service{
    height: 745px;
    display: flex;
    flex-direction: column;
    .h1Title{
      margin-top: 80px;
    }
    .list{
      color:#333;
      margin-top: 75px;
      li{
        width:240px;
        position: relative;
        float: left;
        .img_jt{
          position: absolute;
          top: 40px;
          right: -30px;
        }
        &.animated:before{
            height:70px;
        }
        &:nth-child(1)::before{background-color: #6FD6FF;}
        &:nth-child(1)::after{background-color: #6FD6FF;}
        &:nth-child(2)::before{background-color: #FEB785;}
        &:nth-child(2)::after{background-color: #FEB785;}
        &:nth-child(3)::before{background-color: #91B7FF;}
        &:nth-child(3)::after{background-color: #91B7FF;}
        &:nth-child(4)::before{background-color: #FE6891;}
        &:nth-child(4)::after{background-color: #FE6891;}
        &:nth-child(5)::before{background-color: #BCB5FC;}
        &:nth-child(5)::after{background-color: #BCB5FC;}
         &:before{
            content: '';
            width:2px;
            height:70px;
            position: absolute;
            left:120px;
            top: 88px;
          }
        &:after{
            content: '';
            width:10px;
            height:10px;
            border-radius:100%;
            position: absolute;
            left:116px;
            top: 155px;
        }
        .img{
          position: relative;
        }
        .title{
          margin-top: 115px;
          font-size: 24px;
          font-weight: 700;
        }
        .txt{
          margin-top: 30px;
          line-height: 28px;
          font-size: 16px;
          color: #666;
        }
      }
    }
  }
  .company_box{
    height: 645px;
    background-image: url(../../img/bg8.png);
    background-position: center;
    background-position-y: 0px;
    background-repeat: no-repeat;
    .icon1{
      float: left;
      margin-left: 355px;
      margin-top: 230px;
      width: 200px;
      height: 200px;
    }
    .company_txt{
      width: 540px;
      height:340px;
      margin-top: 157px;
      background-color: #fff;
      border-radius: 50px;
      float: right;
      text-align: left;
      margin-right: -33px;
      h2{
        font-size: 24px;
        font-weight: 700;
        padding:40px 40px 15px 40px;
      }
      span{
        font-size:16px;
        padding-left: 40px;
        color:#666;
      }
      p{
        font-size: 16px;
        padding-left: 40px;
        padding-top: 20px;
        width:390px;
        line-height: 30px;
        font-weight: 700;
      }
      .more{
        width:110px;
        height: 35px;
        line-height: 35px;
        background-color: #187AFF;
        text-align: center;
        margin-left: 40px;
        margin-top: 30px;
        a{
          display: block;
          color:#fff;
          font-size: 16px;
        }
      }
    }
  }
  .partner{
    .h1Title{
      margin-top: 100px;
      margin-bottom: 60px;
    }
    .list{
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 100px;
      margin-left: -20px;
      li{
        width:calc(20% - 20px);
        margin-left: 20px;
        margin-bottom: 20px;
        .img_box{
          width:100%;
          height:100px;
          overflow: hidden;
          position: relative;
          img{
           width:100%;
           position: absolute;
           left:0px;
           top:0px;;
          }
        }
      }
    }
  }
</style>
<style lang="">
  .case .h1Title{
    color: #fff;
    margin-top: 80px;
  }
   #tab-0{
    background-color: #228bf9;
    position: relative;
  }
  #tab-0:after{
    content: '';
    width:100%;
    height:5px;
    background-color: #fff;
    position: absolute;
    bottom:0px;
    left:0px;
  }
  #tab-1:after{
    content: '';
    width:100%;
    height:5px;
    background-color: #fff;
    position: absolute;
    bottom:0px;
    left:0px;
  }
  #tab-2:after{
    content: '';
    width:100%;
    height:5px;
    background-color: #fff;
    position: absolute;
    bottom:0px;
    left:0px;
  }
  #tab-3:after{
    content: '';
    width:100%;
    height:5px;
    background-color: #fff;
    position: absolute;
    bottom:0px;
    left:0px;
  }
   #tab-1{
    background-color: #88daf2;
  }
   #tab-2{
    background-color: #64aefb;
  }
   #tab-3{
    background-color: #88daf2;
  }
  .el-tabs__item:hover{
    color:#fff;
  }
  .el-tabs__item.is-active{
    color: #fff;
  }
  .el-tabs__item{
    width:85px!important;
    height:90px!important;
    line-height: 90px!important;
    text-align: center!important;
    font-size: 36px!important;
    color:#fff!important;
  }
  .el-tabs__nav-wrap{
    overflow: visible!important;
  }
  .el-tabs__nav-scroll {
    overflow: visible!important;
}
  .el-tabs__active-bar.is-left{
    background:none!important;
    top:25px!important;
    right:-15px!important;
    width:0!important;
    height:0!important;
    border-width:15px 0 15px 15px;
    border-style:solid;
    border-color:transparent transparent transparent #ed6756;
  }
  .el-tabs__header.is-left{
    margin-right: 40px!important;
  }
</style>
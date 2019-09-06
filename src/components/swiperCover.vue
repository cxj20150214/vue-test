<template>
    <div>
        <div class="swiper-container1" >
            <div class="swiper-wrapper">
                <div v-for="item in listData" class="swiper-slide" >
                    <div class="slide_box">
                        <img v-lazy="item.thumbnail_url"  alt="">
                        <p class="title">{{item.title}}</p>
                        <p class="txt">{{item.description}}</p>
                        <div class="detail"><router-link :to="'/case/caseDetail?id='+item.id">查看详情</router-link></div>
                    </div>
                </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    name:'swiper_coverflow',
    data(){
        return{
            
        }
    },
    props:['listData'],
    mounted(){
    },
    methods:{
      initSwiper:function(){
          new Swiper('.swiper-container1',{
              effect : 'coverflow',
              slidesPerView: 5,
              loop:true,
              initialSlide :2,
              centeredSlides: true,
              navigation: {
	        	nextEl: '.swiper-button-next',
	        	prevEl: '.swiper-button-prev',
	          },
              coverflowEffect: {
                rotate: 10,
                stretch: 5,
                depth: 60,
                modifier: 2,
                slideShadows : false,
              },
            observeParents:false,   //注意这里！！
			observer:true, //也要注意这里！！
            })
      }
    },
    created(){
        this.initSwiper();
    }
}
</script>
<style lang="less" scoped>
.swiper-container1 {
    width: 1200px;
    height: 320px;
    margin: 60px auto 60px;
    padding:40px 0px 120px 0px;
    overflow: hidden;
}  
.slide_box{
    width:100%;
    height:100%;
    padding:15px;
    background: #fff;
    box-shadow: 0px 5px 8px rgba(0,0,0,.1);
    img{
        width: 100%;
        height: 150px;
    }
    p{
        text-align: left;
        &.title{
            font-size: 18px;
            margin-top: 15px;
            margin-bottom: 10px;
        }
        &.txt{
            font-size: 14px;
            color:#666;
            height:45px;
            overflow: hidden;
        }
    }
    .detail{
        width:80px;
        height: 35px;
        line-height: 35px;
        margin-top: 20px;
        background-color: #FF5B5A;
        a{
            display: block;
            color:#fff;
        }
    }
}
.swiper-button-prev{
    width:50px;
    height:50px;
    background-image: url(../../src/img/left-jt.png);
    background-size: 50px 50px;
    left:520px;
    top:450px;
}
.swiper-button-next{
     width:50px;
    height:50px;
    background-image: url(../../src/img/right-jt.png);
    background-size: 50px 50px;
    right:520px;
    top:450px;
}
</style>
<template>
     <div class="">
<div id="certify">
<div class="swiper-container">
<div class="swiper-wrapper">
<div class="swiper-slide">
    <img class="icon1" src="../../src/img/icon2.png" />
    <p class="title1">APP开发</p>
    <p class="title2">企业移动战略 , 强大的技术能力</br>个性化APP应用方案</p>
</div>
<div class="swiper-slide">
    <img class="icon1" src="../../src/img/icon1.png" />
    <p class="title1">网站建设</p>
    <p class="title2">颠覆建站行业，树立行业标杆</br>营销+品牌+管理+创意</p>
</div>
<div class="swiper-slide">
    <img class="icon1" src="../../src/img/icon3.png" />
    <p class="title1">小程序定制</p>
    <p class="title2">掀起移动互联网流量风暴</br>生态红利我帮你</p>
</div>
</div>
</div>
<div class="swiper-button-next"></div>
</div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    name:'swiper',
    mounted(){
        new Swiper('#certify .swiper-container', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	loopedSlides: 3,
	autoplay: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		//clickable :true,
	},
	on: {
		progress: function(progress) {
            var i = this.slides.length;
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				var modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				var translate = slideProgress * modify * 60 + 'px';
				var scale = 1 - Math.abs(slideProgress) / 5;
				var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 1) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}

})
    },
}
</script>

<style lang="">
.title1{
    font-size: 24px;
    color:#333;
    margin:35px auto 30px;
}
.title2{
    font-size: 16px;
    color:#333;
    line-height: 26px;
}
#certify {
	position: relative;
	width: 1200px;
	margin: 0 auto
}
.icon1{
    margin:50px auto 0px;
}
#certify .swiper-container {
	padding-bottom: 60px;
    margin:100px auto 0px;
}

#certify  .swiper-slide {
	width: 450px;
	height: 450px;
	background: #fff;
	box-shadow: 0 5px 10px rgba(0,0,0,.1);
    border-bottom: 4px solid #1C7EFF;
}
#certify  .swiper-slide img{
	display:block;
}
#certify  .swiper-slide p {
	text-align: center;
}

#certify .swiper-pagination {
	width: 100%;
	bottom: 20px;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet {
	margin: 0 5px;
	border: 3px solid #fff;
	background-color: #d5d5d5;
	width: 10px;
	height: 10px;
	opacity: 1;
}

#certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
	border: 3px solid #00aadc;
	background-color: #fff;
}

#certify .swiper-button-prev {
	left: -30px;
	width: 45px;
	height: 45px;
	background: url(../../src/img/wm_button_icon.png) no-repeat;
	background-position: 0 0;
	background-size: 100%;
}

#certify .swiper-button-prev:hover {
	background-position: 0 -46px;
	background-size: 100%
}

#certify .swiper-button-next {
	right: 50%;
    margin-right: -75px;
	width: 150px;
	height: 150px;
	margin-top: 120px;
	background: url(../../src/img/icon4.gif) no-repeat;
	background-size: 150px 150px;
}
.swiper-slide-active{
	border-bottom:0px!important;
}
#certify .swiper-button-next:hover {
}
</style>
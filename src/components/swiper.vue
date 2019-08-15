<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
    name:'swiper',
    mounted(){
        new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
                 el: '.swiper-pagination',
            }
        })        
    }
}
</script>
<style lang="">
     .swiper-container {
        width: 500px;
        height: 300px;
        margin: 20px auto;
    }
</style>
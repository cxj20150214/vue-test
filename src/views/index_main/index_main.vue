<template>
    <div class="animated rollIn">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../../../src/img/banner.png" alt=""></div>
                <div class="swiper-slide"><img src="http://hsx-style.xiruiai.cn/img/43/s545885t1559549721367.jpg?imageMogr2/0/w/400/h/400" alt=""></div>
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
        });
        this.loadData();
    },
    methods:{
          loadData: function () {
            this.$http.get("/api/admin/list")
              .then(res => {
                console.log(res);
              })
              .catch(error => {
                console.log(error);
              })
        }
    }
}
</script>
<style lang="">
     .swiper-container {
        width: 100%;
        height: 685px;
        margin: 0px auto;
    }
</style>
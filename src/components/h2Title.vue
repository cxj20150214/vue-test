<template>
<div class="h1Title">
    <p class="h2-tit2"><span class="cont">{{title2}}</span></p>
    <p class="h2-tit1">{{title1}}</p>
</div>
</template>
<script>
export default {
    data:function(){
        return {          
        }
    },
    props:['title1','title2']

}
</script>
<style lang="less">
.h1Title{text-align: center;}
.h2-tit1{
    text-transform: uppercase;
    padding-bottom: 5px;
    font-size: 24px;
}
.h2-tit2{
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 5px;
    .cont{
        position: relative;
        &::after,&::before{position: absolute;width: 90px;height: 1px;background-color: currentColor;content: '';top: 50%;opacity: .65;}
        &::after{right: -120px;}
        &::before{left: -120px;}
    }
}
</style>




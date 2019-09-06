<template>
    <div class="banner_box">
      <div class="con">
        <router-link to="/" class="logo"><img src="../../src/img/logo.png" alt=""></router-link>
        <div class="logo_txt">
          <p class="tit">叁猿网络科技</p>
          <p class="txt">THREE APES NETWORK TECHNOLOGY</p>
        </div>
        <ul class="list">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#247DFF"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item index="1"><router-link  to="/" active-class="active" exact>首页</router-link></el-menu-item>
            <el-menu-item index="2"><router-link  to="/case">客户案例</router-link></el-menu-item>
            <el-menu-item index="3"><router-link  to="/newslist1">新闻资讯</router-link></el-menu-item>
            <el-menu-item index="4"><router-link  to="/about">关于我们</router-link></el-menu-item>
            <el-menu-item index="5"><router-link  to="/contact">联系我们</router-link></el-menu-item>
          </el-menu>
        </ul>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less" scoped>
  .banner_box{
      display: flex;
      height: 120px;
      background-color: #247dff;
    }
    .logo{
      float: left;
      margin-top: 20px;
      img{
      width: 84px;
      height: 84px;
      }
    }
    .list{
      width:800px;
      line-height: 100px;
      font-size: 18px;
      color:#fff;
      float:right;
      li{
        float: left;
      }
    }
    .logo_txt{
      float: left;
      text-align: left;
      color:#fff;
      margin-top: 30px;
      margin-left: 30px;
      .tit{
        font-size: 24px;
        letter-spacing: 3px;
        margin-bottom: 3px
      }
      .txt{
        font-size: 10px;
      }
    }
</style>
<style lang="less">

    .el-menu{
      float: right!important;
    }
    .el-menu-item{
      padding:0px 30px!important;
      position: relative;
      cursor: auto;
    }
    .el-menu.el-menu--horizontal{
      border-bottom:0px!important;
      margin-top: 25px!important;
    }
    .el-menu-item{
      font-size:18px!important;
    }
    .el-menu--horizontal>.el-menu-item a{
      display:block;
    }
    .el-submenu__title{
      font-size:18px!important;
      padding-left:30px!important;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
      border-bottom:0px!important;
    }
    .el-icon-arrow-down:before{
      color: #fff!important;
    }
    .el-menu--horizontal>.el-menu-item:hover{
      background-color: #247DFF !important;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
      background-color: #247DFF !important;
    }
    .el-menu-item:after{
      position:absolute;
      content:'';
      width:0%;
      height:2px;
      background-color: #fff;
      left:50%;
      top:58px;
      transition: all .3s;
    }
    .el-menu-item a.active:after{
      position:absolute;
      content:'';
      width:50%;
      height:2px;
      background-color: #fff;
      left:50%;
      top:58px;
      transition: all .3s;
      margin-left: -25%;
    }
    .el-menu-item:hover:after{
      position:absolute;
      content:'';
      width:50%;
      height:2px;
      background-color: #fff;
      left:50%;
      top:58px;
      margin-left: -25%;
    }
</style>
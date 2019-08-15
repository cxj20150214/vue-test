<template>
    <div class="banner_box">
        <div class="logo">LOGO</div>
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo list"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
            <el-submenu index="2">
                <template slot="title"><router-link to="/product">产品中心</router-link></template>
                <el-menu-item index="2-1">产品中心1</el-menu-item>
                <el-menu-item index="2-2">产品中心2</el-menu-item>
                <el-menu-item index="2-3">产品中心3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">产品中心4</template>
                <el-menu-item index="2-4-1">产品中心4-1</el-menu-item>
                <el-menu-item index="2-4-2">产品中心4-2</el-menu-item>
                <el-menu-item index="2-4-3">产品中心4-3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3"><router-link to="/news">新闻资讯</router-link></el-menu-item>
            <el-menu-item index="4">关于我们</el-menu-item>
        </el-menu>
        <div class="sign_box"><router-link class="sign_box_a" to="/login">登录</router-link></div>
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
<style lang="">
    .el-header{
        padding:0px;
    }
    .logo{
        font-size: 36px;
        color:#fff;
        float: left;
        line-height: 60px;
        margin:0px 40px;
        flex:.5;
    }
    .list{
      flex:3;
    }
    .sign_box {
      flex:1;
    }
    .sign_box_a:hover{
      background: #fff;
      color:#545C64;
    }
    .sign_box_a{
      padding:4px 10px 4px 10px;
      font-size: 14px;
      line-height: 60px;
      color:#fff;
      margin-top: 10px;
      border:1px solid #fff;
      transition: all .3s;
    }
    a{
        text-decoration: none;
        color:#fff;
    }
    .banner_box{
      display: flex;
      background-color: #545C64;
    }
</style>
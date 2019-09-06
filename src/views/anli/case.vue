<template>
    <div>
        <!--banner -->
        <div class="case_bg"></div>
        <div class="con case_tabs">
            <ul class="list wow animated fadeInDown">
                <li :class="{active:shows==1}" @click="ashow()">
                    <router-link to="/case/case1" active-class="active" exact>
                        <div class="box">
                            <p>开发网站</p>
                        </div>
                    </router-link>
                </li>
                <li :class="{active:shows==2}" @click="bshow()">
                    <router-link to="/case/case2">
                    <div class="box">
                        <p>微信公众号</p>
                    </div>
                    </router-link>
                </li>
                <li :class="{active:shows==3}" @click="cshow()">
                <router-link to="/case/case3">
                    <div class="box">
                        <p>微信小程序</p>
                    </div>
                </router-link>
                </li>
                <li :class="{active:shows==4}" @click="dshow()">
                <router-link to="/case/case4">
                    <div class="box">
                        <p>移动APP</p>
                    </div>
                </router-link>
                </li>
                <li :class="{active:shows==5}" @click="eshow()">
                <router-link to="/case/case5">
                    <div class="box">
                        <p>优化项目</p>
                    </div>
                </router-link>
                </li>
                <li :class="{active:shows==6}" @click="fshow()">
                <router-link to="/case/case6">
                    <div class="box">
                        <p>网络推广</p>
                    </div>
                </router-link>
                </li>
            </ul>
            <div class="router_box">
                <router-view ></router-view>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<script>
import {WOW} from 'wowjs'
import foot from '../../components/foot'
export default {
    data(){
        return{
            shows:1,
        }
    },
    components:{
        foot
    },
    methods:{
        ashow:function(){
            this.shows=1;
        },
        bshow:function(){
            this.shows=2;
        },
        cshow:function(){
            this.shows=3;
        },
        dshow:function(){
            this.shows=4;
        },
        eshow:function(){
            this.shows=5;
        },
        fshow:function(){
            this.shows=6;
        }
    },
    mounted(){
         new WOW().init()
    }
}
</script>
<style lang="less" scoped>
.icon{
    font-size: 36px;
}
a{
    color:#333;
}
.case_bg{
    height: 238px;
    margin: 0px auto;
    background-image: url(../../img/bg9.png);
    background-repeat: no-repeat;
    background-position: center;
}
.router_box{
    min-height:1200px;
}
.height{
    max-height:500px;
}
.case_tabs{
    .list{
        height:200px;
        display: flex;
        box-shadow: 0px 15px 50px rgba(66,159,255,.1);
        padding: 20px;
        padding-bottom: 40px;
        li{
            width:20%;
            background-repeat: no-repeat;
            background-position:center;
            background-position-y: 50px;
            border-radius:30px;
            cursor: pointer;
            a{
                display: block;
                border-radius: 15px;
                &.active{
                    box-shadow: 0px 15px 15px rgba(66,159,255,.2);
                }
                &:hover{
                    box-shadow: 0px 15px 15px rgba(66,159,255,.2);
                }
            }
            background-size: 92px 70px;
            &:nth-child(1){background-image: url(../../img/ty1_1.png);}
            &:nth-child(2){background-image: url(../../img/ty1_2.png);}
            &:nth-child(3){background-image: url(../../img/ty1_3.png);}
            &:nth-child(4){background-image: url(../../img/ty1_4.png);}
            &:nth-child(5){background-image: url(../../img/ty1_5.png);}
            &:nth-child(6){background-image: url(../../img/ty1_6.png);}
            .box{
                display: flex;
                width:180px;
                height:180px;
                margin:15px auto 0px;
                border-radius:20px;
                p{
                    width:100%;
                    font-size: 20px;
                    margin-top: 125px;
                    text-align: center;
                    position: relative;
                    &:after{
                        content:'';
                        position: absolute;
                        top: 45px;
                        left:50%;
                        margin-left: -10px;
                        width:20px;
                        height:2px;
                        background-color: #0099FF;
                    }
                }
            }
        }
    }
}
</style>
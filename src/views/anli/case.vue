<template>
    <div>
        <!--banner -->
        <div class="case_bg"></div>
        <div class="con case_tabs">
            <ul class="list wow animated fadeInDown">
                <li  v-for="item in caselist" >
                    <router-link :to="item.url" active-class="active" exact>
                        <div class="box">
                            <p>{{item.name}}</p>
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
            caselist:[
                {
                    name:"网站开发",
                    url:"/case/case1",
                },
                {
                    name:"微信公众号",
                    url:"/case/case2",
                },
                {
                    name:"微信小程序",
                    url:"/case/case3",
                },
                {
                    name:"移动APP",
                    url:"/case/case4",
                },
                {
                    name:"优化项目",
                    url:"/case/case5",
                },
                {
                    name:"网络推广",
                    url:"/case/case6",
                },
            ]
        }
    },
    components:{
        foot
    },
    methods:{

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
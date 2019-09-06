<template>
    <div>
        <div class="footer">
            <div class="con">
                <div class="txt">
                    <ul class="list">
                        <li>
                            <router-link to="/">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/case">客户案例</router-link>
                        </li>
                        <li>
                            <router-link to="/newslist1">新闻资讯</router-link>
                        </li>
                        <li>
                            <router-link to="/about">关于我们</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">联系我们</router-link>
                        </li>
                    </ul>
                    <p class="beian">VALVTON © 2019-叁猿网络科技有限公司 {{beian_num}} 经营许可证编号：闽D1-20183078</p>
                    <div class="rx">叁猿网络科技全国咨询热线：400 - 000 - 0000</div>
                </div>
                <div class="ewm">
                    <img :src="wximg" alt="">
                    <p>微信公众号</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'foot',
    data(){
        return {
            wximg:'',
            beian_num:''
        }
    },
    methods:{
        getwximg(){
            this.$axios.get('/api/about/list')
                .then((res) => {
                    var i = 4
                    this.wximg = res.data.list[i].wechat_code_url
                    this.beian_num = res.data.list[i].beian_num
                    })

        }
    },
    mounted(){
        this.getwximg()
    }
}
</script>
<style lang="less" scoped>
.footer{
    width:100%;
    height: 200px;
    background-color: #2C2D35;
    display: flex;
    .txt{
        width:730px;
        display: flex;
        flex-direction: column;
        color:#fff;
        text-align: left;
        font-size: 16px;
        margin-top: 40px;
        float: left;
        .beian{
            margin-top: 30px;
        }
        .rx{
            margin-top: 30px;
            color:#647aff;
        }
        .list{
            color:#fff;
            li{
                position: relative;
                &:after{
                    content:'';
                    width:2px;
                    height: 15px;
                    background-color: #fff;
                    position: absolute;
                    top:4px;
                    right:-15px;
                }
                &:nth-child(5):after{
                    width:0px;
                }
                float: left;
                margin-right: 30px;
                a{
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
    }
    .ewm{
        margin-top: 40px;
        img{
            width:65px;
        }
        p{
            font-size: 16px;
            color:#fff;
            margin-top: 15px;
        }
    }
}
</style>
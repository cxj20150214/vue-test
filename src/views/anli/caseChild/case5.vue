<template>
    <div class="con case_detail">
        <ul class="list">
            <li>
                <div class="bg">
                    <div></div>
                </div>
                <div class="txt_box">
                    <h2>开发网站建设内容</h2>
                    <p>叁猿网络专业开发网站，等你来！</p>
                    <div class="detail"><router-link to="/">查看详情</router-link></div>
                </div>
            </li>
            <li>
                <div class="bg">
                    <div></div>
                </div>
                <div class="txt_box">
                    <h2>开发网站建设内容</h2>
                    <p>叁猿网络专业开发网站，等你来！</p>
                    <div class="detail"><router-link to="/">查看详情</router-link></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.case_detail{
    ul{
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        li{
            margin: 40px auto;
            padding-bottom: 70px;
            border-bottom:1px solid #d5d5d5;
            .bg{
                width: 695px;
                height: 405px;
                background-image: url(../../../img/pc_img.png);
                background-repeat: no-repeat;
                float: left;
                }
            .txt_box{
                width:390px;
                float: left;
                text-align: left;
                margin-left: 50px;
                h2{
                    margin-top: 100px;
                    font-size: 16px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                p{
                    margin-bottom: 40px;
                }
                .detail{
                    width:120px;
                    height:35px;
                    line-height: 35px;
                    text-align: center;
                    border-radius:10px;
                    border: 2px solid #429FFF;
                    a{
                        color:#429FFF;
                    }
                }
            }
        }
    }
}
</style>
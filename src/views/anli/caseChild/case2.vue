<template>
    <div class="con case_detail">
        <ul class="list">
            <li v-for="item in thisCase(list)" >
                <div class="bg wow animated fadeInLeft">
                    <div class="img_box">
                        <img v-lazy="item.thumbnail_url" alt="">
                    </div>
                </div>
                <div class="txt_box wow animated fadeInRight">
                    <h2>{{item.title}}</h2>
                    <p>{{item.description}}</p>
                    <div class="detail"><router-link :to="{path:'caseDetail',query:{ id:item.id}}">查看详情</router-link></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    namme:'case2',
    data(){
        return{
            list:[]
        }
    },
    methods:{
        getCase:function(){
            this.$axios.get('/api/cases/list')
            .then((res) =>{
                this.list = res.data.list
                console.log(res)
            })
        },
        thisCase:function(list){
            return this.list.filter(function(item){
                return item.category_id ==25
            })
        }
    },
    mounted(){
        this.getCase();
        this.thisCase();
    }
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
                position: relative;
                    .img_box{
                        width: 510px;
                        height: 320px;
                        margin: 22px auto;
                        overflow: hidden;
                        border-radius:10px;
                        img{
                            width:100%;
                        }
                    }
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
                        display: block;
                    }
                }
            }
        }
    }
}
</style>
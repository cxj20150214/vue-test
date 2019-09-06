<template>
<div class="contact">
    <div class="conimg1"><img src="../../img/coimg1.jpg"></div>
    <div class="contact-con con">
        <div class="contact-title">
            <span v-for="value,index in array1" v-bind:class="{active:index==indexSpan}"  v-on:click="changeSpan(index)">{{value}}</span>
            <p></p>
        </div>
        <keep-alive>
            <component :is='change'></component>
        </keep-alive>       
    </div>
    <foot></foot>
</div>
</template>
<script>
import foot from '../../components/foot'
import {WOW} from 'wowjs'
export default {
    data:function(){
        return {
            change:'contact',
            array1:['联系我们','提交需求'],
            indexSpan:'0' ,
                    
        }
    },
    components:{
        foot,
        'contact':{
            template:
            `
            <div class="content fx">
                <div class="left-box">
                <h1>{{name}}</h1>
                <ul class="comp-list">
                 <li class="tel">电话：{{tel}}</li>
                 <li class="wx">微信：{{wx}}</li>
                 <li class="post">邮编：{{post}}</li>
                 <li class="email">邮箱：{{email}}</li>
                 <li class="address">地址：{{add}}</li>
                </ul>
                </div>
                <div class="right-box">
                <iframe src="../../static/css/map.html" width="725" height="462" frameborder="0" scrolling="no"></iframe>
                </div>
            </div>
            `,
            data(){
                return{
                    name:'',
                    tel:'',
                    wx:'',
                    email:'',
                    post:'',
                    add:''
                }
            },
            methods:{
                companyload:function(){
                this.$axios.get('/api/about/list')
                .then((res) => {
                    var i = 4
                    this.name = res.data.list[i].company_name
                    this.tel = res.data.list[i].tel
                    this.wx = res.data.list[i].wechat
                    this.email = res.data.list[i].email
                    this.post = res.data.list[i].postcode
                    this.add = res.data.list[i].address.slice(0,12)
                    })
                                     }
            },
            mounted(){
                this.companyload()
            }
        },
        'need':{
        data:function(){
        return {
            formdata:{
                name:'',
                phone:'',
                email:'',
                description:'',
            },
            rules: {
            name: [
            { required: true, message: '请输入联系人', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            phone: [
            { pattern: /^1(3|4|5|7|8)\d{9}$/,message: '请输入正确电话号码', trigger: 'blur' }
            ],
            email: [
            { required: true, type: 'email',message: '请输入有效邮箱', trigger: 'blur' },
            ],
            description: [
            { required: true, message: '内容不能为空', trigger: 'blur' },
            ],
                
        }
                       
        }
    },
            template:`
            <div class="content">
            <h2>马上填写咨询获取咨询和报价</h2>
            <div class="step-cont">
             <p class="p-dott"></p>
            <div class="stepst fx">
             <div class="step">
             <i class="step-1"></i>填写项目需求
             </div>
             <div class="step">
             <i class="step-2"></i>进行产品评估
             </div>
             <div class="step">
             <i class="step-3"></i>反馈报告和报价
             </div>           
            </div>
            <div class="desc-per" >
                <el-form ref="form" :model="formdata" :rules="rules" class="person-inf">   
                <el-form-item class="requinput">    
                        <el-form-item class="requinput" prop="name">
                        <el-input v-model="formdata.name" placeholder="联系人" class="person" ></el-input>
                        </el-form-item>
                        <el-form-item class="requinput" prop="phone">
                        <el-input v-model="formdata.phone" placeholder="手机号" class="tel" prop="phone"></el-input>
                        </el-form-item>
                        <el-form-item class="requinput" prop="email">
                        <el-input v-model="formdata.email" placeholder="电子邮箱" class="email" prop="email"></el-input>
                        </el-form-item>
                    </el-form-item>
                <el-form-item class="desc-con" prop="description">
                    <el-input v-model="formdata.description" placeholder="请对产品需求进行描述" class="desc" type="textarea"></el-input>
                </el-form-item>
                </el-form>
            </div>
            <p class="tr"><button class="btn1" @click="submitForm">提交</button></p>
            </div>
            </div>
            `,
            methods:{
                submitForm(){
                    const _this=this;
                    this.$refs.form.validate((valid) => {
                    if (valid) {
                    this.$axios.post('/api/order/save',this.formdata)
                    .then((res) =>{ 
                      _this.$message({
                        message: '提交成功!!',
                        type: 'success'
                    })
                    })

                    } else {
                            _this.$message({
                            message: '提交失败!!',
                            type: 'error'
                                })
                    }
                    });
                }
            }
        },

    },
    methods:{
      changeSpan:function(index){ 
           //当点击时候点亮，同级的span标签删除Class
           this.indexSpan = index;
           console.log(this.indexSpan);
           if(this.indexSpan==0){
                this.change='contact';              
           }else{

               this.change='need';
           }
            },
 
    },
     mounted(){
    new WOW().init() 

  }

}
</script>


<style lang="less">
.conimg1 {
    overflow: hidden;
    img {background-position: center;}
    }
.contact-con{
	box-shadow: 0px 0px 18px 0px rgba(36, 111, 255, 0.25);
    border-radius: 20px;
    margin-top: -75px !important;
    background-color: #fff;
    margin-bottom: 60px;
    position: relative;
}
.contact-title{
    text-align:center;
    font-weight: bold;
    padding-top: 40px;
    color: #fff;
    span{display: inline-block;
    padding-left: 28px;
    padding-right: 28px;
    line-height: 40px;
    background: url(../../img/btnimg1.png) no-repeat;
    position: relative;
    border-radius: 10px;}
    span:nth-child(1){
        background-position: -123px 0;              
        margin-right: 60px;
        box-shadow: 0px 3px 9px 0px rgba(36, 125, 255, 0.53);}
    span:nth-child(2){
        background-position: -2px 0;  
        box-shadow: 0px 0px 16px 0px rgba(254, 143, 33, 0.26);
        }
    .active::before{    
    position: absolute;
    border-bottom: 2px solid #fff;
    content: ' ';
    width: 40px;
    margin-left: 13px;
    bottom: 0px;}
    p{width: 1200px;
    height: 1px;
    margin-top: 30px;
    box-shadow: 0px 0px 4px 0px rgba(51, 51, 51, 0.2);
    background-image: -ms-linear-gradient(left,#fefefe 0%,#bad6fd 13%,#65a4ff 30%,#bad6fd 90%,#fefefe 95%);
    background-image: -moz-linear-gradient(left,#fefefe 0%,#bad6fd 13%,#65a4ff 30%,#bad6fd 90%,#fefefe 95%);
    background-image: -webkit-linear-gradient(left,#fefefe 0%,#bad6fd 13%,#65a4ff 30%,#bad6fd 90%,#fefefe 95%);
	opacity: 0.7;}
    
}
.contact-con .content{padding-bottom: 40px;}
.contact-con h1,.contact-con h2{color: #333333;font-weight: bold;text-align:center;}
.contact-con h2{margin-top: 30px;}
.contact-con h1{position: relative;margin-top: 33px;margin-bottom: 33px;}
.contact-con h1::before,h1::after{position: absolute;background: url(../../img/coimg3.png) no-repeat;content: '';width: 29px;height: 46px;top:-10px}
.contact-con h1::before{left: 80px;}
.contact-con h1::after{right: 80px;}
.contact-con .right-box{border-radius: 20px;}
.contact-con .left-box,.contact-con .right-box{margin-top: 40px;}
.contact-con .left-box{
    background: url(../../img/coimg2.png) no-repeat;
    width: 400px;
    height: 462px;
    margin-left: 35px;
    margin-right: 20px;
        }
.contact-con .comp-list{padding-left: 35px;padding-right: 30px;
    li{ line-height: 70px;
        border-top: 1px solid rgba(204, 204, 204, .3);
        position: relative;
        padding-left: 60px;
        text-align: left;
        &::before{
            background-image: url(../../img/iconimg2.png);
            background-repeat: no-repeat;
            width: 30px;
            height: 70px;
            content: '';
            position: absolute;
            left: 8px;          
            }

     }
.tel::before{background-position: 0px 20px;}
.wx::before{background-position: -39px 20px;}
.post::before{background-position: -69px 20px;}
.email::before{background-position: -145px 20px;}
.address::before{background-position: -109px 20px;}
     }
.step-cont{margin-left: 30px;margin-right: 30px;}
.p-dott{height: 1px;
    background-image: -ms-linear-gradient(left,#eaeaea 6px,#fff 6px);
    background-image: -moz-linear-gradient(left,#eaeaea 6px,#fff 6px);
    background-image: -webkit-linear-gradient(left,#eaeaea 6px,#fff 6px);
    background-size: 12px 1px;
    background-repeat: repeat-x;
    background-position: bottom;
    border-top: 80px solid #fff;
    border-bottom: 80px solid #fff;
    border-left: 50px solid #fff;
    border-right: 50px solid #fff;
    margin-top: 50px;
    box-shadow: 0px 0px 3px 0px rgba(36, 111, 255, 0.25);
	border-radius: 10px 10px 20px 20px;}
.step-1,.step-2,.step-3{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;position: relative;
    border: solid 1px #666666;
    margin-bottom: 20px;
    &::before{
    position: absolute;
    width: 26px;
    height: 8px;
    border-radius: 50%;
    top: 52%;
    left: 27%;
    line-height: 0px;
    }}
    .step{background-color: #fff;}
.step-1::before{background-color: #04a8ff;content: '01'}
.step-2::before{background-color: #feac3c;content: '02'}
.step-3::before{background-color: #2acca2;content: '03'}
.stepst{justify-content:space-around;text-align: center;    margin-top: -110px;}
.step-cont{	background-color: #ecf6ff;
	box-shadow: 0px 0px 3px 0px 
		rgba(249, 127, 31, 0.25);
	border-radius: 10px 10px 20px 20px;}
.desc-per{margin-top: 50px;    padding-bottom: 60px;}
.requinput .el-form-item__content{
    display: flex;
    justify-content: space-around;
    flex-flow: row;
    .el-input{
        width: 280px;
        height: 35px;
    input{
        padding-left: 25px;
        font-size: 16px;
        line-height: 35px;
        }
    &::before{width: 22px;height: 30px;
    vertical-align: baseline;
    background-image: url(../../img/iconimg2.png);
    background-repeat: no-repeat;
    position: absolute;
    content: '';
    }
    &.person::before{background-position: -225px 5px;}
    &.tel::before{background-position: -197px 5px;}
    &.email::before{background-position: -246px 5px;}

}
}
.contact-con .desc textarea{
    height: 100px; 
    border: 0;
    background-color: transparent; 
    line-height: 30px;
     width: 100%; 
     text-indent: 10px;
     border-bottom:1px solid #fc4a21;   
}
.contact-con .person-inf{
    justify-content: space-around;
    i{width: 22px;height: 30px;
    vertical-align: baseline;
    background-image: url(../../img/iconimg2.png);
    background-repeat: no-repeat;
    display: inline-block;}
    input{border: 0;background-color: transparent; line-height: 30px;}
    .person{border-bottom:1px solid #04a8ff;}
.tel{border-bottom:1px solid #feac3c;}
.email{border-bottom:1px solid #2acca2;}   
}
.person i{background-position: -225px 8px;}
.tel i{background-position: -197px 8px;}
.email i{background-position: -246px 9px;}
.desc::before{    
    background-position: -181px 5px;
    width: 22px;
    height: 30px;
    position: absolute;
    left: 0;
    content:'';
    vertical-align: baseline;
    background-image: url(../../img/iconimg2.png);
    background-repeat: no-repeat;
    }
     .desc-con{ margin: 40px 80px 0px 80px;padding-bottom: 10px;}
    // .desc-con textarea{height: 100px; border: 0;background-color: transparent; line-height: 30px; width: 100%; text-indent: 30px;}
.contact-con .btn1{display: inline-block;border: 0;color: #fff;font-weight: bold;
    padding-left: 28px;
    padding-right: 28px;
    line-height: 40px;
    background: url(../../img/btnimg1.png) no-repeat;
    border-radius: 10px;
    border-radius: 10px;
    margin-right: 80px;
    margin-bottom: 30px;
    box-shadow: 0px 0px 16px 0px rgba(254, 143, 33, 0.26);
    width: 120px;}
.contact-con .tr{text-align: right;}
</style>








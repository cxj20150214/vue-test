<template>
    <div>
    <div class="container"></div>
        <div class="login-block">
	    	<div class="login-animate">
	    		<div class="left-ear"></div>
	    		<div class="right-ear"></div>
	    		<div class="head">
	    			<div class="left-eye"></div>
	    			<div class="right-eye"></div>
	    			<div class="face">
	    				<div class="nose"></div>
	    				<div class="mouth"></div>
	    			</div>
	    		</div>
	    		<div class="body"></div>
	    		<div class="left-arm"></div>
	    		<div class="right-arm"></div>
	    	</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm el-input">
                <el-form-item prop="username">
                     <el-input v-model="ruleForm.username" placeholder="请输入用户名" name="username"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                     <el-input  type="password" v-model="ruleForm.pass" placeholder="请输入密码" name="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="sub" v-loading="loading"   element-loading-spinner="el-icon-loading" @click="submitForm('ruleForm')">提交</div>
            </el-form>
	    </div>
   </div>
</template>
<script>
import $ from 'jquery'
import jparticle from '../../js/jparticle.js'
export default {
    name:'login',
    data(){
        return{
            ruleForm:{
                username:'',
                pass:'',
            },
            rules:{
                username:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                     ],
                pass:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                     ],
            },
            loading: false,
            message:''
        }
    },
    methods:{
        // 头像demo
        onload:function(){
            $(document).ready(function(){
			$(".pwd-eye").hide();
			$(".pwd-eye").click(function(){
				var flag = $(this).attr('data-flag');
				$(this).css('background-image','url("img/password-'+flag+'.png")');
				$(this).attr('data-flag',flag=='show'?'hide':'show');
				$('input[name="password"]').attr('type',flag=='show'?'password':'text');
				if(flag!='show'&&$('input[name="password"]').val() != ''){
					$('.left-arm').addClass('show');
					$('.mouth').addClass('show');
					$('.right-arm').addClass('show');
				}else{
					$('.left-arm').removeClass('show');
					$('.mouth').removeClass('show');
					$('.right-arm').removeClass('show');
				}
			});
			$('input[name="username"]').focus(function(){
				$(".login-animate").addClass('username-animate');
				$(".login-animate").removeClass('password-animate');
				var length = $(this).val().length;
				getposition(length);
			});
			$('input[name="username"]').bind('input', function(){
				var length = $(this).val().length;
				getposition(length);
			});
			function getposition(length){
				var face = parseFloat(1.5/60*length);
				var nose = parseFloat(1/90*length);
				var left_eye = parseFloat(1.5/60*length);
				var right_eye = parseFloat(2/60*length);
				var left_ear = parseFloat(1/36*length);
                var right_ear = parseFloat(1/36*length);
				$('.face').css('left',0.4+(face>1.5?1.5:face)+'em');
				$('.nose').css('left',2.5+(nose>1?1:nose)+'em');
				$('.left-eye').css('left',1.2+(left_eye>1.5?1.5:left_eye)+'em');
				$('.right-eye').css('left',4.5+(right_eye>2?2:right_eye)+'em');
				$('.left-ear').css('left',1-(left_ear>1?1:left_ear)+'em');
                $('.right-ear').css('left',4.5-(right_ear>1?1:right_ear)+'em');
				if(length >= 6){
					$('.left-eye').addClass('doe');
					$('.right-eye').addClass('doe');
					$('.mouth').addClass('doe');
				}else{
					$('.left-eye').removeClass('doe');
					$('.right-eye').removeClass('doe');
					$('.mouth').removeClass('doe');
				}
			}
			$('input[name="username"]').blur(function(){
				$(".login-animate").removeClass('username-animate');
				$(".login-animate").removeClass('password-animate');
				$('.face').attr('style','');
				$('.nose').attr('style','');
				$('.left-eye').attr('style','');
				$('.right-eye').attr('style','');
				$('.left-ear').attr('style','');
				$('.right-ear').attr('style','');
			});
		  	$('input[name="password"]').focus(function(){
				$(".pwd-eye").show();
				$(".login-animate").removeClass('username-animate');
				$(".login-animate").addClass('password-animate');
			});
			$('input[name="password"]').blur(function(){
					$(".pwd-eye").hide();
					$(".login-animate").removeClass('username-animate');
					$(".login-animate").removeClass('password-animate');
			});
		});
        },
        // 用户提交
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                let that = this
                const data = {
                    username:this.ruleForm.username,
                    password:this.ruleForm.pass
                }
                this.loading =true
                that.$axios.post('/api/auth/login',data)
                .then((res) => {
                    if(res.code == 200){
                       this.loading =false
                       this.open2();
                        console.log(res.data.access_token)
                       this.$store.commit("LOGIN", res.data.access_token);
                       this.$router.push('/')
                    }else{
                       this.loading =false
                       this.message = res.message;
                       this.open3();
                    }
                })
              } else {
                return false;
              }
            });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        // 弹框提示
        open2() {
        this.$message({
          message: '登录成功',
          type: 'success'
        });
        },
        open3() {
        this.$message({
          message:this.message,
          type: 'warning'
            });
        },
        // canva背景
        canvasbackground:function(){
            var windowheight = $(window).height();
            $('.container').height(windowheight);
            $(".container").jParticle({
		        background: "rgba(0,0,0,.6)",//背景颜色
		        color: "#999",//粒子和连线的颜色
		        particlesNumber:100,//粒子数量
		        //disableLinks:true,//禁止粒子间连线
		        //disableMouse:true,//禁止粒子间连线(鼠标)
		        particle: {
			        minSize: 1,//最小粒子
			        maxSize: 3,//最大粒子
			        speed: 30,//粒子的动画速度
		        }
	        });
        }
    },
    created:function(){
    },
    mounted(){
        this.onload();
        this.canvasbackground();
    }
}
</script>
<style lang="" scoped>
    body{
	background: #00c0ff;
	display: flex;
	align-items: center;
	justify-content: center;
}
.el-input{
    width:200px;
}
.el-input__inner{
    border:1px solid #eee;
}
.login-block{
    position: absolute;
    top:50%;
    left:50%;
    margin-left: -150px;
    margin-top: -200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;;
	height: 400px;
	background: #3dceba;
	border-radius: 10px;
	box-shadow: 0 0 8px rgba(0,0,0,.3);
}
.login-animate,.password-animate{
	width: 10em;
	height: 10em;
	border-radius: 5em;
	background: #cefefb;
	margin: 20px 0;
	position: relative;
    overflow: hidden;
}
.login-animate div,.password-animate div{
    transition: all 0.5s;
    -o-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
}
.login-animate .body{
    background-image: url(../../img/body.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 7.05em;
    height: 6.56em;
    position: absolute;
    bottom: -4em;
    left: 1.6em;
    z-index: 0;
}
.login-animate .head{
	position: relative;
    background-image: url(../../img/face.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 7.5em;
    height: 7.69em;
    position: absolute;
    bottom: 1em;
    left: calc(50% - 3.75em);
    z-index: 1;
}
.login-animate .left-ear{
    background-image: url(../../img/left-ear.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 5em;
    height: 2.3867em;
    position: absolute;
    bottom: 5.8em;
    left:1em;
}
.login-animate .right-ear{
    background-image: url(../../img/right-ear.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 5em;
    height: 2.3867em;
    position: absolute;
    bottom: 5.8em;
    left: 4em;
}
.login-animate .left-eye{
    background-image: url(../../img/eye.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: .75em;
    height: 1.056em;
    position: absolute;
    bottom: 4.1em;
    z-index: 2;
    left: 1.6em;
}
.login-animate .right-eye{
    background-image: url(../../img/eye.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: .75em;
    height: 1.056em;
    position: absolute;
    bottom: 4.1em;
    z-index: 2;
    left: 5.2em;
}
.login-animate .face{
    background-image: url(../../img/nose.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 5.9em;
    height: 5.75em;
    top: 1.6em;
    left: .8em;
    position: absolute;
}
.login-animate .nose{
    background-image: url(../../img/muzzle.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    width: 1em;
    height: 0.4em;
    position: absolute;
    bottom: 2.6em;
    left: 2.5em;
}
.login-animate .mouth{
    background-image: url(../../img/mouth-smile.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 2.95em;
    height: 1em;
    position: absolute;
    bottom: 1em;
    left: 1.55em;
}
.login-animate .left-arm{
	background-image: url(../../img/left-arm.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 3em;
    height: 7em;
    position: absolute;
    bottom: -7.5em;
    left: 1em;
    z-index: 2;
    transition: bottom 0.5s;
}
.login-animate .right-arm{
	background-image: url(../../img/right-arm.png);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 3em;
    height: 7em;
    position: absolute;
    bottom: -7.5em;
    left: 6em;
    z-index: 2;
    transition: bottom 0.5s;
}
.password-animate .mouth.show{
    width: 1em;
    left: calc(50% - 0.5em);
	background-image: url(../../img/mouth-circle.png);
}
.password-animate .left-arm.show,.password-animate .right-arm.show{
	bottom: -1.7em!important;
}
.password-animate .left-arm,.password-animate .right-arm{
	bottom: -0.5em;
}
.username-animate .left-ear {
    left: 1.5em;
}
.username-animate .right-ear {
    left: 7.5em;
}
.username-animate .left-eye {
    left: 0.5em;
    bottom: 3.8em;
}
.username-animate .left-eye.doe,.username-animate .right-eye.doe{
    background-image: url(../../img/eye-doe.png);
}

.username-animate .right-eye {
    left: 4em;
    bottom: 3.8em;
}
.username-animate .face {
    left: .8em;
}
.username-animate .nose {
    bottom: 2.4em;
    left: 2.5em;
}
.username-animate .mouth {
    bottom: 0.75em;
    background-image: url(../../img/mouth-half.png);
}
.username-animate .mouth.doe{
    background-image: url(../../img/mouth-open.png);
    height: 2em;
    bottom: 0.5em;
}
.login-form{
	width: calc(100% - 5em);
	padding: 0 2.5em;
}
.username,.password{
	position: relative;
	width: 100%;
	margin: 20px 0;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0 0 8px rgba(0,0,0,.3);
}
.username>input,.password>input{
	width: calc(100% - 20px);
	padding: 0 10px;
	height: 2.5em;
	border: 0;
	border-radius: 5px;
}
.password>input{
	width: calc(100% - 3.3em);
	padding: 0 2.3em 0 1em;
}
input::-webkit-input-placeholder{
    color:#999;
}
.pwd-eye{
	width: 1.2em;
	height: 1.2em;
    position: absolute;
    top: calc(50% - 0.6em);
    right: 0.5em;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
}
.sub{
    width: 200px;
    height: 35px;
    background-color: #CEFEFB;
    border-radius: 3px;
    line-height: 35px;
    color: #3DCEBA;
    cursor: pointer;
}

body{width: 100wh; height: 90vh; color: #fff;background: linear-gradient(-45deg, rgba(9,69,138,0.2), rgba(68,155,255,0.7), rgba(117,113,251,0.7), rgba(68,155,255,0.7), rgba(9,69,138,0.2));background-size: 400% 400%;-webkit-animation: Gradient 15s ease infinite;-moz-animation: Gradient 15s ease infinite;animation: Gradient 15s ease infinite;}
@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}
.container{width: 100%; height: 500px;}
</style>
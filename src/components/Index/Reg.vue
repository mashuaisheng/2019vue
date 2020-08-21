<template>
  <div class="micronews micronews-login">
    <my-header></my-header>
    <div class="micronews-login-container">
      <div class="form-box">
        <h3>注册</h3>
        <div class="wrap">
          <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="user_name" v-model="user_name" lay-verify="required|phone" id="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="img_code" v-model="img_code" lay-verify="required" id="imgCode" placeholder="请输入验证码" autocomplete="off" class="layui-input">
                <img :src="check_code" @click="changeImgCode">
                <img src="http://1911td2.yangwenlong.top/user/showImageCode">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
<!--                <input type="text"  name="code" v-model="code" v-on:click="RegCode" lay-verify="required" placeholder="请输入短信验证码" autocomplete="off" class="layui-input">-->
<!--                <input type="button"  id="veriCodeBtn" name="" value="验证码" class="obtain layui-btn">-->
                <input type="text"  name="code" lay-verify="required" v-model="code" placeholder="请输入短信验证码" autocomplete="off" class="layui-input">
                <input type="button" v-show="show"  id="veriCodeBtn" v-on:click="RegCode" name="" value="验证码" class="obtain layui-btn">
                <input type="button" v-show="!show"   @click="RegCode" v-model="count" value="验证码" class="obtain layui-btn count">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="user_pwd" v-model="user_pwd" lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="password" v-model="password" lay-verify="required" placeholder="请输入确认密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item agreement">
              <div class="layui-input-block">
                <input type="checkbox" name="like1[write]" lay-verify="required" lay-skin="primary" title="我已阅读并同意" checked="">
                <span class="txt">我已阅读<a href="#">用户协议</a>和<a  href="#">隐私条款</a></span>

              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="*"  v-on:click="sendAjax" onclick="return false">注册</button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="obtain layui-btn" lay-submit lay-filter="*" onclick="return false" @click="login">前往登录</button>
              </div>
            </div>
            <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
          </form>
          <div class="other-login">
            <a href="#">
              <img src="@/assets/static/images/load1.png">
            </a>
            <a href="#">
              <img src="@/assets/static/images/load2.png">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MyHeader from '@/components/Index/Top'
  import Common from '@/mixin/Common.js'
  export default {
    name: 'Reg',
    data () {
      return {
        user_name:'13653130993',
        user_pwd:'4444444',
        password:'4444444',
        img_code:'',
        code:'',
        tt:'1',
        check_code:'',
        sid:'',
        timer:null,
        show:true,
        count:60,
      }
    },
    mixins:[Common],
    components:{
      MyHeader:MyHeader
    },
    methods:{
      // 跳转登录方法
      login:function () {
        this.$router.push({name: 'Login'});
      },
      // 点击获取验证码倒计时
      RegCode:function(){
        if(this.user_name == ''){
          alert("用户名不能为空！");
          return false;
        }
        let reg=/^1[3,5,6,7,8,9]\d{9}$/;
        if(!reg.test(this.user_name)){
          alert('手机号格式不对');
          return false;
        }
        if(this.img_code == ''){
          alert('请输入图片验证码');
          return false;
        }
        this.$http.post("/api/user/Sendverificationcode/",{user_name:this.user_name,tt:1}).then(succes=>{
          console.log(succes);
          if(succes.boyd.msg == 0){
            console.log(succes);
          }
        },error=>{
          alert(succes.body.status);
        })
      },


      changeImgCode:function(){
        this.check_code=this.check_code+'&rand='+Math.random()
      },
      sendAjax: function () {
        if(this.user_name == ''){
          alert("用户名不能为空！");
          return false;
        }
        let reg=/^1[3,5,6,7,8,9]\d{9}$/;
        if(!reg.test(this.user_name)){
          alert('手机号格式不对');
          return false;
        }
        if(this.img_code == ''){
          alert('请输入图片验证码');
          return false;
        }
        if(this.code == ''){
          alert('请输入短信验证码');
          return false;
        }
        if(this.user_pwd == ''){
          alert('注册密码不能为空');
          return false;
        }
        if(this.user_pwd.length < 6){
          alert('密码不能小于6位');
          return false;
        }
        if(this.password == ''){
          alert('确认密码不能为空');
          return false;
        }
        if(this.user_pwd != this.password){
          alert('密码与确认密码保持一致');
          return false;
        }
        this.$http.post("/api/user/Api/reg",{
          user_name:this.user_name,
          user_pwd:this.user_pwd,
          img_code:this.img_code,
          code:this.code,
          type:this.type,
          tt:this.tt,
        }).then(success=>{
          console.log(success);
          if(success.body.status == 0){
            alert(success);
          }else{
            alert(success.body.status);
          }
        },error=>{
          alert(success.body.status);
        });
        // // this.RegCode();
        // this.$http.post('/user/register', {
        //   user_tel:this.user_tel,
        //   user_pwd:this.user_pwd,
        //   msg_code:this.user_code,
        //   tt:1
        // }).then(response => {
        //   if(response.body.status===200){
        //     this.msg('注册成功');
        //     this.$router.push({name:'Login'});
        //   }else{
        //     this.msg(response.body.msg);
        //   }
        // }, error=> {
        //   this.msg(error.body.msg);
        //   console.log(error)
        // })
      }
    },
    mounted(){
      // this.$http.post('/user/ImageCodeUrl',{}).then(response => {
      //   console.log(response);
      //   // this.check_code=response.body.data.url
      //   // this.sid=response.body.data.sid
      // }, error => {
      //   alert('玩命提示中');
      // })
    }
  }
</script>

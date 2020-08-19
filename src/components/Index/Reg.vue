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
                <input type="text"  name="img_code" lay-verify="required" id="imgCode" placeholder="请输入验证码" autocomplete="off" class="layui-input">
                <img src="http://1911td2.yangwenlong.top/user/text">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="user_code" lay-verify="required" placeholder="请输入短信验证码" autocomplete="off" class="layui-input">
                <input type="button"  id="veriCodeBtn" name="" value="验证码" class="obtain layui-btn">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="user_pwd" lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="password" lay-verify="required" placeholder="请输入确认密码" autocomplete="off" class="layui-input">
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
                <button class="layui-btn" lay-submit lay-filter="*"  @click="sendAjax" onclick="return false">注册</button>
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
        user_pwd:'',
        password:'',
        img_code:'',
        user_code:'',


      }
    },
    mixins:[Common],
    components:{
      MyHeader:MyHeader
    },
    methods:{
      login:function () {
        this.$router.push({name: 'Login'});
      },
      sendAjax: function () {
        if(this.user_name == ''){
          layui.layer.alert('请输入手机号码',{icon:6});
          return false;
        }
        // if(this.img_code == ''){
        //   this.msg('请输入图片验证码');
        //   return false;
        // }
        // if(this.user_code == ''){
        //   this.msg('请输入短信验证码');
        //   return false;
        // }
        // if(this.user_pwd == ''){
        //   this.msg('注册密码不能为空');
        //   return false;
        // }
        // if(this.user_pwd.length < 6){
        //   this.msg('密码不能小于6位');
        //   return false;
        // }
        // if(this.user_pwd1 == ''){
        //   this.msg('确认密码不能为空');
        //   return false;
        // }
        // if(this.user_pwd != this.user_pwd1){
        //   this.msg('密码与确认密码保持一致');
        //   return false;
        // }
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

    }
  }
</script>

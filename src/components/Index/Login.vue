<template>
  <div class="micronews micronews-login">
    <my-header></my-header>
  <div class="micronews-login-container">
    <div class="form-box">
      <h3>登录</h3>
      <div class="wrap">
        <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
          <div class="layui-form-item">
            <div class="layui-input-block">
              <input type="text" name="" lay-verify="required|phone"  v-model="user_tel" id="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-input-block">
              <input type="text"  name="" lay-verify="required" v-model="password" id="pwd" placeholder="请输入密码" autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item agreement">
            <div class="layui-input-block">
              <input type="checkbox" name="like1[write]" lay-verify="required" lay-skin="primary" title="我已阅读并同意" checked="">
              <span class="txt"><a href="#">用户协议</a>和<a  href="#">隐私条款</a></span>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="layui-btn" lay-submit lay-filter="*" v-on:click="DoLogin" onclick="return false">登录</button>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="obtain layui-btn" lay-submit lay-filter="*" onclick="return false" @click="reg">前往注册</button>
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
  import Header from '@/components/Index/Top'
  //import Header from '@/components/Public/Header'
  import Common from '@/mixin/Common.js'
  export default {
    name: "Login",
    mixins:[Common],
    components: {
      MyHeader: Header,
    },
    data() {
      return {
        user_tel: '13463436743',
        ad: 2,
        show: true,
        check_code: '',
        sid: '',
        password:'',
      }
    },
    methods: {
      reg: function () {
        this.$router.push({name: 'reg'});
      },
      DoLogin:function () {
        let mat=/^1[0-9]{10}$/;
        if(this.user_tel == ''){
          this.msg('手机号不能为空');
          return false;
        }
        if(!mat.test(this.user_tel)){
          this.msg('手机号格式不对');
          return false;
        }
        if(this.password==''){
          this.msg('密码不能为空');
          return false;
        }
        if(this.user_tel.length<6){
          this.msg('密码最长为6位');
          return false;
        }
        this.$http.post('/user/login', {
          user_tel:this.user_tel,
          password:this.password,
          tt:1
        }).then(response => {
          console.log(response);
          if(response.body.status==200){
            this.msg('登录成功');
          }else{
            this.msg(response.body.msg);
          }
        }, error=> {
          console.log(error)
        })
      }
    }
  }
</script>

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
                <input type="text" name="" lay-verify="required|phone" id="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" id="imgCode" placeholder="请输入验证码" autocomplete="off" class="layui-input">
                <img src="https://fly.layui.com/auth/imagecode?t=1542856673772">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" placeholder="请输入短信验证码" autocomplete="off" class="layui-input">
                <input type="button"  id="veriCodeBtn" name="" value="验证码" class="obtain layui-btn">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  name="" lay-verify="required" placeholder="请输入确认密码" autocomplete="off" class="layui-input">
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
                <button class="layui-btn" lay-submit lay-filter="*" onclick="return false">注册</button>
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
  export default {
    name: 'Reg',
    data () {
      return {

      }
    },
    components:{
      MyHeader:MyHeader
    },
    methods:{
      login:function () {
        this.$router.push({name: 'Login'});
      }
    },
    mounted(){

    }
  }
</script>

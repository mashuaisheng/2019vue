<template>
  <div class="micronews micronews-login">
  <div class="micronews-header-wrap">
    <div class="micronews-header w1000 layui-clear">
      <h1 class="logo">
        <a href="index.html">
          <img src="@/assets/static/images/LOGO.png" alt="logo">
          <span class="layui-hide">LOGO</span>
        </a>
      </h1>
      <p class="nav">
        <a href="index.html" class="active">最新</a>
        <a href="list.html">娱乐</a>
        <a href="list.html">生活</a>
        <a href="list.html">财经</a>
        <a href="list.html">科技</a>
        <a href="list.html">军事</a>
      </p>
      <div class="search-bar">
        <form class="layui-form" action="">
          <div class="layui-form-item">
            <div class="layui-input-block">
              <input type="text" name="title"  placeholder="搜索你要的内容" autocomplete="off" class="layui-input">
              <button class="layui-btn search-btn"  formnovalidate><i class="layui-icon layui-icon-search"></i></button>
            </div>
          </div>
        </form>
      </div>
      <div class="login">
        <a href="login.html">
          登录
        </a>
       <!-- <a href="login.html"> -->
        <!-- <img src="@/assets/static/images/header.png" style="width: 36px; height: 36px;"> -->
       <!-- </a> -->
      </div>
      <div class="menu-icon">
        <i class="layui-icon layui-icon-more-vertical"></i>
      </div>
      <div class="mobile-nav">
        <ul class="layui-nav" lay-filter="">
          <li class="layui-nav-item layui-this"><a href="index.html">最新</a></li>
          <li class="layui-nav-item"><a href="list.html">娱乐</a></li>
          <li class="layui-nav-item"><a href="list.html">生活</a></li>
          <li class="layui-nav-item"><a href="list.html">财经</a></li>
          <li class="layui-nav-item"><a href="list.html">科技</a></li>
          <li class="layui-nav-item"><a href="list.html">军事</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="micronews-login-container">
    <div class="form-box">
      <h3>登录</h3>
      <div class="wrap">
        <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
          <div class="layui-form-item">
            <div class="layui-input-block">
              <input type="text" name="" lay-verify="required|phone" id="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-input-block">
              <input type="text"  name="" lay-verify="required" id="imgCode" placeholder="验证码" autocomplete="off" class="layui-input">
              <img src="https://fly.layui.com/auth/imagecode?t=1542856673772">
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-input-block">
              <input type="text"  name="" lay-verify="required" placeholder="请输入短信验证码" autocomplete="off" class="layui-input">
              <input type="button"  id="veriCodeBtn" name="" value="验证码" class="obtain layui-btn">
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
              <button class="layui-btn" lay-submit lay-filter="*" onclick="return false">登录</button>
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
  import "@/assets/layui/layui.js"
  export default {
    name: 'Login',
    data () {
      return {

      }
    },
    methods:{

    },
    mounted(){

    }
  }
</script>

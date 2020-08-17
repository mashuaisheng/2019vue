<template>
  <div class="micronews-header-wrap">
    <div class="micronews-header w1000 layui-clear">
      <h1 class="logo">
        <a href="javascript:;" @click="Login()">
          <img src="@/assets/static/images/LOGO.png" alt="logo">
          <span class="layui-hide">LOGO</span>
        </a>
      </h1>
      <div class="login">
        <a href="javascript:;" @click="Login()">
          登录
        </a>
      </div>
      <div class="menu-icon">
        <i class="layui-icon layui-icon-more-vertical"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import "@/assets/layui/layui.js"
  export default {
    name: "Top",
    methods: {
      Index: function () {
        // 通过路由跳转的方式实现页面跳转
        this.$router.push({name: 'Index'})
      },
      List: function () {
        // 通过路由跳转的方式实现页面跳转
        this.$router.push({name: 'List'})
      },
      Details: function () {
        // 通过路由跳转的方式实现页面跳转
        this.$router.push({name: 'Details'})
      },
      PersInfo: function () {
        // 通过路由跳转的方式实现页面跳转
        this.$router.push({name: 'PersInfo'})
      },
      Search: function () {
        // 通过路由跳转的方式实现页面跳转
        this.$router.push({name: 'Search'})
      },
      Login: function () {
        // 通过路由跳转的方式实现页面跳转
        this.$router.push({name: 'Login'})
      },
    }
  }
</script>

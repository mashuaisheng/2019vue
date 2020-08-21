<template>
  <div class="micronews-header-wrap">
    <div class="micronews-header w1000 layui-clear">
      <h1 class="logo">
        <a href="javascript:;" @click="Login()">
          <img src="@/assets/static/images/LOGO.png" alt="logo">
          <span class="layui-hide">LOGO</span>
        </a>
      </h1>
      <p class="nav" v-for="(v,k) in cat_name">
        <a href="javascript:;"  class="active+">{{v.cat_name}}</a>
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
        <a href="javascript:;" @click="Login()">
          登录
        </a>
        <!-- <a href="login.html"> -->
        <!-- <img src="@/assets/static/images/header.png" style="width: 36px; height: 36px;"> -->
        <!-- </a> -->
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
    name: "Header",
    data () {
      return {
        "cat_name":[],
      }
    },
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
    },
    mounted(){
      Desc:{
        this.$http.post("/api/user/cat").then(success=>{
          // console.log(this.cat_name);
          // console.log(success);
          if(success.status == 200){
            this.cat_name =this.cat_name.concat(success.body.data);
          }
        },error=>{
          alert(success);
        });
      }
    },
  }
</script>

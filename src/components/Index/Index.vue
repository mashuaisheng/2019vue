<template>
  <div class="micronews">
    <my-header></my-header>
  <div class="layui-fulid micronews-banner w1000">
    <div class="layui-carousel imgbox" id="micronews-carouse">
      <div carousel-item >
        <div >
          <p class="title" >的骄傲是大家开始</p>
          <a href="list.html" ><img src="@/assets/static/images/news_img1.jpg"></a>
          <!--          {{v.news_img}}-->
        </div>
        <div >
          <p class="title" >的骄傲是大家开始</p>
          <a href="list.html" ><img src="@/assets/static/images/news_img1.jpg"></a>
          <!--          {{v.news_img}}-->
        </div>


      </div>
    </div>
  </div>
  <div class="micronews-container w1000">
    <div class="layui-fluid">
      <div class="layui-row">
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
          <div class="main">
            <div class="list-item" id="LAY_demo2" v-for="(v,k) in t_news">
              <div class="item">
                <p @click="details(v.news_id)" news_id="v.news_id">
                <img :src="v.news_img" width="125" height="100">
                </p>
                <div class="item-info">
                  <h4><a @click="details(v.news_id)">{{v.news_title}}</a></h4>
                  <div class="b-txt">
                    <span class="label">{{v.cat_name}}</span>
                    <span class="label">{{v.get_cate.cat_name}}</span>
                    <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      {{v.comment_count}}
                    </span>
                    <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      {{v.publish_time}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md4">
          <div class="popular-info">
            <div class="layui-card">
              <div class="layui-card-header">
                <h3>热门资讯</h3>
              </div>
              <div class="layui-card-body">
                <ul class="list-box" v-for="(v,k) in t_list">
                  <li class="list"  style="list-style:none">
                     <a href="list.html">{{k+1}}.{{v.news_title}}</a><i class="heat-icon"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import "@/assets/layui/css/layui.css"
  import "@/assets/static/css/main.css"
  import MyHeader from '@/components/Index/Header'
  import MyFooter from "@/components/Index/Footer"
  export default {
    name: 'Index',
    data () {
      return {
        t_news:[],
        t_list:[],
        //news_id:news_id,
      }
    },
    methods:{
      details: function (news_id) {
        alert(news_id);
        this.$router.push({path:'/details',query:{news_id:news_id}});
      }
    },
    components:{
      MyHeader:MyHeader,
      MyFooter:MyFooter,
    },
    mounted() {
      layui.use('index', function () {
        var index = layui.index;
        index.banner()
        index.seachBtn()
        index.arrowutil()
      });
      this.$http.post('/news/index').then(response => {
        // console.log( response );
        this.t_list = response.body.data[0];
        this.t_news=response.body.data[1];
        //alert(this.t_list);
      }, error => {
        alert('调用接口失败');
      });


    }
  }
</script>
<style scoped></style>

<template>
  <div class="micronews">
    <my-header></my-header>
  <div class="micronews-container micronews-details-container w1000">
    <div class="layui-fluid">
      <div class="layui-row">
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
          <div class="main">
            <div class="title"  >
              <h3>{{t_details['news_title']}}</h3>
              <div class="b-txt">
                <span class="label"></span>
                <span class="icon">
                  <i class="layui-icon layui-icon-radio"></i>
                  <b>50</b>人
                </span>
                <a href="#message">
                <span class="icon message" >
                  <i class="layui-icon layui-icon-dialogue"></i>
                  <b>{{t_details['comment_count']}}</b>条
                </span>
                </a>
                <span class="icon time">
                  <i class="layui-icon layui-icon-log"></i>
                  {{t_details['publish_time']}}
                </span>
              </div>
            </div>
            <div class="article">
              <p class="source">来源：<span>澎湃新闻网</span></p>
              <p class="original-tit mt30">原标题：<span>{{t_details['news_title']}}</span></p>
             
              <div class="img-box"><img onclick="javascript:window.open(this.src)" :src="t_details['news_img']"></div>
              {{t_details['news_content']}}
              <div class="share-title">
                <span class="txt">分享:</span>
                <a href="#">
                  <i class="icon layui-icon layui-icon-login-wechat"></i>
                </a>
                <a href="#">
                  <i class="icon layui-icon layui-icon-login-weibo"></i>
                </a>
                <a href="#">
                  <i class="icon layui-icon layui-icon-login-qq"></i>
                </a>
                <button class="layui-btn Collection">
                  ❤<span>已收藏</span>
                </button>
              </div>
            </div>
            <div class="leave-message" id="message">
              <div class="tit-box">
                <span class="tit">网友跟帖</span>
                <span class="num"><b>500</b>条</span>
              </div>
              <div class="content-box">
                <div class="tear-box">
                  <a href="#"><img src="@/assets/static/images/header_img1.png"></a>
                  <form class="layui-form">
                    <div class="layui-form-item layui-form-text">
                      <div class="layui-input-block">
                        <textarea id="onInput"  placeholder="请输入内容" class="layui-textarea"></textarea>
                      </div>
                    </div>
                    <div class="layui-form-item">
                      <div class="layui-input-block" style="text-align: right;">
                        <div class="message-text">
                          <div class="txt">

                          </div>
                        </div>
                        <button type="button" class="layui-btn micronews-details-Publish">发表</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="ulCommentList">
                  <div class="liCont">
                    <a href="#"><img src="@/assets/static/images/header_img1.png"></a>
                    <div class="item-cont">
                      <div class="cont">
                        <p><span class="name">我是锦鲤</span><span class="time">1小时前</span></p>
                        <p class="text">万达似乎在重新考虑该事项。此外，万达已经为这个项目支付高达8000万美元的费用和税款，但项目却迟迟未开工。</p>
                      </div>
                    </div>
                  </div>
                  <div class="liCont">
                    <a href="#"><img src="@/assets/static/images/header_img1.png"></a>
                    <div class="item-cont">
                      <div class="cont">
                        <p><span class="name">我是锦鲤</span><span class="time">1小时前</span></p>
                        <p class="text">万达似乎在重新考虑该事项。此外，万达已经为这个项目支付高达8000万美元的费用和税款，但项目却迟迟未开工。</p>
                      </div>
                    </div>
                  </div>
                  <div class="liCont">
                    <a href="#"><img src="@/assets/static/images/header_img1.png"></a>
                    <div class="item-cont">
                      <div class="cont">
                        <p><span class="name">我是锦鲤</span><span class="time">1小时前</span></p>
                        <p class="text">万达似乎在重新考虑该事项。此外，万达已经为这个项目支付高达8000万美元的费用和税款，但项目却迟迟未开工。</p>
                      </div>
                    </div>
                  </div>
                  <div class="liCont">
                    <a href="#"><img src="@/assets/static/images/header_img1.png"></a>
                    <div class="item-cont">
                      <div class="cont">
                        <p><span class="name">我是锦鲤</span><span class="time">1小时前</span></p>
                        <p class="text">万达似乎在重新考虑该事项。此外，万达已经为这个项目支付高达8000万美元的费用和税款，但项目却迟迟未开工。</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="micronews-details-test" style="text-align: center;"></div>
              </div>
            </div>
          </div>
        </div>





    <div class="layui-col-xs12 layui-col-sm12 layui-col-md4">
      <div class="popular-info popular-info-tog">
        <div class="layui-card">
          <div class="layui-card-header">
            <h3>资讯推荐</h3>
          </div>
          <div class="layui-card-body">
            <ul class="list-box">
              <a href="details.html"><img src="@/assets/static/images/news_img15.jpg" width="100%"> </a>
              <li class="list">

                <a href="#">南非金砖会议再造十年辉煌</a>

              </li>
              <li class="list">

                <a href="#">中流击水 奋楫者进_中共十九大</a>

              </li>
              <li class="list">

                <a href="#">你好！新时代_2018全国两会</a>

              </li>
              <li class="list">

                <a href="#">“日销40万”外卖料包厂被曝光，制作过程令人作呕</a>

              </li>
              <a href="details.html"><img src="@/assets/static/images/news_img16.jpg" width="100%"></a>
              <li class="list">

                <a href="#">韩国送的200吨橘子该怎么分？</a>

              </li>
              <li class="list">

                <a href="#">中流击水 奋楫者进_中共十九大</a>

              </li>
              <li class="list">

                <a href="#">你好！新时代_2018全国两会</a>

              </li>
              <li class="list">

                <a href="#">“日销40万”外卖料包厂被曝光，制作过程令人作呕</a>

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
  import MyHeader from '@/components/Index/Header'
  import MyFooter from "@/components/Index/Footer"
  export default {
    name: 'Details',
    data () {
      return {

      }
    },
    components:{
      MyHeader:MyHeader,
      MyFooter:MyFooter,
    },
    methods:{


    },
    mounted(){
      var news_id = parseInt(this.$route.query.news_id);
      console.log(news_id);
      let newsid = {
        news_id:news_id
      };
      this.$http.post('/news/details',newsid).then(response => {
        // console.log( response );
        this.t_details = response.body.data;
        //alert(this.t_details['news_title']);
      }, error => {
        alert('调用接口失败');
      });
    }
  }
</script>

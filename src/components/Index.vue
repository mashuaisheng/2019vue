<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my-header ></my-header>

    <!--    <my-footer title="登录下边框"></my-footer>-->
  </div>
</template>

<script>
import MyHeade from '@/components/Heade';
// import MyFooter from '/@/components/Footer';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '1911-TD'
    }
  },
  components:{
    MyHeader:MyHeade,
    // MyFooter:MyFooter,
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

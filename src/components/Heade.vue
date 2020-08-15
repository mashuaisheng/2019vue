<template>
  <div class="hello">
    <div>发动机和</div>
  </div>
</template>

<script>
export default {
  name: 'Heade',
  // 组件的参数
  props: ['title'],
  data () {
    return {
      title:''
    }
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

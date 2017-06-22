<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <h2>font-awesome-test <i class="fa fa-thumbs-up" aria-hidden="true"></i></h2>
    <ul>
      <li><a href="https://cn.vuejs.org/" target="_blank">vuejs中文文档</a></li>
      <br>
      <li><a href="https://athena0304.gitbooks.io/vue-template-webpack-cn/content/" target="_blank">webpack模板的中文文档</a></li>
    </ul>
    <h2>生态</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <li><a href="http://element.eleme.io/#/zh-CN" target="_blank">element-ui</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: '欢迎使用定制vue-webpack模板'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  mounted() {
    {{#axios}}
    this.ajax.testWeather({
      cb(data) {
        console.log(data)
      },
      params: {
        appkey: "0148609f14a96369",
        city: "北京"
      }
    })
    {{/axios}}
  }
  {{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
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

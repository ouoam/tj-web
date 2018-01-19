<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="jumbotron">
      <h1>Navbar example</h1>
      <p class="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport.</p>
      <a class="btn btn-lg btn-primary" href="../../components/navbar/" role="button">View navbar docs &raquo;</a>
    </div>
    <ul>
      <li><router-link :to="{ name: 'user'}">bar</router-link></li>
      <li><router-link :to="{ name: 'userView', params: { id: 123 }}">bar</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

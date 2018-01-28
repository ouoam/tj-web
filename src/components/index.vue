<template>
  <div class="hello">
    <div class="jumbotron">
      <h1>TJ-SSF 2018</h1>
      <p class="lead">TJ-SSF 2018 new design website (not finish)</p>
      <p class="lead">Please login befor use</p>
      <ul>
        <li><router-link :to="{ name: 'dataList', params: { type:'user'}}">User List</router-link></li>
        <li><router-link :to="{ name: 'dataList', params: { type:'org'}}">Organization List</router-link></li>
        <li><router-link :to="{ name: 'dataList', params: { type:'project'}}">Project List</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

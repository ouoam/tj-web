<template>
  <div class="user">
    <h1>{{ user['name'] }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><router-link :to="{ name: 'index'}">bar</router-link></li>
    </ul>

    <div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      user: {
        name: "Hi Hi"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

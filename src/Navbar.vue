<template>
  <nav  id="navbar" class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">TJ-SSF 2018</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-bind:class="{ active: ($route.name == 'index') }">
          <router-link :to="{name: 'index'}" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-bind:class="{ active: ($route.params.type == 'user') }">
          <router-link :to="{name: 'dataList', params: {type:'user'}}" class="nav-link">User</router-link>
        </li>
        <li class="nav-item" v-bind:class="{ active: ($route.params.type == 'org') }">
          <router-link :to="{name: 'dataList', params: {type:'org'}}" class="nav-link">Organization</router-link>
        </li>
        <li class="nav-item" v-bind:class="{ active: ($route.params.type == 'project') }">
          <router-link :to="{name: 'dataList', params: {type:'project'}}" class="nav-link">Project</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>

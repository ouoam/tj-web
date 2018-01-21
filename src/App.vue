<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
ul.noBullet {
  list-style-type: none;
  padding: 0 1rem;
}

.infoGroup {
  padding-top: 2rem;
}
.infoGroup h4{
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding-bottom: 8px;
}

.bg-light {
  background-color: #e9ecef!important;;
  padding: 2rem;
  border-radius: .3rem;
}
.bg-light * {
  margin: auto;
}
.bg-light img {
  border-radius: 10px;
}
.bg-light div {
  padding: 1rem;
}
</style>

<template>
  <div class="user">
    <div class="row">
      <div class="col-sm">
        <img class="d-block mx-auto" :src="user.pic" alt="" width="230" height="230">
      </div>
      <div class="col-md">
        <h2>{{ user.name }}</h2>

        <span>{{ user['nickname'] }} - {{ user.gender }}</span><br>
        <span>{{ user['occupation'] }} / {{ user.type }}</span><br>
        <span><i class="fas fa-users"></i> <router-link :to="{ name: 'userView', params: { id: user.orgID }}">{{ user.org }}</router-link></span><br>
        <span><i class="far fa-envelope"></i> {{ user.email }}</span><br>
        <span><i class="fas fa-phone"></i> {{ user.tel }}</span><br>
      </div>
    </div>
    <h4><i class="fas fa-map-marker-alt"></i> Location</h4>
    <span>{{ user.tel }} {{ user.email }}</span>

    <h4><i class="fas fa-heart"></i> Health</h4>
    <span>{{ user.tel }} {{ user.email }}</span>

  </div>
  <!-- {{$route.params.id}} -->
</template>

<script>
export default {
  name: 'userView',
  data () {
    return {
      user: {
        name: "Mr. Poompathai Chansriwong",
        nickname: 'Ou',
        gender: 'male',
        org: 'Princess Chulabhorn\'s College Phitsanulok',
        orgID: '1',
        occupation: 'Student',
        type: 'Contact person',
        email: 'poompathai.cha@pccpl.ac.th',
        tel: '+66 87 520 6356',
        pic: 'http://tjssf2018.pccpl.ac.th/media/users/5.png'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

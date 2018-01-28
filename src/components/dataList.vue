<template>
  <div class="dataView" v-if="$route.params.type == 'org' || $route.params.type == 'project' || $route.params.type == 'user'">

    <div class="row">

      <!-- start left column -->
      <div class="col-md-3">
        <div v-if="$route.params.type == 'org' && count">
          <div class="infoGroup" v-if="count.type">
            <h4>Type</h4>
            <ul class="noBullet">
              <li v-for="(value, key) in count.type" :key="key"><router-link :to="{name: 'dataList', params: {type: 'org'}, query: {type: key}}">{{textVar.o_type[key]}}</router-link> <span class="badge badge-dark">{{value}}</span></li>
              <li><router-link :to="{name: 'dataList', params: {type: 'org'}}">Total</router-link> <span class="badge badge-dark">{{total(count.type)}}</span></li>
            </ul>
          </div>
        </div>

        <div v-if="$route.params.type == 'user' && count">
          <div class="infoGroup" v-if="count.type">
            <h4>Type</h4>
            <ul class="noBullet">
              <li v-for="(value, key) in count.type" :key="key"><router-link :to="{name: 'dataList', params: {type: 'user'}, query: {type: key}}">{{textVar.m_type[key]}}</router-link> <span class="badge badge-dark">{{value}}</span></li>
              <li><router-link :to="{name: 'dataList', params: {type: 'user'}}">Total</router-link> <span class="badge badge-dark">{{total(count.type)}}</span></li>
            </ul>
          </div>
          <div class="infoGroup" v-if="count.occupation">
            <h4>Occupation</h4>
            <ul class="noBullet">
              <li v-for="(value, key) in count.occupation" :key="key"><router-link :to="{name: 'dataList', params: {type: 'user'}, query: {occupation: key}}">{{textVar.occupation[key]}}</router-link> <span class="badge badge-dark">{{value}}</span></li>
              <li><router-link :to="{name: 'dataList', params: {type: 'user'}}">Total</router-link> <span class="badge badge-dark">{{total(count.occupation)}}</span></li>
            </ul>
          </div>
        </div>

        <div v-if="$route.params.type == 'project' && count">
          <div class="infoGroup" v-if="count.category">
            <h4>Category</h4>
            <ul class="noBullet">
              <li v-for="(value, key) in count.category" :key="key"><router-link :to="{name: 'dataList', params: {type: 'project'}, query: {category: key}}">{{textVar.category[key]}}</router-link> <span class="badge badge-dark">{{value}}</span></li>
              <li><router-link :to="{name: 'dataList', params: {type: 'project'}}">Total</router-link> <span class="badge badge-dark">{{total(count.category)}}</span></li>
            </ul>
          </div>
          <div class="infoGroup" v-if="count.style">
            <h4>Style</h4>
            <ul class="noBullet">
              <li v-for="(value, key) in count.style" :key="key"><router-link :to="{name: 'dataList', params: {type: 'project'}, query: {style: key}}">{{textVar.style[key]}}</router-link> <span class="badge badge-dark">{{value}}</span></li>
              <li><router-link :to="{name: 'dataList', params: {type: 'project'}}">Total</router-link> <span class="badge badge-dark">{{total(count.style)}}</span></li>
            </ul>
          </div>
        </div>

      </div>
      <!-- end left column -->

      <!-- start right column -->
      <div class="col-md" v-if="!isEmpty(data)">
        <div class="infoGroup" v-if="$route.params.type == 'org'">
          <h4>Organization</h4>
          <div v-for="org in data" :key="org.id">
            <div class="row" style="margin: 1rem;">
              <div class="col" style="max-width: 50px;padding: 0;">
                <img :src="org.pic" alt="" width="50" height="50">
              </div>
              <div class="col">
                <h5><router-link :to="{name: 'dataView', params: {type:'org', id: org.id}}">{{org.name}}</router-link></h5>
                <ul class="noBullet">
                  <li>{{textVar.o_type[org.type]}}<span v-if="org.homepage"> - {{org.homepage}}</span></li>
                  <li><span v-if="org.city">{{org.city}}, </span><span v-if="org.province">{{org.province}}, </span>{{textVar.country[org.country]}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="infoGroup" v-if="$route.params.type == 'user'">
          <h4>Members
            <span v-if="$route.query">
              <span v-if="$route.query.type"> - {{textVar.m_type[$route.query.type]}}</span>
              <span v-if="$route.query.occupation"> - {{textVar.occupation[$route.query.occupation]}}</span>
              <span v-if="$route.query.organization"> - {{textVar.org[$route.query.organization]}}</span>
            </span>
          </h4>
          <div v-for="user in data" :key="user.id">
            <div class="row" style="margin: 1rem;">
              <div class="col" style="max-width: 50px;padding: 0;">
                <img :src="user.pic" alt="" width="50" height="50">
              </div>
              <div class="col">
                <h5><router-link :to="{name: 'dataView', params: {type:'user', id: user.id}}">{{textVar.title[user.title]}} {{user.firstname}} {{user.lastname}}</router-link><span v-if="user.nickname" style="font-size: medium;"> ({{user.nickname}})</span></h5>
                <ul class="noBullet">
                  <li>{{textVar.occupation[user.occupation]}} / {{textVar.m_type[user.type]}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="infoGroup" v-if="$route.params.type == 'project'">
          <h4>Project
            <span v-if="$route.query">
              <span v-if="$route.query.category"> - {{textVar.category[$route.query.category]}}</span>
              <span v-if="$route.query.style"> - {{textVar.style[$route.query.style]}}</span>
            </span>
          </h4>
          <div v-for="project in data" :key="project.id">
            <div class="row" style="margin: 1rem;">
              <div class="col" style="max-width: 50px;padding: 0;">
                <img :src="project.pic" alt="" width="50" height="50">
              </div>
              <div class="col">
                <h5><router-link :to="{name: 'dataView', params: {type:'project', id: project.id}}">{{project.name}}</router-link></h5>
                <ul class="noBullet">
                  <li>{{textVar.org[project.organization]}}</li>
                  <li>{{textVar.category[project.category]}} - {{textVar.style[project.style]}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- end right column -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataList',
  data () {
    return {
      data: {},
      count: {}
    }
  },
  props: {
    textVar: {
      required: true
    }
  },
  mounted () {
    this.updateData(this.$route.params)
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.updateData(to.params)
  },
  methods: {
    isEmpty: function (obj) {
      return Object.keys(obj).length === 0 && obj.constructor === Object
    },
    isExist: function (variable) {
      return !(typeof variable === 'undefined' || variable === null)
    },
    total: function (obj) {
      let total = []
      Object.entries(obj).forEach(([key, val]) => {
        total.push(parseInt(val)) // the value of the current key.
      })
      return total.reduce(function (total, num) { return total + num }, 0)
    },
    updateData: function (params) {
      var self = this

      this.data = {}
      this.count = {}
      // eslint-disable-next-line
      $('.loading').show()

      var xhr = new XMLHttpRequest()
      xhr.onload = function () {
        self.data = this.response.data
        self.count = this.response.count
        // eslint-disable-next-line
        $('.loading').hide()
      }
      xhr.responseType = 'json'
      xhr.open('GET', 'http://localhost/api.php?type=' + encodeURIComponent(params.type) + (!this.isEmpty(this.$route.query) ? ('&q=' + encodeURIComponent(JSON.stringify(this.$route.query))) : ''))
      xhr.send()
    }
  }
}

</script>

<style scoped>

</style>

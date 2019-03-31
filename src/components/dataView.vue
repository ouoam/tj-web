<template>
  <div class="dataView" v-if="$route.params.type == 'org' || $route.params.type == 'project' || $route.params.type == 'user'">
    <!-- start big card -->
    <div class="row bg-light">
      <div class="col-lg-4">
        <img :src="data.pic" alt="" width="230" height="230">
      </div>
      <div class="col-lg-8">
        <div>
          <h2 v-if="data.name">{{data.name}}</h2>
          <h2 v-if="data.title">{{textVar.title[data.title]}} {{data.firstname}} {{data.lastname}}</h2>
          <ul class="noBullet">
            <li v-if="data.category">{{textVar.category[data.category]}} - {{textVar.style[data.style]}}</li>

            <li v-if="data.nickname"><b>{{data.nickname}}</b> - {{textVar.gender[data.gender]}}</li>
            <li v-else-if="data.gender">{{textVar.gender[data.gender]}}</li>
            <li v-if="data.occupation">{{textVar.occupation[data.occupation]}} / {{textVar.m_type[data.type]}}</li>
            <li v-if="data.organization"><i class="fas fa-building fa-fw"></i> <router-link :to="{name: 'dataView', params: {type:'org', id: data.organization}}">{{textVar.org[data.organization]}}</router-link></li>

            <li v-if="data.shortname"><b>{{data.shortname}}</b> - {{textVar.o_type[data.type]}}</li>
            <li v-if="data.homepage"><i class="fas fa-globe fa-fw"></i> <a :href="data.homepage" target="_blank">{{data.homepage}}</a></li>
            <li v-if="data.member"><i class="fas fa-users fa-fw"></i> <router-link :to="{name: 'dataList', params: {type:'user'}, query: {organization: data.id}}">{{data.member}} members</router-link></li>

            <li v-if="data.email"><i class="far fa-envelope fa-fw"></i> {{data.email}}</li>
            <li v-if="data.tel"><i class="fas fa-phone fa-fw"></i> {{data.tel}}</li>
            <li v-if="data.fax"><i class="fas fa-fax fa-fw"></i> {{data.fax}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- end big card -->

    <div class="row">

      <!-- start left column -->
      <div class="col-md-4">
        <div class="infoGroup" v-if="data.country">
          <h4>Location</h4>
          <ul class="noBullet">
            <li><span v-if="data.address1">{{data.address1}}</span><span v-if="data.address2"> {{data.address2}}</span>,</li>
            <li v-if="data.city">    {{data.city}},</li>
            <li v-if="data.province">{{data.province}},</li>
            <li v-if="data.country"> {{textVar.country[data.country]}} {{data.zip}}</li>
          </ul>
        </div>

        <div class="infoGroup" v-if="data.title">
          <h4>Health</h4>
          <ul class="noBullet infoHealth">
            <li><span>Chronic diseaces </span> : {{data.chronic}}</li>
            <li><span>Allergies        </span> : {{data.allergies}}</li>
            <li><span>Food restrictions</span> : {{textVar.food[data.food]}}</li>
            <li><span>Blood type       </span> : {{data.position}}</li>
          </ul>
        </div>

        <div class="infoGroup" v-if="!isEmpty(members)">
          <h4>Member</h4>
          <div v-for="member in members" :key="member.id">
            <div class="row" style="margin: 1rem;">
              <div class="col" style="max-width: 50px;padding: 0;">
                <img :src="member.pic" alt="" width="50" height="50">
              </div>
              <div class="col">
                <h5><router-link :to="{name: 'dataView', params: {type:'user', id: member.id}}">{{member.firstname}} {{member.lastname}}</router-link></h5>
                <ul class="noBullet">
                  <li><b>{{member.nickname}}</b> - {{textVar.occupation[member.occupation]}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="infoGroup" v-if="!isEmpty(teachers)">
          <h4>Teacher</h4>
          <div v-for="teacher in teachers" :key="teacher.id">
            <div class="row" style="margin: 1rem;">
              <div class="col" style="max-width: 50px;padding: 0;">
                <img :src="teacher.pic" alt="" width="50" height="50">
              </div>
              <div class="col">
                <h5><router-link :to="{name: 'dataView', params: {type:'user', id: teacher.id}}">{{teacher.firstname}} {{teacher.lastname}}</router-link></h5>
                <ul class="noBullet">
                  <li><b>{{teacher.nickname}}</b> - {{textVar.occupation[teacher.occupation]}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end left column -->

      <!-- start right column -->
      <div class="col-md">
        <div class="infoGroup" v-if="!isEmpty(projects)">
          <h4>Project</h4>
          <div v-for="project in projects" :key="project.id">
            <div class="row" style="margin: 1rem;">
              <div class="col" style="max-width: 50px;padding: 0;">
                <img :src="project.pic" alt="" width="50" height="50">
              </div>
              <div class="col">
                <h5><router-link :to="{name: 'dataView', params: {type:'project', id: project.id}}">{{project.name}}</router-link></h5>
                <ul class="noBullet">
                  <li>{{textVar.category[project.category]}} - {{textVar.style[project.style]}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="infoGroup" v-if="data.concept">
          <h4>Concept</h4>
          <p v-for="para in data.concept" :key="para.key" style="margin: 1rem;">{{para.msg}}</p>
        </div>

        <div class="infoGroup" v-if="data.objective">
          <h4>Objective</h4>
          <ul class="noBullet">
            <li v-for="para in data.objective" :key="para.key">{{para.msg}}</li>
          </ul>
        </div>
        <div class="infoGroup" v-if="0">
          <h4>Documents</h4>
          <ul class="noBullet">
            <li>Abstract (.docx)</li>
            <li>Abstract (.pdf)</li>
            <li>Full paper(.docx)</li>
            <li>Full Paper(.pdf)</li>
          </ul>
        </div>
      </div>
      <!-- end right column -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataView',
  data () {
    return {
      data: {},
      members: {},
      teachers: {},
      projects: {}
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
    strToArray: function (str) {
      var key = 0
      if (this.isExist(str)) {
        var esay = str.split(/\r?\n/)
        key = 0
        str = []
        esay.forEach(function (para) {
          str.push({key: key++, msg: para})
        })
      }
      return str
    },
    updateData: function (params) {
      var self = this

      this.data = {}
      this.members = {}
      this.teachers = {}
      this.projects = {}
      // eslint-disable-next-line
      $('.loading').show()

      var xhr = new XMLHttpRequest()
      xhr.onload = function () {
        if (self.isExist(this.response.data)) {
          var data = this.response.data
          data.concept = self.strToArray(data.concept)
          data.objective = self.strToArray(data.objective)
          self.data = data
        }

        self.members = self.isExist(this.response.members) ? this.response.members : {}
        self.teachers = self.isExist(this.response.teachers) ? this.response.teachers : {}
        self.projects = self.isExist(this.response.projects) ? this.response.projects : {}
        // eslint-disable-next-line
        $('.loading').hide()
      }
      xhr.responseType = 'json'
      xhr.open('GET', 'http://localhost/api.php?id=' + encodeURIComponent(params.id) + '&type=' + encodeURIComponent(params.type))
      xhr.send()
    }
  }
}

</script>

<style scoped>
ul.noBullet.infoHealth li span {
  width: 130px;
  float: left;
}
</style>

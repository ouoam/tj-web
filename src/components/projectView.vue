<template>
  <div class="user">
    <div class="row bg-light">
      <img :src="user.pic" alt="" width="230" height="230">
      <div>
        <h2>{{user.name}}</h2>
        <ul class="noBullet">
          <li><b>{{user.nickname}}</b> - {{user.gender}}</li>
          <li>{{user.occupation}} / {{user.type}}</li>
          <li><i class="fas fa-users"></i> <router-link :to="{name: 'orgView', params: {id: user.orgID}}">{{user.org}}</router-link></li>
          <li><i class="far fa-envelope"></i> {{user.email}}</li>
          <li><i class="fas fa-phone"></i> {{user.tel}}</li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="infoGroup">
          <h4>Location</h4>
          <ul class="noBullet">
            <li>{{user.address1}} {{user.address2}},</li>
            <li>{{user.city}},</li>
            <li>{{user.province}},</li>
            <li>{{user.country}} {{user.zip}}</li>
          </ul>
        </div>

        <div class="infoGroup">
          <h4>Health</h4>
          <ul class="noBullet">
            <li><span>Chronic diseaces </span> : {{user.chronic}}</li>
            <li><span>Allergies        </span> : {{user.allergies}}</li>
            <li><span>Food restrictions</span> : {{user.food}}</li>
            <li><span>Blood type       </span> : {{user.blood}}</li>
          </ul>
        </div>
      </div>

      <div class="col-md">
        <div class="infoGroup">
          <h4>Project</h4>

          <div v-for="project in projects" :key="project.id">
            <div class="row" style="margin: 1rem;">
              <img :src="project.pic" alt="" width="50" height="50">
              <div style="margin: 0 1rem;">
                <h5><router-link :to="{name: 'projectView', params: {id: project.id}}">{{project.name}}</router-link></h5>
                <ul class="noBullet">
                  <li>{{project.category}} / {{project.style}}</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
  <!-- {{$route.params.id}} -->
</template>

<script>
export default {
  name: 'projectView',
  data () {
    return {
      user: {
        id: '5',
        name: 'Mr. Poompathai Chansriwong',
        nickname: 'Ou',
        gender: 'male',
        org: 'Princess Chulabhorn\'s College Phitsanulok',
        orgID: '1',
        occupation: 'Student',
        type: 'Contact person',
        email: 'poompathai.cha@pccpl.ac.th',
        tel: '+66 87 520 6356',
        pic: 'http://tjssf2018.pccpl.ac.th/media/users/5.png',

        address1: '116/1 Moo.9',
        address2: 'Horkai',
        city: 'Bankmulnak',
        province: 'Phitchit',
        zip: '66120',
        country: 'Thailand',

        chronic: '-',
        allergies: '-',
        food: '-',
        blood: 'O'
      },
      projects: [
        {
          id: '1',
          name: 'Howto make TJ-SSF Website 1',
          pic: 'http://tjssf2018.pccpl.ac.th/media/projects/58.png',
          category: 'Computer',
          style: 'Oral and poster'
        },
        {
          id: '2',
          name: 'Howto make TJ-SSF Website 2',
          pic: 'http://tjssf2018.pccpl.ac.th/media/projects/58.png',
          category: 'Computer',
          style: 'Oral and poster'
        },
        {
          id: '3',
          name: 'Howto make TJ-SSF Website 3',
          pic: 'http://tjssf2018.pccpl.ac.th/media/projects/58.png',
          category: 'Computer',
          style: 'Oral and poster'
        }
      ]
    }
  }
}
</script>

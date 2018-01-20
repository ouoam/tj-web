<template>
  <div class="dataView" v-if="$route.params.type == 'org' || $route.params.type == 'project' || $route.params.type == 'user'">

    <!-- start big card -->
    <div class="row bg-light">
      <img :src="data.pic" alt="" width="230" height="230">
      <div>
        <h2>{{data.name}}</h2>
        <ul class="noBullet">
          <li v-if="data.category">{{data.category}} - {{data.style}}</li>

          <li v-if="data.nickname"><b>{{data.nickname}}</b> - {{data.gender}}</li>
          <li v-else-if="data.gender">{{data.gender}}</li>
          <li v-if="data.occupation">{{data.occupation}} / {{data.type}}</li>
          <li v-if="data.org && data.orgID"><i class="fas fa-building"></i> <router-link :to="{name: 'dataView', params: {type:'org', id: data.orgID}}">{{data.org}}</router-link></li>

          <li v-if="data.shortname"><b>{{data.shortname}}</b> - {{data.type}}</li>
          <li v-if="data.website"><i class="fas fa-globe"></i> <a :href="data.website" target="_blank">{{data.website}}</a></li>
          <li v-if="data.member"><i class="fas fa-users"></i> <router-link :to="{name: 'dataList', params: {type:'org', id: $route.params.id}}">{{data.member}} members</router-link></li>

          <li v-if="data.email"><i class="far fa-envelope"></i> {{data.email}}</li>
          <li v-if="data.tel"><i class="fas fa-phone"></i> {{data.tel}}</li>
          <li v-if="data.fax"><i class="fas fa-fax"></i> {{data.fax}}</li>

        </ul>
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
            <li v-if="data.country"> {{data.country}} {{data.zip}}</li>
          </ul>
        </div>

        <div class="infoGroup" v-if="data.blood">
          <h4>Health</h4>
          <ul class="noBullet infoHealth">
            <li><span>Chronic diseaces </span> : {{data.chronic}}</li>
            <li><span>Allergies        </span> : {{data.allergies}}</li>
            <li><span>Food restrictions</span> : {{data.food}}</li>
            <li><span>Blood type       </span> : {{data.blood}}</li>
          </ul>
        </div>

        <div class="infoGroup" v-if="members">
          <h4>Member</h4>
          <div v-for="member in members" :key="member.id">
            <div class="row" style="margin: 1rem;">
              <div class="col" style="max-width: 50px;padding: 0;">
                <img :src="member.pic" alt="" width="50" height="50">
              </div>
              <div class="col">
                <h5><router-link :to="{name: 'dataView', params: {type:'user', id: member.id}}">{{member.name}}</router-link></h5>
                <ul class="noBullet">
                  <li><b>{{member.nickname}}</b> - {{member.occupation}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="infoGroup" v-if="teachers">
          <h4>Teacher</h4>
          <div v-for="teacher in teachers" :key="teacher.id">
            <div class="row" style="margin: 1rem;">
              <div class="col" style="max-width: 50px;padding: 0;">
                <img :src="teacher.pic" alt="" width="50" height="50">
              </div>
              <div class="col">
                <h5><router-link :to="{name: 'dataView', params: {type:'user', id: teacher.id}}">{{teacher.name}}</router-link></h5>
                <ul class="noBullet">
                  <li><b>{{teacher.nickname}}</b> - {{teacher.occupation}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end left column -->

      <!-- start right column -->
      <div class="col-md">
        <div class="infoGroup" v-if="projects">
          <h4>Project</h4>
          <div v-for="project in projects" :key="project.id">
            <div class="row" style="margin: 1rem;">
              <div class="col" style="max-width: 50px;padding: 0;">
                <img :src="project.pic" alt="" width="50" height="50">
              </div>
              <div class="col">
                <h5><router-link :to="{name: 'dataView', params: {type:'project', id: project.id}}">{{project.name}}</router-link></h5>
                <ul class="noBullet">
                  <li>{{project.category}} - {{project.style}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="infoGroup" v-if="data.concept">
          <h4>Concept</h4>
          <p v-for="para in data.concept" :key="para" style="margin: 1rem;">{{para}}</p>
        </div>

        <div class="infoGroup" v-if="data.objective">
          <h4>Objective</h4>
          <ul class="noBullet">
            <li v-for="para in data.objective" :key="para">{{para}}</li>
          </ul>
        </div>

        <div class="infoGroup">
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
  <!-- {{$route.params.id}} -->
</template>

<script>
export default {
  name: 'dataView',
  data () {
    return {
      data: {
        id: '5',
        name: 'Mr. Poompathai Chansriwong',
        pic: 'http://tjssf2018.pccpl.ac.th/media/users/5.png',

        org: 'Princess Chulabhorn\'s College Phitsanulok',
        orgID: '1',
        /*
        nickname: 'Ou',
        gender: 'male',
        occupation: 'Student',
        website: 'https://19991999.xyz',
        email: 'poompathai.cha@pccpl.ac.th',
        tel: '+66 87 520 6356',
        fax: '+66 5524 5110',
        type: 'Contact person',

        member: '400',
        shortname: 'Poompat',

        address1: '116/1 Moo.9',
        address2: 'Horkai',
        city: 'Bankmulnak',
        province: 'Phitchit',
        zip: '66120',
        country: 'Thailand',

        chronic: '-',
        allergies: '-',
        food: '-',
        blood: 'O',
        */

        category: 'Computer',
        style: 'Oral and poster',
        concept: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa dolor, viverra eget consectetur eget, accumsan vel lorem. Aliquam at scelerisque odio, quis varius libero. Etiam vitae nisi massa. Morbi in eros vitae urna volutpat fermentum. Donec non tortor in nibh auctor bibendum vel eget massa. Vivamus lectus justo, molestie tristique magna nec, porta consectetur urna. Aliquam viverra blandit dui. Nam rhoncus vehicula velit quis convallis. Duis hendrerit massa ipsum, vel elementum diam iaculis vel. Vivamus auctor volutpat sodales. Integer dapibus massa id vehicula elementum. Maecenas ligula nisl, fringilla nec tortor et, tempor vulputate ante. Fusce eleifend ante vitae varius lacinia. Vestibulum fringilla rhoncus ligula ac consectetur. ',
          'Aenean laoreet faucibus risus, at consequat nulla ullamcorper eget. Donec hendrerit, felis vel lobortis condimentum, orci tellus mollis odio, et congue orci tellus gravida diam. Nullam luctus turpis et dui porttitor, vel pulvinar sem aliquam. Aenean pulvinar ligula tincidunt tortor vestibulum, ut vulputate sem semper. Nulla pretium diam et ipsum lacinia tempus. Donec mollis enim nec enim condimentum, in ullamcorper turpis consequat. Maecenas lacinia felis eu nulla tincidunt, eget egestas odio fermentum. Etiam quis auctor tellus. Nam nulla orci, hendrerit a posuere in, sollicitudin et ex. Maecenas tempus, odio eget lobortis aliquet, ligula magna efficitur neque, vitae rutrum massa elit viverra risus. Maecenas odio elit, ultricies at elementum at, malesuada id diam. Aliquam faucibus consectetur placerat. Maecenas ex nisl, varius vel odio quis, varius semper nisi. Donec sed eros nunc. '
        ],
        objective: [
          '1. Get Money!!!!',
          '2. Get Money!!!!',
          '3. Get Money!!!!',
          '4. Get Money!!!!'
        ]
      },
      /*
      projects: [
        {
          id: '1',
          name: 'Howto make TJ-SSF Website 1 jlkhk;lh klhjkj kjhkj hk;lhj ;kjh ;kjh k;jhkj h; jh;kj h;kjhkjhk j',
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
      ],
      */
      members: [
        {
          id: 1,
          name: '44444 4444 6666',
          pic: 'http://tjssf2018.pccpl.ac.th/media/projects/58.png',
          nickname: 'fff',
          occupation: 'student'
        },
        {
          id: 2,
          name: '88888 4444 6666',
          pic: 'http://tjssf2018.pccpl.ac.th/media/projects/58.png',
          nickname: 'fgf',
          occupation: 'student'
        }
      ],
      teachers: [
        {
          id: 1,
          name: '44444 4444 6666',
          pic: 'http://tjssf2018.pccpl.ac.th/media/projects/58.png',
          nickname: 'fff',
          occupation: 'teacher'
        }
      ]
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

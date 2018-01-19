<template>
  <div class="user">
    <div class="row bg-light">
      <img :src="org.pic" alt="" width="230" height="230">
      <div>
        <h2>{{org.name}}</h2>
        <ul class="noBullet">
          <li><b>{{org.shortname}}</b> - {{org.type}}</li>
          <li><i class="fas fa-link"></i> {{org.web}}</li>
          <li><i class="far fa-envelope"></i> {{org.email}}</li>
          <li><i class="fas fa-phone"></i> {{org.tel}}</li>
          <li><i class="fas fa-fax"></i> {{org.fax}}</li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="infoGroup">
          <h4>Location</h4>
          <ul class="noBullet">
            <li>{{org.address1}} {{org.address2}},</li>
            <li>{{org.city}},</li>
            <li>{{org.province}},</li>
            <li>{{org.country}} {{org.zip}}</li>
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
  name: 'orgView',
  data () {
    return {
      org: {
        id: '5',
        name: 'Princess Chulabhorn\'s College Phitsanulok',
        shortname: 'PCSHS PL',
        type: '12 PCSH School',
        web: 'http://www.pccpl.ac.th',
        email: 'pccpl@pccpl.ac.th',
        tel: '+66 5524 5115',
        fax: '+66 5524 5110',
        pic: 'http://tjssf2018.pccpl.ac.th/media/orgs/2.png',

        address1: '86 Moo.4',
        address2: 'Makamsung',
        city: 'Meaung',
        province: 'Phitsanulok',
        zip: '65000',
        country: 'Thailand',
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

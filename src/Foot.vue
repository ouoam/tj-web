<template>
  <div  id="footer">
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2><strong>TJ-SSF 2018 SECRETARIAT</strong></h2>
            <h3>Princess Chulabhorn Science High School Phitsanulok&nbsp;<a href="http://www.pccpl.ac.th/" target="_blank"><i class="fas fa-external-link-alt"></i></a></h3>
            <h4>86 M.4 Makhamsung  Meang  Phitsanulok 65000  Thailand</h4>
            <ul class="fa-ul">
              <li><i class="fas fa-link fa-fw"></i>&nbsp;<a class="linkOverPic" href="/">http://tjssf2018.pccpl.ac.th</a></li>
              <li><i class="far fa-envelope fa-fw"></i>&nbsp;<a class="linkOverPic" href="mailto:tjssf2018@gmail.com">tjssf2018@gmail.com</a></li>
              <li><i class="fas fa-phone fa-fw"></i>&nbsp;+66 (0) 5524 5115</li>
              <li><i class="fas fa-fax fa-fw"></i>&nbsp;+66 (0) 5524 5110</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </div>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="text-center">
        <div>2018 &copy; Thailand - Japan Student Science Fair 2018 Made by <a href="https://19991999.xyz/">Poompathai Chansriwong</a></div>
      </div>
      <div class="text-center">
        <div>Icons made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped>
.banner {
    padding: 100px 0;
    color: #f8f8f8;
    background: url(http://tjssf2018.pccpl.ac.th/img/footer_land_pccpl2.jpg) no-repeat center center;
    background-size: cover;
}

.banner h2 {
    margin: 0;
    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);
    font-size: 3em;
}

.banner ul {
    margin-bottom: 0;
}

.linkOverPic {
    text-shadow:
     2px -1px white, 2px  0px white, 2px  1px white, 2px  2px white,
     1px  2px white, 0px  2px white,-1px  2px white,-2px  2px white,
    -2px  1px white,-2px  0px white,-2px -1px white,-2px -2px white,
    -1px -2px white, 0px -2px white, 1px -2px white, 2px -2px white;
}

</style>

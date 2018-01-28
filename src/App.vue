<template>
  <div id="app" class="container" v-if="dataLoaded">
    <router-view :textVar="textVar"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      textVar: {},
      dataLoaded: false
    }
  },
  mounted () {
    // eslint-disable-next-line
    $('.loading').show()
    var self = this
    var xhr = new XMLHttpRequest()
    xhr.onload = function () {
      if (this.response.msg === 'Error') {
        window.location.replace('/login.php')
      }
      self.textVar = this.response
      // eslint-disable-next-line
      $('.loading').hide()
      self.dataLoaded = true
    }
    xhr.responseType = 'json'
    xhr.open('GET', 'http://localhost/api.php?type=var')
    xhr.send()
  }
}
</script>

<style>
/* thank https://codepen.io/svinkle/pen/hdpBD  &&  https://codepen.io/bermudaquest/pen/EjMREW */
.loading {
    background: rgba(0, 0, 0, 0.4);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9998;
}

.loader {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.4);
}

.inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid black;
}

.inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid black;
}

.inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid black;
}

.nucleus {
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: black;
  top: calc(100% - 38px);
  left: calc(100% - 38px);
  position: absolute;
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

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
  margin-left: calc(50% - 115px);
}
</style>

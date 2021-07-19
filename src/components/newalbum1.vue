<template>
  <div style="padding-top: 30px;height: 186px;">
    <ul>
      <li v-for="(count,index) in 5" :key="'album1'+count">
        <img :src="imgurls[index]" alt="">
        <span>{{ albumname[index] }}</span>
        <span>{{ artiname[index] }}</span>

      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex'

export default {
  name: 'newalbum1',
  store,
  data: function () {
    return {}
  },
  computed: {
    ...mapState([
      'imgurls',
      'artiname',
      'albumname'
    ])
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-left: 10px;
}

ul li {
  position: relative;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  width: 118px;
  background: url("../assets/coverall.png") no-repeat 0 -570px;
}

ul li img {
  z-index: -1;
  position: relative;
  display: inline-block;
  height: 100px;
  width: 100px;
}

ul li span:nth-child(2) {
  font-size: 12px;
  position: absolute;
  color: #000000;
  left: 0;
  bottom: -25px;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

ul li span:nth-child(3) {
  font-size: 12px;
  position: absolute;
  color: #666666;
  left: 0;
  bottom: -45px;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
</style>

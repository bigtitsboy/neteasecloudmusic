<template>
  <div id="TOP">
    <div class="tophead">
      <div class="container">
        <div class="row" style="height: 70px;overflow: hidden">
          <div class="col-lg-2" style="padding: 0px">
            <img class="logo" :src="require('../assets/logo.png')">
          </div>
          <div class="col-lg-5" style="padding: 0px">
            <ul class="headbar clearfix">
              <li :key="item" v-for="item in headlist" class="libar">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-5">
            <div class="row">
              <div class=" col-lg-4">
                <div class="search">
                  <input style="outline:none;box-shadow: none;" type="text" onfocus="this.placeholder=''"
                         onblur="this.placeholder='音乐/视频/电台/用户'" placeholder="音乐/视频/电台/用户">
                </div>
              </div>
              <button class="creater col-lg-4">创作者中心</button>
              <a class="login col-lg-4">登录</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sencondhead" style="height:35px;overflow: hidden">
      <div class="container">
        <div class="row">
          <ul class="secondbar">
            <li class="sencondlibar" >
              <span>
                <router-link style="background-color: rgb(155, 9, 9)"  to="/home/discover">
                  <div style="height: 100%;width: 100%" @click="changerouter">
                    推荐
                  </div>
              </router-link>
              </span>
            </li>
            <li :key="item" class="sencondlibar" v-for="item in secondlist">
              <span>
                <router-link   :to="'/home/'+item.split('/')[1]">
                  <div style="height: 100%;width: 100%" @click="changerouter">
                  {{ item.split('/')[0] }}
                  </div>
              </router-link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHead',
  data: function () {
    return {
      headlist: [
        '发现音乐',
        '我的音乐',
        '朋友',
        '商城',
        '音乐人',
        '下载客户端'
      ],
      secondlist: [
        '排行榜/toplist',
        '歌单/playlist',
        '主播电台/djradio',
        '歌手/artist',
        '新碟上架/album'
      ]
    }
  },
  methods: {
    changerouter: function (e) {
      // console.log(e.target.parentNode)
      var lilength = e.target.parentNode.parentNode.parentNode.parentNode.children.length
      for (var key = 0; key < lilength; key++) {
        e.target.parentNode.parentNode.parentNode.parentNode.children[key].children[0].children[0].style.backgroundColor = ''
      }
      // console.log(e)
      // console.log(this.$refs.discover)
      // for (const key in this.$refs) {
      //   console.log(this.$refs[key].style)
      // }
      e.target.parentNode.style.backgroundColor = 'rgb(155, 9, 9)'
      // console.log(e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0])
    }
  }
}
</script>

<style scoped>
::placeholder {
  color: rgb(155, 155, 155);
}

.tophead {
  background-color: rgb(36, 36, 36);
  padding-left: 6%;
}

.logo {
  max-width: 100%;
  margin-top: 3px;
}

.headbar {
  margin-bottom: 0px;
  padding-left: 0px;
  height: 100%;
}

.libar {
  /*border: 1px solid green;*/
  /*height: 100%;*/
  /*margin-right: 25px;*/
  float: left;
  list-style: none;
  height: 100%;
  padding: 4.5% 15px;
  /*font-size:24px;*/
  /*line-height: 61px;*/
}

.libar a {
  display: block;
  position: relative;
  font-size: 14px;
  height: 100%;
  width: 100%;
  /*float: none;*/
  /*display: block;*/
  color: #cccc;
  text-decoration: none;
  /*height: 100%;*/
}

.headbar .libar:nth-child(1) {
  background-color: #000000;
}

.headbar .libar:nth-child(1) a {
  color: #FFF;
}

.headbar .libar:hover {
  background-color: #000000;
}

.headbar .libar a:hover {
  color: #FFF;
}

.headbar .libar:nth-child(6) a:after {
  content: 'HOT';
  left: 65px;
  top: -15px;
  font-size: 20px;
  color: white;
  font-weight: bolder;
  position: absolute;
  background-color: red;
  border-radius: 11em;
  padding: 2px 8px;
  border: 1px solid red;
  transform: scale(0.4);
  -webkit-font-smoothing: antialiased;
}

.search {
  position: relative;
  background-color: white;
  /*margin-left: 45px;*/
  width: 160px;
  height: 32px;
  border-radius: 2em;
  padding-left: 20px;
  margin: 13% 0px 4% 35px
}

.search::before {
  position: absolute;
  height: 20px;
  width: 20px;
  content: "";
  left: 8px;
  top: 8px;
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' clip-rule='evenodd'/></svg>");
  background-repeat: no-repeat;
  background-size: 15px 15px;
}

.search input {
  font-size: 12px;
  border: none;
  width: 90%;
  border-radius: 2em;
  height: 100%;
}

.creater {
  width: 90px;
  height: 32px;
  border-radius: 2em;
  border: 1px solid rgb(70, 70, 70);
  font-size: 12px;
  background-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
  margin: 4% 10px 0px 30px;
}

.login {
  text-align: left;
  font-size: 12px;
  text-decoration: none;
  color: rgb(120, 120, 120);
  margin: 5.5% 0px;
}

.sencondhead {
  padding-left: 24.5%;
  background-color: red;
}

.secondbar {
  margin-bottom: 10px;
}

.sencondlibar {
  width: 84px;
  font-size: 12px;
  list-style: none;
  float: left;
  margin-right: 5px;
}

.sencondlibar span {
  margin-top: 5px;
  display: inline-block;
  height: 20px;
  padding: 3px 13px;
}

.sencondlibar span a {
  border-radius: 2em;
  padding: 0px 13px;
  position: absolute;
  text-decoration: none;
  color: white;
}

.secondbar .sencondlibar span a:hover {
  background-color: rgb(155, 9, 9);
  border-radius: 2em;
}

.secondbar .sencondlibar:nth-child(1) span a:before {
  position: absolute;
  top: -13.5px;
  left: 20px;
  content: '';
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid red;
}

.secondbar .sencondlibar:nth-child(3) span a:before {
  position: absolute;
  top: -3px;
  left: 38px;
  content: '®';
  opacity: 0.5;
  transform: scale(0.9);
}
</style>

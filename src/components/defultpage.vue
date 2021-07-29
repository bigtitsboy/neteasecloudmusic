<template>
  <div id="defultdiv">
    <div style="position: relative;" class="clearfix">
      <div style="position: absolute;width: 100%" id="carouselExampleFade"
           class="carousel slide carousel-fade  clearfix" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style="height:285px" :src="imgs[0]" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item" v-for="count in 9" :key="'img'+count">
            <img style="height:285px" :src="imgs[count]" class="d-block w-100" alt="...">
          </div>
        </div>
      </div>
      <div class="container clearfix" style="left: 13%;position: absolute;z-index: 1">
        <div class="row" style="height: 285px;overflow: hidden">
          <!--        左边-->
          <div class="col-lg-1 offset-1" style="position:relative;padding: 0">
            <a id="prevbutton" class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
               data-bs-slide="prev">
              <span class="bi-chevron-left" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
          </div>
          <!--        图片-->
          <div class="col-lg-6" style="padding: 0">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img :src="imgs[0]" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" v-for="count in 9" :key="'img'+count">
                  <img :src="imgs[count]" class="d-block w-100" alt="...">
                </div>
              </div>
              <!--            快捷跳转-->
              <ol class="carousel-indicators" style="bottom: -15px">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    style="height: 6px;width: 6px;border-radius: 50%;margin-right: 20px"></li>
                <li v-for="count in 9" :key="'olli'+count" data-bs-target="#carouselExampleIndicators"
                    :data-bs-slide-to="count" style="height: 6px;width: 6px;border-radius: 50%;margin-right: 20px"></li>
              </ol>
            </div>
          </div>
          <!--        下载-->
          <div class="col-lg-3" style="padding: 0;text-align: left;position: relative">
            <img :src="require('../assets/download.png')" alt="">
            <a href="#" style="position: absolute;top: 187px;left:19px">
              <img alt="download" :src="require('../assets/downloadbutton.png')">
            </a>
            <span style="font-size: 12px;color:#8D8D8D;position: absolute;top: 255px;left:19px">PC 安卓 iPhone WP iPad Mac 六大客户端</span>
          </div>
          <!--        右边-->
          <div class="col-lg-1" style="position: relative;padding: 0">
            <a id="nextbutton" class="carousel-control-next" href="#carouselExampleIndicators" role="button"
               data-bs-slide="next">
              <span class="bi-chevron-right" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
      <!--      轮播图下-->
      <div class="container" style="position:absolute;top: 285px;left: 13%">
        <div class="row">
          <!--          main-->
          <div class="col-lg-6 offset-2"
               style="padding: 0;border-top: 1px solid #CCCCCC;border-left: 1px solid #CCCCCC;border-right: 1px solid #CCCCCC">
            <!--            第一部分-->
            <div class="container">
              <!--            topbar-->
              <div class="row" style="padding-top: 25px;border-bottom: 2px solid red">
                <a href="#" class="bara col-lg-2">热门推荐</a>
                <ul class="mainbartop col-lg-7">
                  <li><a href="#">华语</a></li>
                  |
                  <li><a href="#">流行</a></li>
                  |
                  <li><a href="#">摇滚</a></li>
                  |
                  <li><a href="#">民谣</a></li>
                  |
                  <li><a href="#">电子</a></li>
                </ul>
                <a href="#" class="morea col-lg-1 offset-2">更多</a>
              </div>
              <!--              maincontent-->
              <div class="row clearfix">
                <ul class="maincontent">
                  <li class="col-lg-3">
                    <div>
                      <img :src="personalized_picUrl[0]" alt=""> <i
                      class='bi-headphones'>{{ personalized_playCount[0] | numberfilter }}<i class="bi-play-circle"
                                                                                             style="position: absolute;right: 10px;"></i></i>
                    </div>
                    <span>{{ personalized_name[0] }}</span></li>
                  <li class="col-lg-3">
                    <div><img :src="personalized_picUrl[1]" alt=""> <i
                      class='bi-headphones'>{{ personalized_playCount[1] | numberfilter }}<i class="bi-play-circle"
                                                                                             style="position: absolute;right: 10px;"></i></i>
                    </div>
                    <span>{{ personalized_name[1] }}</span></li>
                  <li class="col-lg-3">
                    <div><img :src="personalized_picUrl[2]" alt=""> <i
                      class='bi-headphones'>{{ personalized_playCount[2] | numberfilter }}<i class="bi-play-circle"
                                                                                             style="position: absolute;right: 10px;"></i></i>
                    </div>
                    <span>{{ personalized_name[2] }}</span></li>
                  <li class="col-lg-3">
                    <div><img :src="djprogram_picUrl[0]" alt=""> <i
                      class='bi-headphones'>{{ djprogram_adjustedPlayCount[0] | numberfilter }}<i class="bi-play-circle"
                                                                                                  style="position: absolute;right: 10px;"></i></i>
                    </div>
                    <span>{{ djprogram_name[0] }}</span>
                  </li>
                  <li class="col-lg-3">
                    <div><img :src="personalized_picUrl[3]" alt=""> <i
                      class='bi-headphones'>{{ personalized_playCount[3] | numberfilter }}<i class="bi-play-circle"
                                                                                             style="position: absolute;right: 10px;"></i></i>
                    </div>
                    <span>{{ personalized_name[3] }}</span>
                  </li>
                  <li class="col-lg-3">
                    <div><img :src="djprogram_picUrl[1]" alt=""> <i
                      class='bi-headphones'>{{ djprogram_adjustedPlayCount[1] | numberfilter }}<i class="bi-play-circle"
                                                                                                  style="position: absolute;right: 10px;"></i></i>
                    </div>
                    <span>{{ djprogram_name[1] }}</span>
                  </li>
                  <li class="col-lg-3">
                    <div><img :src="personalized_picUrl[4]" alt=""> <i
                      class='bi-headphones'>{{ personalized_playCount[4] | numberfilter }}<i class="bi-play-circle"
                                                                                             style="position: absolute;right: 10px;"></i></i>
                    </div>
                    <span>{{ personalized_name[4] }}</span>
                  </li>
                  <li class="col-lg-3">
                    <div><img :src="djprogram_picUrl[2]" alt=""> <i
                      class='bi-headphones'>{{ djprogram_adjustedPlayCount[2] | numberfilter }}<i class="bi-play-circle"
                                                                                                  style="position: absolute;right: 10px;"></i></i>
                    </div>
                    <span>{{ djprogram_name[2] }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!--            第二部分-->
            <div class="container">
              <!--            topbar-->
              <div class="row" style="padding-top: 25px;border-bottom: 2px solid red">
                <a href="#" class="bara col-lg-2">新碟上架</a>
                <a href="#" class="morea col-lg-1 offset-9">更多</a>
              </div>
              <!--              maincontent-->
              <div class="albumdiv row clearfix" style="position: relative;overflow: hidden">
                <i @click="clickable && albumleft()" class="bi-chevron-left"></i>
                <i @click="clickable && albumright()" class="bi-chevron-right"></i>
                <div style="background-color: #f5f5f5;z-index: -1;height: 186px;" mode="out-in">
                  <transition-group :name="transitionname">
                    <newalbum1 class="newalbum" :key="'newalbumgrop1'" v-show="newalbum1show"></newalbum1>
                    <newalbum2 class="newalbum" :key="'newalbumgrop2'" v-show="newalbum2show"></newalbum2>
                  </transition-group>
                  <!--                  <transition name="slide-forward">-->
                  <!--                    <newalbum1 class="newalbum" :key="'newalbumgrop1'" v-show="newalbum1show"></newalbum1>-->
                  <!--                  </transition>-->
                  <!--                  <transition name="slide-back">-->
                  <!--                    <newalbum2 class="newalbum" :key="'newalbumgrop2'" v-show="newalbum2show"></newalbum2>-->
                  <!--                  </transition>-->
                </div>
              </div>
            </div>
            <!--            第三部分-->
            <div class="container">
              <div class="row" style="padding-top: 25px;border-bottom: 2px solid red">
                <a href="#" class="bara col-lg-2" style="text-align: left;padding-left: 25px">榜单</a>
                <a href="#" class="morea col-lg-1 offset-9">更多</a>
              </div>
              <div class="row" style="padding-top: 20px;padding-bottom: 40px">
                <div class="top1 col-lg-4" style="padding: 0;border: 1px solid rgb(210, 210, 210)">
                  <dl>
                    <dt class="tophigh clearfix">
                      <div class="markimg">
                        <img :src="tophighcoverImgUrl" alt="">
                      </div>
                      <span>{{ tophighname }}</span>
                    </dt>
                    <dd v-for="(item,index) in tophightracksname" :key="'high'+index">
                      <span>{{ index + 1 }}</span>
                      <a href="#" :title="item">{{ item }}</a>
                      <span style="padding-right: 4px;padding-left: 0;display: none">
                        <i style="margin-right: 3px" class="bi-play-circle"></i>
                        <i style="margin-right: 3px" class="bi-plus"></i>
                        <i style="margin-right: 3px" class="bi-folder-plus"></i>
                      </span>
                    </dd>
                    <dd>查看全部></dd>
                  </dl>
                </div>
                <div class="top1 col-lg-4"
                     style="padding: 0;border-top: 1px solid rgb(210, 210, 210);border-bottom: 1px solid rgb(210, 210, 210)">
                  <dl>
                    <dt class="tophigh clearfix">
                      <div class="markimg">
                        <img :src="topnewcoverImgUrl" alt="">
                      </div>
                      <span>{{ topnewname }}</span>
                    </dt>
                    <dd v-for="(item,index) in topnewtracksname" :key="'new'+index">
                      <span>{{ index + 1 }}</span>
                      <a href="#" :title="item">{{ item }}</a>
                      <span style="padding-right: 4px;padding-left: 0;display: none">
                        <i style="margin-right: 3px" class="bi-play-circle"></i>
                        <i style="margin-right: 3px" class="bi-plus"></i>
                        <i style="margin-right: 3px" class="bi-folder-plus"></i>
                      </span>
                    </dd>
                    <dd>查看全部></dd>
                  </dl>
                </div>
                <div class="top1 col-lg-4" style="padding: 0;border: 1px solid rgb(210, 210, 210)">
                  <dl>
                    <dt class="tophigh clearfix">
                      <div class="markimg">
                        <img :src="topcreatecoverImgUrl" alt="">
                      </div>
                      <span>{{ topcreatename }}</span>
                    </dt>
                    <dd v-for="(item,index) in topcreatetracksname" :key="'create'+index">
                      <span>{{ index + 1 }}</span>
                      <a href="#" :title="item">{{ item }}</a>
                      <span style="padding-right: 4px;padding-left: 0;display: none">
                        <i style="margin-right: 3px" class="bi-play-circle"></i>
                        <i style="margin-right: 3px" class="bi-plus"></i>
                        <i style="margin-right: 3px" class="bi-folder-plus"></i>
                      </span>
                    </dd>
                    <dd>查看全部></dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <!--          aside-->
          <div class="col-lg-3" style="padding: 0;position: relative">
            <div class="row">
              <div class="col-lg-9 "
                   style="border-right: 1px solid #CCCCCC;text-align: left;padding-left: 12px;padding-right: 0;height: 1407px">
                <div
                  style="border-bottom: 1px solid #CCCCCC;width: 100%;height: 126px;background-color: rgb(230, 230, 230);box-shadow: 0 1px 2px gray">
                  <div
                    style="font-size: 12px;color: #666;height: 44px;width: 205px;margin: 0 22.5px;padding: 16px 0">
                    登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                  </div>
                  <a class="userlogin" href="#">用户登录</a>
                </div>
                <div class="singers">
                  <div>
                    <span>入驻歌手</span>
                    <a href="#">查看全部></a>
                  </div>
                  <ul style="margin-top: 20px">
                    <li v-for="(item,index) in defultsongers" :key="'detailsonger'+index">
                      <img :src="item.img" alt="">
                      <div class="singerdetaildiv">
                        <div style="font-size: 14px;color: #333333;margin: 8px 0 0;font-weight: bolder">
                          {{ item.songername }}
                        </div>
                        <div style="font-size: 12px;color: #666666;margin: 8px 0 0">{{ item.songerdetail }}</div>
                      </div>
                    </li>
                  </ul>
                  <div class="singerbutton">申请成为网易音乐人</div>
                </div>
                <div class="singers">
                  <div>
                    <span>热门主播</span>
                  </div>
                  <ul style="margin-top: 20px">
                    <li v-for="(item,index) in hotnative" :key="'hotnative'+index">
                      <img :src="item.img" alt="">
                      <div class="nativerdetaildiv">
                        <div style="font-size: 12px;color: #333333;">
                          {{ item.nativename }}
                        </div>
                        <div style="font-size: 12px;color: #666666;">{{ item.nativedetail }}</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a ref="backtop" v-show="backtopFlag" class="backtop" title="回到顶部" href="#TOP">
              <div class="bi-chevron-compact-up" style="padding: 0"></div>
              TOP
            </a>
          </div>
        </div>
      </div>
    </div>
    <HomeBottom style="position: relative;top: 1692px;"></HomeBottom>
  </div>
</template>

<script>
import axios from 'axios'
import Newalbum1 from '@/components/newalbum1'
import Newalbum2 from '@/components/newalbum2'
import store from '../store'
import 'animate.css'
import HomeBottom from '@/components/HomeBottom'

export default {
  name: 'defultpage',
  store,
  components: {
    HomeBottom,
    Newalbum2,
    Newalbum1
  },
  data: function () {
    return {
      backtopFlag: false,
      hotnative: [
        {
          img: require('../assets/hotnatives/img.png'),
          nativename: '陈立',
          nativedetail: '心理学家、美食家陈立教授'
        },
        {
          img: require('../assets/hotnatives/img_1.png'),
          nativename: '刘维-Julius',
          nativedetail: '歌手、播客节目《维维道来》主理人'
        },
        {
          img: require('../assets/hotnatives/img_2.png'),
          nativename: '莫非定律MoreFeel',
          nativedetail: '男女双人全创作独立乐团'
        },
        {
          img: require('../assets/hotnatives/img_3.png'),
          nativename: '碎嘴许美达',
          nativedetail: '脱口秀网络红人'
        },
        {
          img: require('../assets/hotnatives/img_4.png'),
          nativename: '银临Rachel',
          nativedetail: '古风音乐人'
        }
      ],
      defultsongers: [
        {
          img: require('../assets/defultsinger/img.png'),
          songername: '张惠妹aMEI',
          songerdetail: '台湾歌手张惠妹'
        },
        {
          img: require('../assets/defultsinger/img_1.png'),
          songername: 'Fine乐团',
          songerdetail: '独立音乐人'
        },
        {
          img: require('../assets/defultsinger/img_2.png'),
          songername: '萬曉利',
          songerdetail: '民谣歌手、中国现代民谣的代表人物之一'
        },
        {
          img: require('../assets/defultsinger/img_3.png'),
          songername: '音乐人赵雷',
          songerdetail: '民谣歌手'
        },
        {
          img: require('../assets/defultsinger/img_4.png'),
          songername: '王三溥',
          songerdetail: '音乐人'
        }
      ],
      imgs: [],
      djprogram_name: [],
      djprogram_picUrl: [],
      djprogram_adjustedPlayCount: [],
      personalized_name: [],
      personalized_picUrl: [],
      personalized_playCount: [],
      newalbum1show: true,
      newalbum2show: false,
      transitionname: '',
      clickable: true,
      // tophigh
      tophighname: '',
      tophighcoverImgUrl: '',
      tophightracksname: [],
      // topnew
      topnewname: '',
      topnewcoverImgUrl: '',
      topnewtracksname: [],
      // topcreate
      topcreatename: '',
      topcreatecoverImgUrl: '',
      topcreatetracksname: []
    }
  },
  created () {
    const that = this
    // const param = new URLSearchParams()
    // param.append('id', 32311)
    axios.interceptors.response.use(function (res) {
      return res
    }, function (error) {
      return Promise.reject(error)
    })
    this.$axios({
      method: 'get',
      url: '/homepage/block/page'
      // params: {
      //   refresh: true
      // }
    }).then(function (res) {
      for (var i = 0; i < 10; i++) {
        // console.log(res.blocks[0].extInfo.banners[i].pic)
        that.imgs.push(res.data.blocks[0].extInfo.banners[i].pic)
      }
    }).catch(function (err) {
      console.log(err)
    })
    // 请求djprogram    picUrl name adjustedPlayCount 10w以上显示xxxw
    this.$axios({
      method: 'get',
      url: 'personalized/djprogram'
      // params: {}
    }).then((res) => {
      for (var key = 0; key < 3; key++) {
        // console.log(res)
        // djprogram_name: [],
        //   djprogram_picUrl: [],
        //   djprogram_adjustedPlayCount: [],
        that.djprogram_name.push(res.result[key].name)
        that.djprogram_picUrl.push(res.result[key].picUrl)
        that.djprogram_adjustedPlayCount.push(res.result[key].program.adjustedPlayCount)
        // console.log(res.result[key].name)
        // console.log(res.result[key].picUrl)
        // console.log(res.result[key].program.adjustedPlayCount)
      }
    }).catch((err) => {
      console.log(err)
    })
    // 请求personalized name picUrl playCount
    this.$axios({
      method: 'get',
      url: 'personalized',
      params: {
        limit: 5
      }
    }).then((res) => {
      for (var key = 0; key < 5; key++) {
        // console.log(res.result[0].name)
        // console.log(res.result[0].picUrl)
        // console.log(res.result[0].playCount)
        that.personalized_name.push(res.result[key].name)
        that.personalized_picUrl.push(res.result[key].picUrl)
        that.personalized_playCount.push(res.result[key].playCount)
      }
    }).catch((err) => {
      console.log(err)
    })
    // axios发送album请求后五数据
    this.$axios({
      method: 'get',
      url: '/top/album',
      params: {
        type: 'hot'
      }
    }).then((res) => {
      // console.log(res)
      for (let i = 0; i < 10; i++) {
        this.$store.commit('imgurlsput', res.weekData[i].blurPicUrl)
        this.$store.commit('artinameput', res.weekData[i].artists[0].name)
        this.$store.commit('albumnameput', res.weekData[i].name)
        // console.log(res[i])
        // that.imgurls.push()
        // that.artiname.push(res[i].weekData.artists[0].name)
        // that.albumname.push(res[i].weekData.name)
        // console.log(res[i].blurPicUrl)
        // console.log(res[i].artists[0].name)
        // that.imgs.push(res.data)
      }
    }).catch(function (err) {
      console.log(err)
    })
    // 请求飙升榜
    this.$axios({
      method: 'get',
      params: {
        id: '19723756'
      },
      url: '/playlist/detail'
    }).then((res) => {
      this.tophighname = res.playlist.name
      this.tophighcoverImgUrl = res.playlist.coverImgUrl
      for (let i = 0; i < 10; i++) {
        this.tophightracksname.push(res.playlist.tracks[i].name)
      }
    }).catch((err) => {
      console.log(err)
    })
    // // 请求新歌榜
    this.$axios({
      method: 'get',
      params: {
        id: '3779629'
      },
      url: '/playlist/detail'
    }).then((res) => {
      this.topnewname = res.playlist.name
      this.topnewcoverImgUrl = res.playlist.coverImgUrl
      for (let i = 0; i < 10; i++) {
        this.topnewtracksname.push(res.playlist.tracks[i].name)
      }
    }).catch((err) => {
      console.log(err)
    })
    // // 请求原创榜
    this.$axios({
      method: 'get',
      params: {
        id: '2884035'
      },
      url: '/playlist/detail'
    }).then((res) => {
      this.topcreatename = res.playlist.name
      this.topcreatecoverImgUrl = res.playlist.coverImgUrl
      for (let i = 0; i < 10; i++) {
        this.topcreatetracksname.push(res.playlist.tracks[i].name)
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  filters: {
    numberfilter: function (num) {
      if (num > 99999) {
        const result = parseInt(num / 10000).toString()
        // console.log(result)
        return result + '万'
      } else {
        return num
      }
    }
  },
  methods: {
    albumright: function () {
      // console.log('right')
      this.clickable = false
      this.transitionname = 'slide-back'
      this.newalbum1show = !this.newalbum1show
      this.newalbum2show = !this.newalbum2show
      setTimeout(() => {
        this.clickable = true
      }, 1000)
    },
    albumleft: function () {
      // console.log('left')
      this.clickable = false
      this.transitionname = 'slide-forward'
      this.newalbum1show = !this.newalbum1show
      this.newalbum2show = !this.newalbum2show
      setTimeout(() => {
        this.clickable = true
      }, 1000)
    },
    scrollToTop () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      if (scrollTop > 60) {
        that.backtopFlag = true
      } else {
        that.backtopFlag = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style scoped>
/*右滑*/
.slide-forward-enter {
  transform: translate(-100%);
}

.slide-forward-enter-active {
  transition: all 1s ease-in-out;
}

.slide-forward-leave-active {
  transform: translate(100%);
  transition: all 1s ease-in-out;
}

/*!*左滑*!*/
.slide-back-enter {
  transform: translate(100%);
}

.slide-back-enter-active {
  transition: all 1s ease-in-out;
}

.slide-back-leave-active {
  transform: translate(-100%);
  transition: all 1s ease-in-out;
}

.newalbum {
  position: absolute;
  left: 15px;
  top: 0;
}

i {
  font-style: normal;
}

#defultdiv {
}

#defultol li {
  height: 8px;
  width: 8px;
  border-radius: 50%;
}

#carouselExampleIndicators img {
  height: 285px;
}

#prevbutton {
  left: 63px;
}

#nextbutton {
  left: -48px;
}

#prevbutton span {
  font-size: 50px;
  font-weight: lighter;
}

#nextbutton span {
  font-size: 50px;
}

#carouselExampleFade img {
  filter: blur(10px);
}

.userlogin {
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
  font-size: 12px;
  margin: 30px 75px;
  width: 100px;
  height: 30px;
  display: block;
  background: url("../assets/xuebitu.png") no-repeat 0 -195px;
}

.mainbartop {
  list-style: none;
  text-align: left;
  padding: 0;
  margin-bottom: 0;
  color: #CCCCCC;
  /*line-height: 30px;*/
}

.bara {
  position: relative;
  font-size: 20px;
  color: black;
  text-decoration: none;
  padding-right: 0;
  text-align: right;
}

.bara:before {
  content: "";
  position: absolute;
  height: 1rem;
  width: 1rem;
  /*border: 1px solid red;*/
  left: 5px;
  top: 7px;
  transform: scale(1.1);
  background: url("../assets/xuebitu.png") no-repeat -235px -163px;
}

.mainbartop li {
  display: inline-block;
}

.mainbartop li a {
  color: #666666;
  display: inline-block;
  margin: 0 15px;
  line-height: 2rem;
  font-size: 12px;
  text-decoration: none;
}

.mainbartop li a:hover {
  text-decoration: underline;
}

.morea {
  position: relative;
  font-size: 12px;
  color: #666666;
  text-decoration: none;
  line-height: 2rem;
  padding-left: 0;
  text-align: left;
}

.morea:after {
  content: '';
  position: absolute;
  right: 15px;
  top: 12px;
  height: 12px;
  width: 12px;
  background: url("../assets/xuebitu.png") no-repeat 0 -240px;
}

.morea:hover {
  text-decoration: underline;
}

.maincontent {
  text-align: left;
  padding: 0;
}

.maincontent li {
  vertical-align: middle;
  height: 140px;
  width: 140px;
  list-style: none;
  display: inline-block;
  text-align: left;
  margin-top: 20px;
  margin-right: 18px;
  margin-bottom: 70px;
}

.maincontent li > div {
  position: relative;
  background: url("../assets/coverall.png") no-repeat 0 0;
  width: 100%;
}

.maincontent li > div > i {
  background: url("../assets/coverall.png") no-repeat 0 -537px;
  padding-left: 10px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 27px;
  color: #CCCCCC;
  line-height: 27px;
  font-size: 14px;
  /*display: inline-block;*/
  position: absolute;
}

.maincontent li > div > i:before {
  margin-right: 5px;
}

.maincontent li img {
  z-index: -1;
  position: relative;
  width: 100%;
}

.maincontent li span {
  display: -webkit-box !important;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
  display: inline-block;
  /*max-height: 57px;*/
  font-size: 14px;
  color: #000000;
}

.maincontent li:nth-child(4) span,
.maincontent li:nth-child(6) span,
.maincontent li:nth-child(8) span {
  text-indent: 2rem;
  position: relative;
}

.maincontent li:nth-child(4) span:before,
.maincontent li:nth-child(6) span:before,
.maincontent li:nth-child(8) span:before {
  /*text-indent: 2rem;*/
  left: -28px;
  top: -10px;
  text-indent: 0;
  content: "电台节目";
  text-align: center;
  font-weight: bold;
  font-size: 19px;
  color: red;
  transform: scale(0.35);
  position: absolute;
  border: 3px solid red;
  line-height: 40px;
  height: 40px;
  width: 85px;
}

.albumdiv {
  border: 1px solid #CCCCCC;
  margin-top: 20px;
  position: relative
}

.albumdiv > i {
  /*font-weight: 900;*/
  font-size: 14px;
}

.albumdiv > i:hover {
  cursor: pointer;
}

.albumdiv > i:nth-child(1) {
  padding: 0;
  height: 17px;
  width: 17px;
  position: absolute;
  left: 0;
  bottom: 50%;
}

.albumdiv > i:nth-child(2) {
  padding: 0;
  height: 17px;
  width: 17px;
  position: absolute;
  right: 0;
  bottom: 50%;
}

dl {
  margin-bottom: 0;
}

dl dd {
  text-align: left;
  padding-left: 15px;
}

dl dt {
  position: relative;
  z-index: -2;
  background-color: rgb(244, 244, 244);
}

dl dd:nth-child(odd) {
  background-color: rgb(244, 244, 244);
}

dl dd:nth-child(even) {
  background-color: rgb(232, 232, 232);
}

dl dd:nth-child(2) span:nth-child(1),
dl dd:nth-child(3) span:nth-child(1),
dl dd:nth-child(4) span:nth-child(1) {
  color: #c10d0c;
}

dl dd:nth-child(11) span {
  padding-left: 10px;
  padding-right: 5px;
}

dl dd:last-child {
  text-align: right;
  padding-right: 30px;
  color: #000000;
}

dl dd {
  font-size: 12px;
  margin: 0 auto;
  line-height: 2rem;
}

dl dd a {
  /*line-height: 32px;*/
  display: inline-block;
  width: 80%;
  text-decoration: none;
  color: #000000;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: top;
}

dl dd a:hover {
  text-decoration: underline;
  width: 50%;
}

dl dd a:hover + span {
  display: inline-block !important;
}

dl dd span {
  display: inline-block;
  height: 100%;
  padding-left: 15px;
  padding-right: 10px;
  font-size: 16px;
  color: #666666;
}

dt img {
  position: relative;
  z-index: -1;
  height: 80px;
  width: 80px;
  float: left;
  /*mask: url("../assets/coverall.png") no-repeat -145px -57px ;*/
  /*mask-mode: alpha;*/
  /*style="background: url('../assets/coverall.png') no-repeat -145px -57px;position: relative"*/
}

.markimg {
  float: left;
  height: 80px;
  width: 80px;
  background: url('../assets/coverall.png') no-repeat -145px -57px;
  position: relative
}

.tophigh {
  padding-left: 19px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.tophigh span {
  position: relative;
  padding-left: 10px;
  padding-top: 10px;
  float: left;
  color: #333333;
  font-size: 14px;
}

.tophigh span:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 22px;
  bottom: -30px;
  left: 10px;
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z' clip-rule='evenodd'/></svg>");
  background-repeat: no-repeat;
  background-size: 20px 20px;
}

.tophigh span:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 22px;
  bottom: -30px;
  left: 40px;
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z' clip-rule='evenodd'/></svg>");
  background-repeat: no-repeat;
  background-size: 20px 20px;
}

.singers {
  margin-top: 15px;
}

.singers > div {
  position: relative;
  margin: 0 20px;
  border-bottom: 1px solid rgb(204, 204, 204);
}

.singers > div > span {
  font-size: 12px;
  color: #333333;
  font-weight: bolder;
}

.singers > div > a:hover {
  text-decoration: underline;
}

.singers > div > a {
  position: absolute;
  font-size: 12px;
  color: #666666;
  right: 0;
  text-decoration: none;
}

.singers ul li {
  margin-top: 14px;

}

.singers ul {
  list-style: none;
  margin-top: 6px;
  margin-left: 20px;
  padding-left: 0;
}

.singerdetaildiv:hover {
  background-color: rgb(244, 244, 244);
}

.singerdetaildiv {
  padding-left: 14px;
  display: inline-block;
  height: 62px;
  width: 65%;
  vertical-align: top;
  border: 1px solid rgb(233, 233, 233);
  background-color: rgb(250, 250, 250)
}

.singerdetaildiv > div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.singerbutton {
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bolder;
  padding: 5px 0;
  color: black;
  background-color: rgb(246, 246, 246);
  border: 1px solid rgb(196, 196, 196);
}

.singerbutton:hover {
  background-color: rgb(255, 255, 255);
}

.nativerdetaildiv {
  font-size: 12px;
  padding-left: 12px;
  display: inline-block;
  height: 40px;
  width: 65%;
  vertical-align: top;
}

.nativerdetaildiv > div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.backtop {
  z-index: 1;
  color: #333333;
  text-decoration: none;
  float: right;
  display: inline-block;
  width: 49px;
  height: 44px;
  position: fixed;
  top: 780px;
  right: 450px;
  border: 1px solid rgb(212, 212, 212);
  font-size: 12px;
  border-radius: 5px;
  background-color: rgb(237, 237, 237);
}
</style>

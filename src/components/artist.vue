<template>
  <div>
    <div style="position: relative;" class="clearfix">
      <div class="container" style="position:absolute;left: 13%;">
        <div class="row">
          <div class="col-lg-9 offset-2" style="padding: 0;">
            <div class="row"
                 style="border-left: 1px solid rgb(211, 211, 211);border-right: 1px solid rgb(211, 211, 211)">
              <!--  页面框架-->
              <!--              左边-->
              <div class="aside col-lg-2">
                <!--                  推荐-->
                <div>
                  <h6
                    style="font-weight: bolder;padding-left: 15px;font-family: 'Microsoft YaHei',sans-serif;color: #333333;margin-top: 50px">
                    推荐</h6>
                  <ul style="margin-bottom: 10px;padding-left: 0 ">
                    <li :class="{'listyle': true,'listyleselect':parseInt(clickitem) === -1}"
                        @click="liclick(-1),changetoinvate(),changesearchbyname(-1)">
                      推荐歌手
                    </li>
                    <li :class="{'listyle': true,'listyleselect':parseInt(clickitem) === -2}"
                        @click="liclick(-2),changesignedstate(),changesearchbyname(-1)">
                      入驻歌手
                    </li>
                  </ul>
                </div>
                <!--                剩余area-->
                <div v-for="(item,index) in areatype" :key="'areatype'+index">
                  <h6
                    style="font-weight: bolder;padding:20px 0 0 15px;border-top: 1px solid rgb(211, 211, 211);font-family: 'Microsoft YaHei',sans-serif;color: #333333">
                    {{ item }}</h6>
                  <ul style="margin-bottom: 10px ;padding-left: 0">
                    <li :class="{'listyle': true,'listyleselect': clickitem === item+0}"
                        @click="liclick(item+0),changetoothers(item+'/1'),changesearchbyname(-1),changeotherhead(item+'男歌手')">
                      {{ item }}男歌手
                    </li>
                    <li :class="{'listyle': true,'listyleselect': clickitem === item+1}"
                        @click="liclick(item+1),changetoothers(item+'/2'),changesearchbyname(-1),changeotherhead(item+'女歌手')">
                      {{ item }}女歌手
                    </li>
                    <li :class="{'listyle': true,'listyleselect': clickitem === item+2}"
                        @click="liclick(item+2),changetoothers(item+'/3'),changesearchbyname(-1),changeotherhead(item+'组合/乐队')">
                      {{ item }}组合/乐队
                    </li>
                  </ul>
                </div>
              </div>
              <!--              中间-->
              <div class="main offset-1 col-lg-9">
                <div v-if="defultstate">
                  <!--                入驻歌手-->
                  <div class="row">
                    <div class="col-lg-11" style="text-align: left;border-bottom: 2px solid red;padding: 40px 0 0 0">
                                    <span
                                      style="color: #333333;font-family: 'Microsoft YaHei',sans-serif;font-size: 24px;margin-bottom: 10px">入驻歌手</span>
                      <a v-if="signedhold" href="#" @click="changesignedstate"
                         style="font-size: 12px;text-decoration: none;float: right;padding-top: 14px;color: #666666;font-family: Arial,Helvetica,sans-serif">更多
                        ></a>
                    </div>
                  </div>
                  <div v-if="signedhold" class="row">
                    <div :key="'artist'+count" v-for="(count,index) in 10" class="col-lg-2 "
                         style="text-align: left;padding: 20px 0 0 0;margin-right: 15px">
                      <div v-if="signedlist[index]" class="artistbackgrounddiv">
                        <img
                          style="height: 130px;width: 130px;backface-visibility: hidden;position:relative;z-index: -1"
                          :src="signedlist[index].img1v1Url"
                          alt="">
                      </div>
                      <div v-if="signedlist[index]">
                        <span class="signedname">{{ signedlist[index].name }}</span>
                        <span class="signed"></span>
                      </div>
                    </div>

                  </div>
                  <div v-if="!signedhold" class="row">
                    <div :key="'allartist'+index" v-for="(item,index) in signedlist" class="col-lg-2 "
                         style="text-align: left;padding: 20px 0 0 0;margin-right: 15px">
                      <div v-if="signedlist[index]" class="artistbackgrounddiv">
                        <img
                          style="height: 130px;width: 130px;backface-visibility: hidden;position:relative;z-index: -1"
                          :src="item.img1v1Url"
                          alt="">
                      </div>
                      <div v-if="signedlist[index]">
                        <span class="signedname">{{ item.name }}</span>
                        <span class="signed"></span>
                      </div>
                    </div>

                  </div>
                  <!--                热门歌手-->
                  <div v-if="signedhold" class="row">
                    <div class="col-lg-11" style="text-align: left;border-bottom: 2px solid red;padding: 20px 0 0 0">
                                    <span
                                      style="color: #333333;font-family: 'Microsoft YaHei',sans-serif;font-size: 24px;margin-bottom: 10px">热门歌手</span>
                    </div>
                  </div>
                  <div v-if="signedhold" class="row">
                    <!--                  前十-->
                    <div :key="'hotartist'+index" v-for="(count,index) in 10" class="col-lg-2 "
                         style="text-align: left;padding: 20px 0 0 0;margin-right: 15px">
                      <div v-if="hotsingerlist[index]" class="artistbackgrounddiv">
                        <img
                          style="height: 130px;width: 130px;backface-visibility: hidden;position:relative;z-index: -1"
                          :src="hotsingerlist[index].img1v1Url"
                          alt="">
                      </div>
                      <div v-if="hotsingerlist[index]">
                        <span class="signedname">{{ hotsingerlist[index].name }}</span>
                        <span v-if="'accountId' in hotsingerlist[index]" class="signed"></span>
                      </div>
                    </div>
                    <!--其他-->
                    <div style="border-top: 1px dotted #999;margin-top: 20px;padding: 10px 0 50px 0" class="col-lg-11">
                      <div class="row" style="margin-left: 20px">
                        <div style="margin-right: 20px;padding: 0" v-for="(item,index) in hotsingerlist"
                             :key="'otherartist'+index"
                             class="col-lg-2">
                          <div v-if="hotsingerlist[index] && index>9">
                                          <span class="othersignedname">
                                            {{ item.name }}
                                            <span v-if="item.accountId !==null" class="othersigned"></span>
                                          </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--                歌手分类-->
                <div v-if="searchstate" class="row">
                  <div class="col-lg-11" style="text-align: left;border-bottom: 2px solid red;padding: 20px 0 0 0">
                    <span
                      style="color: #333333;font-family: 'Microsoft YaHei',sans-serif;font-size: 24px;margin-bottom: 10px">{{ otherhead }}</span>
                  </div>
                </div>
                <div v-if="searchstate" class="row">
                  <!--                  名称查找-->
                  <div class="row" style="margin: 20px 0 0 0;padding: 0;color: #333333">
                    <div class="col-lg-11">
                      <div class="row">
                        <span style="padding: 0;font-size: 12px;text-align: center;line-height: 21px;cursor: pointer"
                              :class="{'col-lg-1':true, 'search':parseInt(searchindex)===-1}"
                              @click="changesearchindex(-1),changesearchbyname(-1)">热门</span>
                        <span style="padding: 0;font-size: 14px" class="col-lg-10">
                          <span style="display: inline-block;padding:0 6.4px;line-height: 21px;cursor: pointer"
                                v-for="(item,index) in searchfirst" :key="'searchfirst'+index"
                                :class="{'search':parseInt(searchindex)===index}"
                                @click="changesearchindex(index),changesearchbyname(item.toLowerCase())">{{
                              item
                            }}</span>
                        </span>
                        <span style="padding: 0;font-size: 12px;text-align: center;line-height: 21px;cursor: pointer"
                              :class="{'col-lg-1':true, 'search':parseInt(searchindex)===-2}"
                              @click="changesearchindex(-2),changesearchbyname(0)">其他</span>
                      </div>
                    </div>
                  </div>
                  <!--                  前十-->
                  <div :key="'hotartist'+index" v-for="(count,index) in 10" class="col-lg-2 "
                       style="text-align: left;padding: 20px 0 0 0;margin-right: 15px">
                    <div v-if="eachsingerlist[index]" class="artistbackgrounddiv">
                      <img
                        style="height: 130px;width: 130px;backface-visibility: hidden;position:relative;z-index: -1"
                        :src="eachsingerlist[index].img1v1Url"
                        alt="">
                    </div>
                    <div v-if="eachsingerlist[index]">
                      <span class="signedname">{{ eachsingerlist[index].name }}</span>
                      <span v-if="'accountId' in eachsingerlist[index]" class="signed"></span>
                    </div>
                  </div>
                  <!--其他-->
                  <div style="border-top: 1px dotted #999;margin-top: 20px;padding: 10px 0 50px 0" class="col-lg-11">
                    <div class="row" style="margin-left: 20px">
                      <div style="margin-right: 20px;padding: 0" v-for="(item,index) in eachsingerlist"
                           :key="'othereachartist'+index"
                           class="col-lg-2">
                        <div v-if="eachsingerlist[index] && index>9">
                          <span class="othersignedname">
                            {{ item.name }}
                            <span v-if="'accountId' in item" class="othersigned"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a v-show="backtopFlag" class="backtop" title="回到顶部" href="#TOP">
                <div class="bi-chevron-compact-up" style="padding: 0"></div>
                TOP
              </a>
            </div>
          </div>
        </div>
        <HomeBottom style="position: relative;width: 1920px;margin-left: -276px"></HomeBottom> <!--        放在于row平级-->
      </div>
    </div>
  </div>
</template>

<script>
import HomeBottom from '@/components/HomeBottom'

export default {
  name: 'artist',
  components: {
    HomeBottom
  },
  data: function () {
    return {
      areatype: ['华语', '欧美', '日本', '韩国', '其他'],
      clickitem: '-1',
      signedoffset: 100,
      signedlist: [],
      hotsingerlist: [],
      eachsingerlist: [],
      backtopFlag: false,
      signedhold: true,
      searchfirst: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ],
      searchindex: -1,
      searchstate: false,
      defultstate: true,
      otherarea: null,
      searchbyname: -1,
      outstr1: '',
      outstr2: '',
      otherhead: ''
    }
  },
  methods: {
    liclick (index) {
      // console.log(index)
      this.clickitem = index
      this.outstr2 = -1
      this.searchindex = -1
    },
    // 获取入驻歌手
    getsigned () {
      this.$axios({
        method: 'get',
        url: 'artist/list',
        params: {
          limit: 100,
          offset: this.signedoffset
        }
      }).then((res) => {
        res.artists.forEach((item) => {
          if ('accountId' in item) {
            this.signedlist.push(item)
          }
        })
        // console.log(res.artists)
      }).catch((err) => {
        console.log(err)
      })
    },
    // 获取热门歌手
    gethotsingers () {
      this.$axios({
        method: 'get',
        url: 'top/artists',
        params: {
          limit: 100
        }
      }).then((res) => {
        // console.log(res)
        this.hotsingerlist = res.artists
      }).catch((err) => {
        console.log(err)
      })
    },
    // 获取分类歌手
    geteachsingers (str1, str2) {
      switch (str1) {
        case '华语':
          this.otherarea = 7
          break
        case '欧美':
          this.otherarea = 96
          break
        case '日本':
          this.otherarea = 8
          break
        case '韩国':
          this.otherarea = 16
          break
        case '其他':
          this.otherarea = 0
          break
      }
      this.outstr1 = str1
      this.outstr2 = str2
      this.$axios({
        method: 'get',
        url: 'artist/list',
        params: {
          type: str2,
          area: this.otherarea,
          initial: this.searchbyname,
          limit: 100
        }
      }).then((res) => {
        // console.log(res)
        this.eachsingerlist = res.artists
      }).catch((err) => {
        console.log(err)
      })
    },
    changesearchbyname (name) {
      // console.log(name)
      this.searchbyname = name
      this.geteachsingers(this.outstr1, this.outstr2)
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
    },
    changesignedstate () {
      this.defultstate = true
      this.signedhold = false
      this.searchstate = false
      this.clickitem = -2
    },
    changetoinvate () {
      this.defultstate = true
      this.signedhold = true
      this.searchstate = false
    },
    changesearchindex (index) {
      this.searchindex = index
    },
    changetoothers (state) {
      this.defultstate = false
      this.searchstate = true
      // console.log(state.toString().split('/'))
      const str1 = state.toString().split('/')[0]
      const str2 = state.toString().split('/')[1]
      this.geteachsingers(str1, str2)
    },
    changeotherhead (name) {
      this.otherhead = name
    }
  },
  created () {
    this.getsigned()
    this.signedoffset = 200
    this.getsigned()
    this.gethotsingers()
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
ul {
  list-style: none;
}

.aside {
  text-align: left;
  border-right: 1px solid rgb(211, 211, 211);
}

.main {
  text-align: left;
}

.listyle {
  background: url("../assets/singer.png") no-repeat 0 -30px;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 30px;
  font-size: 12px;
  color: #333333;
  line-height: 29px;
}

.listyle:hover {
  cursor: pointer;
  text-decoration: underline;
}

.listyleselect {
  text-decoration: none !important;
  background: url("../assets/singer.png") no-repeat 0 0;
  border-right: 1px solid rgb(220, 220, 220);
  color: red;
}

.artistbackgrounddiv {
  display: inline-block;
  background: url("../assets/coverall.png") no-repeat 0 -680px;
}

.signedname {
  padding-top: 5px;
  display: inline-block;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000000;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}

.signed {
  margin-top: 5px;
  float: right;
  display: inline-block;
  height: 18px;
  width: 18px;
  background: url("../assets/icon.png") no-repeat 0 -740px;
}

.othersigned {
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  width: 18px;
  background: url("../assets/icon.png") no-repeat 0 -740px;
}

.othersignedname {
  padding-top: 5px;
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000000;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
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
  right: 375px;
  border: 1px solid rgb(212, 212, 212);
  font-size: 12px;
  border-radius: 5px;
  background-color: rgb(237, 237, 237);
}

.search {
  background: #c20c0c;
  border: 2px;
  color: #fff !important;
}
</style>

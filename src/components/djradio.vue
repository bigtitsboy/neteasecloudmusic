<template>
  <div>
    <div style="position: relative;" class="clearfix">
      <div class="container" style="position:absolute;left: 13%;">
        <div class="row">
          <div class="col-lg-9 offset-2" style="padding: 0;">
            <div class="row"
                 style="border-left: 1px solid rgb(211, 211, 211);border-right: 1px solid rgb(211, 211, 211)">
              <!--  页面框架-->
              <!--              电台 - 分类-->
              <div class="col-lg-12" style="position: relative">
                <Dj1 v-if="djlistpage === 1"></Dj1>
                <Dj2 v-if="djlistpage === 2"></Dj2>
                <span class="carousel-control-prev" role="button" data-bs-slide="prev" style="left: -50px">
                  <span class="bi-chevron-left" aria-hidden="true"
                        style="color: rgb(192, 192, 192);font-size: 30px" @click="changedjlistpage(1)"></span>
                  <span class="visually-hidden">Previous</span>
                </span>
                <span class="carousel-control-next" role="button" data-bs-slide="next" style="right: -50px">
                  <span class="bi-chevron-right" aria-hidden="true"
                        style="color: rgb(192, 192, 192);font-size: 30px" @click="changedjlistpage(2)"></span>
                  <span class="visually-hidden">Next</span>
                </span>
                <div style="margin-top: -20px">
                  <span @click="changedjlistpage(1)"
                        :class="{'sidespan':true,'sidespanselect':djlistpage === 1}"></span>
                  <span @click="changedjlistpage(2)"
                        :class="{'sidespan':true,'sidespanselect':djlistpage === 2}"></span>
                </div>
              </div>
              <!--              推荐节目-->
              <div class="col-lg-6" style="padding:  0 25px 0 50px">
                <!--                head-->
                <div style="text-align: left;position: relative;border-bottom: 2px solid red;padding-bottom: 10px">
                  <h4
                    style="display: inline-block;margin: 0;color: #333333;font-family: 'Microsoft YaHei',Arial,Helvetica,sans-serif">
                    推荐节目</h4>
                  <span
                    style="position: absolute;bottom: 10px;right: 0;color: #666666;font-size: 12px;font-family: Arial,Helvetica,sans-serif">更多></span>
                </div>
                <!--                body-->
                <ul>
                  <li class="djrecommendli clearfix" v-for="(item,index) in djrecommend[0]" :key="'djrecommend'+index">
                    <span class="djrecommendimgspan">
                       <img style="height: 40px;width: 40px;"
                            :src="item.coverUrl" alt="">
                    </span>
                    <div class="djrecommenddiv">
                      <div class="djrecommendmainSongname">{{ item.mainSong.name }}</div>
                      <div class="djrecommendradioname">{{ item.radio.name }}</div>
                    </div>
                    <span class="djrecommendcategory">{{ item.radio.category }}</span>
                  </li>
                </ul>
              </div>
              <!--              节目排行榜-->
              <div class="col-lg-6" style="padding:  0 25px 0 50px">
                <!--                head-->
                <div style="text-align: left;position: relative;border-bottom: 2px solid red;padding-bottom: 10px">
                  <h4
                    style="display: inline-block;margin: 0;color: #333333;font-family: 'Microsoft YaHei',Arial,Helvetica,sans-serif">
                    推荐节目</h4>
                  <span
                    style="position: absolute;bottom: 10px;right: 0;color: #666666;font-size: 12px;font-family: Arial,Helvetica,sans-serif">更多></span>
                </div>
                <!--                body-->
                <ul>
                  <li class="djrecommendli djhotli clearfix" v-for="(item,index) in djprogram[0]"
                      :key="'djprogram'+index">
                    <span
                      style="float: left;position: relative;display: inline-block;width: 27px;height: 41px;margin-left: -20px">
                      <span class="topnumb">{{
                          index + 1 | completion
                        }}</span>
                      <span class="topstate">
                        <img v-if="item.lastRank === -1" :src="require('../assets/NEW.png')" alt="">
                        <span style="width: 40px;display: inline-block" v-if="item.lastRank - item.rank >0">
                          <img :src="require('../assets/up.png')" alt="">
                          <span
                            style="font-size: 10px;margin-left: 2px;color: #ba2226">{{
                              Math.abs(item.lastRank - item.rank)
                            }}</span>
                        </span>
                        <span style="width: 40px;display: inline-block" v-if="item.lastRank - item.rank <0">
                          <img :src="require('../assets/down.png')" alt="">
                          <span
                            style="font-size: 10px;margin-left: 2px;color:#4abbeb;">{{
                              Math.abs(item.lastRank - item.rank)
                            }}</span>
                        </span>
                      </span>
                    </span>
                    <span class="djrecommendimgspan" style="margin-left: 20px">
                       <img style="height: 40px;width: 40px;"
                            :src="item.program.coverUrl" alt="">
                    </span>
                    <div class="djprogramdiv">
                      <div class="djrecommendmainSongname">{{ item.program.mainSong.name }}</div>
                      <div class="djrecommendradioname">{{ item.program.radio.name }}</div>
                    </div>
                    <span class="ProgressBar">
                      <span class="ProgressBarDetail" :style="{'width': (item.score/maxscore *100 -5)+'px' }">
                      </span>
                      <i class="ProgressBarDetaili"></i>
                    </span>
                  </li>
                </ul>
              </div>
              <!--                其他电台-->
              <div :key="'recommendshead'+index" v-for="(item,index) in recommends" class="col-lg-12"
                   style="padding-left: 50px;text-align: left;margin-top: 40px;position: relative">
                <div style="border-bottom: 2px solid red;padding-bottom: 10px">
                  <h4 style="margin: 0;font-family: 'Microsoft YaHei',Arial,Helvetica,sans-serif;color: #333333">
                    {{ item.name }} ·
                    电台</h4>
                  <span
                    style="position: absolute;font-size: 14px;right: 25px;top: 10px;font-family:Arial,Helvetica,sans-serif;color: #666666">更多></span>
                </div>
                <div class="row clearfix">
                  <div class="col-lg-6" style="margin:20px 0 0 0" v-for="(son,index) in item.arrys"
                       :key="'sonarrys'+index">
                    <div class="clearfix"
                         :style="{borderBottom:[index<2?'1px solid rgb(231, 231, 231)':''],padding:'0 0 20px 0'}">
                      <img style="height: 120px;width: 120px;float: left" :src="son.picUrl" alt="">
                      <div style="float: left;margin-top:20px;width: 70%">
                        <div
                          style="font-weight: bolder;font-size: 18px;color: #333333;font-family: Arial,Helvetica,sans-serif;margin:0 0 0 20px;">
                          {{ son.name }}
                        </div>
                        <div
                          style="font-size: 12px;color: #999999;font-family: Arial,Helvetica,sans-serif;margin:20px 0 0 20px">
                          {{ son.rcmdtext }}
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
              <div style="margin-top: 60px"></div>
            </div>
            <HomeBottom style="position: relative;width: 1915px;margin-left: -480px"></HomeBottom>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dj1 from '@/components/Dj1'
import Dj2 from '@/components/Dj2'
import HomeBottom from '@/components/HomeBottom'

export default {
  name: 'djradio',
  components: {
    Dj2,
    Dj1,
    HomeBottom
  },
  data: function () {
    return {
      djlistpage: 1,
      djrecommend: [],
      djprogram: [],
      maxscore: '',
      recommends: [],
      backtopFlag: false
    }
  },
  filters: {
    completion (val) {
      return (Array(4).join(0) + parseInt(val)).slice(-2)
    }
  },
  methods: {
    changedjlistpage (num) {
      if (num === 1) {
        this.djlistpage = 1
      } else {
        this.djlistpage = 2
      }
    },
    // 推荐节目
    getrecommend () {
      this.$axios({
        method: 'get',
        url: 'program/recommend'
      }).then(res => {
        // console.log(res)
        this.djrecommend.push(res.programs)
      }).catch(err => {
        console.log(err)
      })
    },
    // 节目排行榜
    getdjprogram () {
      this.$axios({
        method: 'get',
        url: 'dj/program/toplist',
        params: {
          limit: 10
        }
      }).then(res => {
        // console.log(res)
        this.djprogram.push(res.toplist)
        this.maxscore = res.toplist[0].score
      }).catch(err => {
        console.log(err)
      })
    },
    // 详细节目
    getotherrecommends () {
      // 获取音乐推荐
      this.$axios({
        method: 'get',
        url: 'dj/recommend/type',
        params: {
          type: 2
        }
      }).then(res => {
        // console.log(res.djRadios)
        const result = res.djRadios.filter(item => item.category === '音乐推荐')
        // console.log(result.splice(0, 4))
        this.recommends.push({
          name: '音乐推荐',
          arrys: result.splice(0, 4)
        })
      }).catch(err => {
        console.log(err)
      })
      // 获取生活
      this.$axios({
        method: 'get',
        url: 'dj/recommend/type',
        params: {
          type: 6
        }
      }).then(res => {
        // console.log(res.djRadios)
        const result = res.djRadios.filter(item => item.category === '生活')
        // console.log(result.splice(0, 4))
        this.recommends.push({
          name: '生活',
          arrys: result.splice(0, 4)
        })
      }).catch(err => {
        console.log(err)
      })
      // 获取情感
      this.$axios({
        method: 'get',
        url: 'dj/recommend/type',
        params: {
          type: 3
        }
      }).then(res => {
        // console.log(res.djRadios)
        const result = res.djRadios.filter(item => item.category === '情感').splice(0, 4)
        // console.log(result)
        this.recommends.push({
          name: '情感',
          arrys: result.splice(0, 4)
        })
      }).catch(err => {
        console.log(err)
      })
      // 获取翻唱
      this.$axios({
        method: 'get',
        url: 'dj/recommend/type',
        params: {
          type: 2001
        }
      }).then(res => {
        // console.log(res.djRadios)
        const result = res.djRadios.filter(item => item.category === '创作翻唱')
        // console.log(result.splice(0, 4))
        this.recommends.push({
          name: '创作翻唱',
          arrys: result.splice(0, 4)
        })
      }).catch(err => {
        console.log(err)
      })
      // 获取知识
      this.$axios({
        method: 'get',
        url: 'http://localhost:3000/dj/radio/hot',
        params: {
          cateId: 11
        }
      }).then(res => {
        // console.log(res.djRadios)
        const result = res.djRadios.filter(item => item.category === '知识')
        // console.log(result.splice(0, 4))
        this.recommends.push({
          name: '知识',
          arrys: result.splice(0, 4)
        })
      }).catch(err => {
        console.log(err)
      })
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
  created () {
    this.getrecommend()
    this.getdjprogram()
    this.getotherrecommends()
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
  padding: 0px;
  border-left: 1px solid rgb(211, 211, 211);
  border-right: 1px solid rgb(211, 211, 211);
  border-bottom: 1px solid rgb(211, 211, 211);
  margin-bottom: 20px;
}

.sidespan {
  cursor: pointer;
  display: inline-block;
  height: 20px;
  width: 20px;
  background: url("../assets/radio_slide.png") no-repeat 0 0;
}

.sidespanselect {
  background: url("../assets/radio_slide.png") no-repeat -30px 0;
}

.djrecommendli:nth-child(even) {
  background: #f7f7f7;
}

.djrecommendli:nth-child(odd) {
  background: #fff;
}

.djrecommendli:hover {
  background: rgb(238, 238, 238);
}

.djrecommendli:hover:after {
  content: '';
  position: absolute;
  height: 22px;
  width: 22px;
  background: url("../assets/iconall.png") no-repeat 0 -85px;
  left: 28px;
  top: 20px;
}

.djrecommendli {
  padding: 10px 0 10px 20px;
  text-align: left;
  vertical-align: middle;
  position: relative;
}

.djrecommenddiv {
  display: inline-block;
  vertical-align: middle;
  width: 60%;
  margin-left: 10px;
}

.djrecommendmainSongname {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #333333;
}

.djrecommendradioname {
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #999999;
}

.djrecommendcategory {
  margin-left: 10px;
  padding: 0 6px;
  line-height: 18px;
  border: 1px solid #999999;
  display: inline-block;
  height: 18px;
  color: #999999;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}

.djrecommendimgspan {
  float: left;
}

.djprogramdiv {
  display: inline-block;
  vertical-align: middle;
  width: 50%;
  margin-left: 10px;
}

.ProgressBar {
  position: relative;
  margin-left: 10px;
  /*padding: 0 6px;*/
  /*border: 1px solid #999999;*/
  display: inline-block;
  /*vertical-align: center;*/
  height: 8px;
  width: 100px;
  background: url("../assets/table.png") no-repeat 0 -240px;
}

.ProgressBarDetail {
  float: left;
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
  display: inline-block;
  vertical-align: center;
  height: 100%;
  background: url("../assets/table.png") no-repeat 0 -304px;
}

.ProgressBarDetaili {
  margin-left: -1px;
  float: left;
  height: 8px;
  width: 5px;
  display: inline-block;
  /*background: red;*/
  background: url("../assets/table.png") no-repeat right -318px;
}

.topnumb {
  position: absolute;
  left: 50%;
  top: 18%;
  font-size: 14px;
  color: #999999;
  font-family: Arial, Helvetica, sans-serif;
}

.djrecommendli:nth-child(-n+3) .topnumb {
  color: rgb(222, 69, 69);
}

.djhotli:hover:after {
  content: '';
  position: absolute;
  height: 22px;
  width: 22px;
  background: url("../assets/iconall.png") no-repeat 0 -85px;
  left: 55px;
  top: 20px;
}

.topstate {
  position: absolute;
  top: 20px;
  left: 14px;
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
</style>

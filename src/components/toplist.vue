<template>
  <div>
    <div style="position: relative;" class="clearfix">
      <div class="container" style="position:absolute;left: 13%;">
        <div class="row">
          <div class="col-lg-9 offset-2" style="padding: 0;">
            <div class="row">
              <!--              左边-->
              <div class="aside col-lg-3">
                <!--                t1-->
                <div
                  style="font-weight: bolder;font-size: 14px;color: black;font-family: SimSun,'宋体',serif;margin-top: 40px;padding: 0 10px 12px 15px">
                  云音乐特色榜
                </div>
                <ul class="top1">
                  <li :ref="'top1-0'" style="background-color: rgb(230, 230, 230);position: relative"
                      @click.self="logid(top1[index].id,top1[index].update,$event)" v-for="(count,index) in 1"
                      :key="'top1'+count">
                    <img v-if="top1[index]" :src="top1[index].imgurl">
                    <div class="detailmsg" v-if="top1[index]">{{ top1[index].name }}</div>
                    <div class="detailmsg" v-if="top1[index]">{{ top1[index].update }}</div>
                  </li>
                  <li style="position: relative" :ref="'top1-'+count"
                      @click.self="logid(top1[index+1].id,top1[index+1].update,$event)"
                      v-for="(count,index) in 3"
                      :key="'top1'+count+1">
                    <img v-if="top1[index+1]" :src="top1[index+1].imgurl">
                    <div class="detailmsg" v-if="top1[index+1]">{{ top1[index + 1].name }}</div>
                    <div class="detailmsg" v-if="top1[index+1]">{{ top1[index + 1].update }}</div>
                  </li>
                </ul>
                <!--                t2-->
                <div
                  style="font-weight: bolder;font-size: 14px;color: black;font-family: SimSun,'宋体',serif;margin-top: 20px;padding: 0px 10px 12px 15px">
                  全球媒体榜
                </div>
                <ul class="top2">
                  <li style="position: relative" :ref="'top2-'+index"
                      @click.self="logid(top1[index+4].id,top1[index + 4].update,$event)"
                      v-for="(count,index) in 28"
                      :key="'top2'+count">
                    <img v-if="top1[index]" :src="top1[index+4].imgurl">
                    <div class="detailmsg" v-if="top1[index+4]">{{ top1[index + 4].name }}</div>
                    <div class="detailmsg" v-if="top1[index+4]">{{ top1[index + 4].update }}</div>
                  </li>
                </ul>
              </div>
              <!--              中间-->
              <div class="main col-lg-9">
                <div class="maintop">
                  <!--                  排行榜图片-->
                  <div class="outsideborder">
                    <img :src="coverImgUrl">
                  </div>
                  <div class="clearfix">
                    <div style="float: left;margin: 20px 0 0 25px;">
                      <div style="font-size: 20px;font-family: 'Microsoft YaHei',Arial,Helvetica,serif;color: #333333">
                        {{ name }}
                      </div>
                      <!--                    最近更新-->
                      <div
                        style="margin: 9px 0  20px 0;color: #999999;font-family: Arial,Helvetica,sans-serif,serif;font-size: 12px">
                        <i class="bi-clock" style="float: left;margin-right: 5px"></i>
                        <div style="color: #666666;display: inline-block">最近更新：{{ updateTime }}</div>
                        <span style="display: inline-block">（{{ updateFrequency }}）</span>
                      </div>
                      <!--                    button组-->
                      <div class="buttongroup">
                        <span>播放</span>
                        <span></span>
                        <span>({{ subscribedCount }})</span>
                        <span>({{ shareCount }})</span>
                        <span>下载</span>
                        <span>({{ commentCount }})</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!--                返回顶部-->
                <a v-show="backtopFlag" class="backtop" title="回到顶部" href="#TOP">
                  <div class="bi-chevron-compact-up" style="padding: 0"></div>
                  TOP
                </a>
                <!--                    播发数量和歌曲数量-->
                <div class="detailbar">
                  <span
                    style="color: #333333;font-size: 20px;font-family:'Microsoft YaHei',Arial,Helvetica,sans-serif ">歌曲列表</span>
                  <span
                    style="margin: 9px 0 0 20px;color: #666666;font-size:12px;font-family: Arial,Helvetica,sans-serif ">{{
                      privilegeslength
                    }}首歌</span>
                  <span
                    style="float: right;font-size: 12px;font-family: Arial,Helvetica,sans-serif;color: #c20c0c;margin: 5px 0 0 0 ;">{{
                      playCount
                    }}次</span>
                  <span
                    style="float: right;color: #666666;margin: 5px 0 0 0 ;font-size: 12px;font-family: Arial,Helvetica,sans-serif">播放：</span>
                </div>
                <!--                dl head-->
                <div
                  style="box-shadow: rgb(204, 204, 204) 0 1px;background-color: rgb(246, 246, 246);overflow: hidden; margin: 0 30px 0 40px;border-left: 1px solid rgb(233, 233, 233);border-right: 1px solid rgb(233, 233, 233);border-bottom: 1px solid rgb(233, 233, 233);">
                  <div class="row">
                    <div
                      style="padding: 8px 10px;color: #666666;font-size: 12px;font-family: Arial,Helvetica,sans-serif;border-right: 1px solid rgb(233, 233, 233);text-align: left"
                      class="col-lg-2"></div>
                    <div
                      style="padding: 8px 10px;color: #666666;font-size: 12px;font-family: Arial,Helvetica,sans-serif;border-right: 1px solid rgb(233, 233, 233);text-align: left"
                      class="col-lg-5">标题
                    </div>
                    <div
                      style="padding: 8px 10px;color: #666666;font-size: 12px;font-family: Arial,Helvetica,sans-serif;border-left: 1px solid rgb(233, 233, 233);text-align: left"
                      class="col-lg-2">时长
                    </div>
                    <div
                      style="padding: 8px 10px;color: #666666;font-size: 12px;font-family: Arial,Helvetica,sans-serif;border-left: 1px solid rgb(233, 233, 233);text-align: left"
                      class="col-lg-3">歌手
                    </div>
                  </div>
                </div>
                <!--                songsbar-->
                <dl class="detaildl" v-if="privilegeslength">
                  <!--                  前三-->
                  <dd v-for="(count,index) in 3" :key="'songsddtop'+index">
                    <div v-if="songs[index]" class="row" style="">
                      <div class="col-lg-2 detaildivtop" style="text-align: left;padding-left: 30px">
                        {{ count }}
                        <!--                        排行榜情况-->
                        <span class="state">
                          <img v-if=" !('lr' in trackIds[index])" :src="require('../assets/NEW.png')" alt="">
                          <img style="height: 8px;width: 6px;backface-visibility: hidden;margin-right: 0;"
                               v-if=" 'lr' in trackIds[index]&&trackIds[index].lr-index>0"
                               :src="require('../assets/up.png')"
                               alt="">
                          <img style="height: 8px;width: 6px;backface-visibility:hidden;margin-right: 0;"
                               v-if=" 'lr' in trackIds[index]&&trackIds[index].lr-index<0"
                               :src="require('../assets/down.png')"
                               alt="">
                          <img style="height: 4px;width: 7px;backface-visibility: hidden;margin-right: 0;"
                               v-if=" 'lr' in trackIds[index]&&trackIds[index].lr-index===0"
                               :src="require('../assets/nomarl.png')"
                               alt="">
                          <span style="color: #D33A31;margin-left: 3px;"
                                v-if="'lr' in trackIds[index]&&trackIds[index].lr-(index)!==0">{{
                              Math.abs(trackIds[index].lr - (index))
                            }}</span>
                          <span style="color: #999999;margin-left: 3px;"
                                v-if=" 'lr' in trackIds[index]&&trackIds[index].lr-(index)===0">{{
                              Math.abs(trackIds[index].lr - (index))
                            }}</span>
                        </span>
                      </div>
                      <div class="col-lg-5 detaildivtop" style="text-align: left">
                        <img :src="songs[index].al.picUrl" alt="">
                        <div class="dlname">
                          <i class="bi-play-circle"
                             style="font-size: 15px;margin-right: 5px;color: rgb(179, 179, 179)"></i>
                          <span style="font-family: Arial,Helvetica,sans-serif;color: #333333;font-size: 12px">
                              {{ songs[index].name }}</span>
                          <span style="font-family: Arial,Helvetica,sans-serif;color: #AEAEAE"
                                v-if="songs[index+3].alia[0]"> -{{ songs[index].alia[0] }}</span>
                          <span style="font-family: Arial,Helvetica,sans-serif;color: #AEAEAE"
                                v-if=" 'tns'in songs[index+3]"> -{{ songs[index].tns[0] }}</span>
                        </div>
                        <span v-if="songs[index].mv!=0" class="MV"></span>
                      </div>
                      <div class="col-lg-2 detaildivtop">
                        {{ songs[index].dt | date }}
                      </div>
                      <div class="col-lg-3 detaildivtop ars"
                           style="font-family: Arial,Helvetica,sans-serif;color: #333333;font-size: 12px">
                        {{ getars(index) }}
                      </div>
                    </div>
                  </dd>
                  <!--                  排行榜其他-->
                  <dd v-for="(count,index) in privilegeslength-3" :key="'songsdd'+index">
                    <div v-if="songs[index]" class="row" style="">
                      <div class="col-lg-2 detaildiv" style="text-align: left;">
                        {{ count + 3 }}
                        <span class="state">
                          <img v-if=" !('lr' in trackIds[index+3])" :src="require('../assets/NEW.png')" alt="">
                          <img style="height: 8px;width: 6px;backface-visibility: hidden;margin-right: 0;"
                               v-if=" 'lr' in trackIds[index+3]&&trackIds[index+3].lr-(index+3)>0"
                               :src="require('../assets/up.png')" alt="">
                          <img style="height: 8px;width: 6px;backface-visibility: hidden;margin-right: 0;"
                               v-if=" 'lr' in trackIds[index+3]&&trackIds[index+3].lr-(index+3)<0"
                               :src="require('../assets/down.png')" alt="">
                          <img style="height: 4px;width: 7px;backface-visibility: hidden;margin-right: 0;"
                               v-if=" 'lr' in trackIds[index+3]&&trackIds[index+3].lr-(index+3)===0"
                               :src="require('../assets/nomarl.png')" alt="">
                          <span style="color: #D33A31;margin-left: 3px;"
                                v-if="'lr' in trackIds[index+3]&&trackIds[index+3].lr-(index+3)!==0">{{
                              Math.abs(trackIds[index + 3].lr - (index + 3))
                            }}</span>
                          <span style="color: #999999;margin-left: 3px;"
                                v-if=" 'lr' in trackIds[index+3]&&trackIds[index+3].lr-(index+3)===0">{{
                              Math.abs(trackIds[index + 3].lr - (index + 3))
                            }}</span>
                        </span>
                      </div>
                      <div class="col-lg-5 detaildiv" style="text-align: left;padding-left: 10px">
                        <div class="dlname">
                          <i class="bi-play-circle"
                             style="font-size: 15px;margin-right: 5px;color: rgb(179, 179, 179)"></i>
                          <span style="font-family: Arial,Helvetica,sans-serif;color: #333333;font-size: 12px">
                            {{ songs[index + 3].name }}</span>
                          <span style="font-family: Arial,Helvetica,sans-serif;color: #AEAEAE"
                                v-if="songs[index+3].alia[0]"> -({{ songs[index + 3].alia[0] }})</span>
                          <span style="font-family: Arial,Helvetica,sans-serif;color: #AEAEAE"
                                v-if=" 'tns'in songs[index+3]"> -({{ songs[index + 3].tns[0] }})</span>
                        </div>
                        <span v-if="songs[index+ 3].mv!=0" class="MV"></span>
                      </div>
                      <div class="col-lg-2 detaildiv">
                        {{ songs[index + 3].dt | date }}
                      </div>
                      <div class="col-lg-3 detaildiv ars"
                           style="font-family: Arial,Helvetica,sans-serif;color: #333333;font-size: 12px">
                        {{ getars(index + 3) }}
                      </div>
                    </div>
                  </dd>
                </dl>
                <!--                评论区-->
                <div class="compomenttop">
                  <span
                    style="color: #333333;font-size: 20px;font-family:'Microsoft YaHei',Arial,Helvetica,sans-serif ">评论</span>
                  <span
                    style="margin: 9px 0 0 20px;color: #666666;font-size:12px;font-family: Arial,Helvetica,sans-serif ">共{{
                      commentCount
                    }}条评论</span>
                </div>
                <!--                  发表评论-->
                <div class="logcompoment">
                  <img style="height: 50px;width: 50px;float: left" :src="require('../assets/touxiang.png')" alt="">
                  <div class="logcompomentdetail">
                    <textarea class="inputcompoment" placeholder="评论"></textarea>
                  </div>
                  <div style="padding:10px 0 0 60px;position: relative">
                    <span class="iconspan"></span>
                    <span class="iconspan"></span>
                    <span
                      style="right: 25px;position: absolute;color: #999999;font-size: 12px;font-family: Arial,Helvetica,sans-serif;">
                      140
                      <span class="compomencommit">
                        评论
                      </span>
                    </span>
                  </div>
                </div>
                <!--                精彩评论bar-->
                <div v-if="parseInt(start) ===1" class="hotcompomentbar">
                  <span
                    style="color: #333333;font-weight: bolder;font-size: 12px;font-family:'Microsoft YaHei',Arial,Helvetica,sans-serif ">精彩评论</span>
                </div>
                <!--                热评-->
                <div v-if="parseInt(start) ===1">
                  <dl class="hotcompoments">
                    <dd v-for="(item,index) in hotcompoment" :key="'hotcompoment'+index"
                        class="clearfix hotcompomentsdd">
                      <!--                      头像-->
                      <img :src="item.user.avatarUrl" alt="">
                      <!--                      评论内容-->
                      <div style="white-space:pre-line;margin-left: 55px;color: #333333">
                        <span><a href="#"
                                 style="text-decoration: none;color: #0C73C2;">{{
                            item.user.nickname
                          }}  ：</a>
                        </span>
                        {{ item.content }}
                      </div>
                      <!--                      时间点赞-->
                      <div
                        style="position: relative;margin:10px 0 0 55px;font-family: Arial,Helvetica,sans-serif;font-size: 12px;color: #999999">
                        {{ item.time  | detaildate }}
                        <span style="position: absolute;right: 0;color: #333333">
                          <span class="dianzan"></span>
                          ({{ item.likedCount }})
                          <span style="margin:0 7px 0 5px">|</span>
                          <span style="color: #666666">回复</span>
                        </span>
                      </div>
                    </dd>
                    <!--                    <dd class="clearfix">-->
                    <!--                      <img :src="hotcompoment[1].user.avatarUrl" alt="">-->
                    <!--                    </dd>-->
                    <!--                    <dd class="clearfix">-->
                    <!--                      <img :src="hotcompoment[2].user.avatarUrl" alt="">-->
                    <!--                    </dd>-->
                  </dl>
                </div>
                <!--                最新评论bar-->
                <div class="newcompomentbar">
                  <span
                    style="color: #333333;font-weight: bolder;font-size: 12px;font-family:'Microsoft YaHei',Arial,Helvetica,sans-serif ">最新评论({{
                      commentCount
                    }})</span>
                </div>
                <!--                最新评论-->
                <div>
                  <dl class="hotcompoments">
                    <dd v-for="(item,index) in newcompoments" :key="'newcompoments'+index"
                        class="clearfix hotcompomentsdd">
                      <!--                      头像-->
                      <img :src="item.user.avatarUrl" alt="">
                      <!--                      评论内容-->
                      <div style="white-space:pre-line;margin-left: 55px;color: #333333">
                        <span><a href="#"
                                 style="text-decoration: none;color: #0C73C2;">{{
                            item.user.nickname
                          }}  ：</a>
                        </span>
                        {{ item.content }}
                      </div>
                      <!--                      时间点赞-->
                      <div
                        style="position: relative;margin:10px 0 0 55px;font-family: Arial,Helvetica,sans-serif;font-size: 12px;color: #999999">
                        {{ item.time  | detaildate }}
                        <span style="position: absolute;right: 0;color: #333333">
                          <span class="dianzan"></span>
                          ({{ item.likedCount }})
                          <span style="margin:0 7px 0 5px">|</span>
                          <span style="color: #666666">回复</span>
                        </span>
                      </div>
                    </dd>
                    <!--                    <dd class="clearfix">-->
                    <!--                      <img :src="hotcompoment[1].user.avatarUrl" alt="">-->
                    <!--                    </dd>-->
                    <!--                    <dd class="clearfix">-->
                    <!--                      <img :src="hotcompoment[2].user.avatarUrl" alt="">-->
                    <!--                    </dd>-->
                  </dl>
                </div>
                <!--                分页-->
                <span :class="{'pages':true,'pagesselect':start === parseInt(item)}" @click='changepage(item)'
                      v-for="(item, index) in pages" :key="'fy'+index">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <HomeBottom style="position: relative;width: 1920px;margin-left: -276px"></HomeBottom>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import HomeBottom from '@/components/HomeBottom'
// 回应拦截器
axios.interceptors.response.use(function (res) {
  return res.data
}, function (error) {
  return Promise.reject(error)
})
export default {
  name: 'toplist',
  components: {
    HomeBottom
  },
  data: function () {
    return {
      top1: [],
      id: '19723756',
      coverImgUrl: '',
      name: '',
      updateTime: '',
      // click传入
      updateFrequency: '',
      subscribedCount: '',
      shareCount: '',
      commentCount: '',
      privilegeslength: '', // 歌曲数
      playCount: '', // 播放数
      songs: [],
      trackIds: [],
      hotcompoment: [],
      start: 1,
      end: ' ',
      newcompoments: [],
      backtopFlag: false
    }
  },
  methods: {
    logid (id, updateFrequency, e) {
      for (const i in this.$refs) {
        this.$refs[i][0].style.backgroundColor = ''
        e.target.style.backgroundColor = ' rgb(230, 230, 230)'
        // console.log(this.$refs[i][0].style.backgroundColor)
      }
      // console.log(this.$refs)
      // console.log(e.target.parentNode)
      // e.target.parentNode.children.forEach(item => {
      //   item.style.backgroundColor = ''
      // })
      // e.target.style.backgroundColor = ' rgb(230, 230, 230)'
      // console.log(id)
      this.id = id
      this.updateFrequency = updateFrequency
      this.start = 1
      this.reaxios()
    },
    reaxios () {
      // 获取排行榜信息
      this.$axios({
        method: 'get',
        params: {
          id: this.id
        },
        url: 'playlist/detail'
      }).then((res) => {
        // 时间戳转换
        const splitarry = new Date(parseInt(res.playlist.updateTime)).toLocaleString().slice(0, 9).split('/')
        // console.log(new Date(parseInt(res.playlist.updateTime)).toLocaleString())
        this.coverImgUrl = res.playlist.coverImgUrl
        this.name = res.playlist.name
        this.updateTime = '0' + splitarry[1] + '月' + splitarry[2] + '日'
        // splitarry[1] + '月' + splitarry[2] + '日'
        this.subscribedCount = res.playlist.subscribedCount
        this.shareCount = res.playlist.shareCount
        this.commentCount = res.playlist.commentCount
        this.end = parseInt(res.playlist.commentCount / 20)
        this.privilegeslength = res.privileges.length
        this.playCount = res.playlist.playCount
        this.songs = res.playlist.tracks
        this.trackIds = res.playlist.trackIds
      }).catch((err) => {
        console.log(err)
      })
      // 获取热评
      this.$axios({
        method: 'get',
        url: 'comment/new',
        params: {
          id: this.id,
          type: 2,
          sortType: 2,
          pageSize: 15
        }
      }).then((res) => {
        this.hotcompoment = res.data.comments
        // console.log(res.data.comments)
      }).catch((err) => {
        console.log(err)
      })
      // 获取最新评论
      this.$axios({
        method: 'get',
        url: 'comment/playlist',
        params: {
          id: this.id,
          offset: parseInt((this.start - 1) * 20)
        }
      }).then((res) => {
        // console.log(res)
        this.newcompoments = res.comments
      }).catch((err) => {
        console.log(err)
      })
      // this.end = parseInt(this.commentCount / 20)
    },
    getars (index) {
      let str = ''
      const a = this.songs[index].ar.map(item => {
        return item.name
      })
      if (a.length > 1) {
        for (let i = 0; i < a.length; i++) {
          if (i === a.length - 1) {
            str = str + a[i]
          } else {
            str = str + a[i] + '/'
          }
        }
        return str
      } else {
        str = str + a[0]
        return str
      }
    },
    changepage (page) {
      this.start = page// start变更之后computed会自动重新计算，页面会重新渲染
      // 获取该页评论
      this.$axios({
        method: 'get',
        url: 'comment/playlist',
        params: {
          id: this.id,
          offset: parseInt((page - 1) * 20)
        }
      }).then((res) => {
        // console.log(res)
        this.newcompoments = res.comments
      }).catch((err) => {
        console.log(err)
      })
      // this.end = parseInt(this.commentCount / 20)
      // console.log(page);
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
  watch: {
    start: {
      handler (val, oldVal) {
        // console.log(val)
      }
    },
    deep: true,
    immediate: true
  },
  created () {
    this.start = 1
    // 请求榜单左侧粗略信息
    this.$axios({
      method: 'get',
      url: 'toplist'
      // params: {}
    }).then((res) => {
      for (let i = 0; i < res.list.length; i++) {
        const detailname = res.list[i].name
        const detailid = res.list[i].id
        const detailupdate = res.list[i].updateFrequency
        const detailimgurl = res.list[i].coverImgUrl
        this.top1.push(
          {
            name: detailname,
            id: detailid,
            update: detailupdate,
            imgurl: detailimgurl
          }
        )
        this.updateFrequency = this.top1[0].update
      }
      // console.log(res.list[0].name)
      // console.log(res.list[0].id)
      // console.log(res.list[0].updateFrequency)
      // console.log(res.list[0].coverImgUrl)
    }).catch((err) => {
      console.log(err)
    })
    // 初始化main区内容
    this.reaxios()
  },
  filters: {
    date: function (val) {
      const m = parseInt((val / 1000) / 60)
      const s = parseFloat('0.' + ((val / 1000) / 60).toString().split('.')[1]) * 60
      const min = (Array(4).join(0) + parseInt(m)).slice(-2).toString()
      const second = (Array(4).join(0) + parseInt(s)).slice(-2).toString()
      return min + ':' + second
    },
    detaildate: function (val) {
      const splitarry = new Date(parseInt(val)).toLocaleString().split(' ')[0]
      const result = splitarry.split('/')[0] + '年' + splitarry.split('/')[1] + '月' + splitarry.split('/')[2] + '日'
      // const m = parseInt((val / 1000) / 60)
      // const s = parseFloat('0.' + ((val / 1000) / 60).toString().split('.')[1]) * 60
      // const min = (Array(4).join(0) + parseInt(m)).slice(-2).toString()
      // const second = (Array(4).join(0) + parseInt(s)).slice(-2).toString()
      // return min + ':' + second
      return result
    }
  },
  computed: {
    // 使用计算属性返回
    pages () {
      if (this.end < 10) {
        return this.end
      }
      // 省略号的添加是分页大于10的时候
      if (this.start <= 5) { // 当前页码小于等于5
        return [1, 2, 3, 4, 5, 6, '...', this.end]
        // [1,2,3,4,5,6,'...',最后一页]
      } else if (this.start > this.end - 5) { // 当前页码大于等于最后一页-5
        return [1, '...', this.end - 5, this.end - 4, this.end - 3, this.end - 2, this.end - 1, this.end]
        // [1,'...',尾页-5,尾页-4,尾页-3,尾页-2,尾页-1,尾页]
      } else { // 当前页码大于5并且当前页码小于最后一页页码-5
        return [1, '...', this.start - 3, this.start - 2, this.start - 1, this.start, this.start + 1, this.start + 2, this.start + 3, '...', this.end]
        // [1,'...',当前页-3,当前页-2,当前页-1,当前页,当前页+1,当前页+2,当前页+3,'...',尾页]
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
.aside,
.main {
  padding: 0;
}

.main {
  border-right: 1px solid rgb(213, 213, 213);
  border-bottom: 1px solid rgb(213, 213, 213);
}

.aside {
  text-align: left;
  border-left: 1px solid rgb(213, 213, 213);
  border-right: 1px solid rgb(213, 213, 213);
  border-bottom: 1px solid rgb(213, 213, 213);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  height: 62px;
  width: 100%;
  padding: 10px 0 10px 20px;
  display: inline-block;
  vertical-align: middle;
}

ul li:hover {
  cursor: pointer;
  background-color: rgb(244, 242, 242);
}

ul li img {
  float: left;
  height: 40px;
  width: 40px;
  -webkit-backface-visibility: hidden; /* Chrome 和 Safari */
}

.detailmsg:nth-child(2) {
  color: #000000;
}

.detailmsg:nth-child(3) {
  left: 106px;
  margin-top: 20px;
  margin-left: -46px;
  color: #999999;
}

.detailmsg {
  position: absolute;
  display: inline-block;
  padding-left: 10px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}

.maintop {
  padding: 40px;
  text-align: left;
}

.outsideborder {
  background: url("../assets/coverall.png") no-repeat -230px -380px;
  display: inline-block;
  padding: 3px;
  border: 1px solid rgb(204, 204, 204);
  float: left;
}

.maintop img {
  position: relative;
  z-index: -1;
  height: 150px;
  width: 150px;
  backface-visibility: hidden;
}

.buttongroup span:nth-child(1) {
  background: url("../assets/button2.png") no-repeat -5px -632px;
  width: 61px;
  margin-right: 0;
  border-radius: 6px 0 0 6px;
  border: none;
  font-size: 12px;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif, serif;
  padding: 1px 8px 0 0;
}

.buttongroup span:nth-child(2) {
  background: url("../assets/button2.png") no-repeat 0 -1587px;
  width: 31px;
  border-radius: 0;
  border: none;

}

.buttongroup span:nth-child(3) {
  background: url("../assets/button2.png") no-repeat 0 -976px;
  width: 84px;

}

.buttongroup span:nth-child(4) {
  background: url("../assets/button2.png") no-repeat 0 -1225px;
  width: 72px;
}

.buttongroup span:nth-child(5) {
  background: url("../assets/button2.png") no-repeat 0 -2805px;
  width: 54px;
}

.buttongroup span:nth-child(6) {
  background: url("../assets/button2.png") no-repeat 0 -1465px;
  width: 78px;
}

.buttongroup span {
  padding: 1px 3px 0 0;
  line-height: 31px;
  border-right: 1px solid #CCCCCC;
  border-radius: 6px;
  font-family: SimSun, serif;
  text-align: right;
  font-size: 12px;
  display: inline-block;
  vertical-align: middle;
  height: 31px;
  margin-right: 5px;
}

.detailbar {
  padding-bottom: 5px;
  text-align: left;
  margin: 0 30px 0 40px;
  border-bottom: 2px solid red;
}

.detaildl {
  list-style: none;
  margin: 0 30px 0 40px;
  border-right: 1px solid rgb(233, 233, 233);
  border-left: 1px solid rgb(233, 233, 233);
  border-bottom: 1px solid rgb(233, 233, 233);
}

dd:nth-child(-n+9) > div {
  padding-left: 7px;
}

dd:nth-child(n+9) > div {
  padding-left: 7px;
}

dd:nth-child(100) img {
  margin-left: -6px !important;
}

dd {
  margin: 0;
}

.detaildl dd:nth-child(even) {
  background-color: rgb(255, 255, 255);
}

.detaildl dd:nth-child(odd) {
  background-color: rgb(247, 247, 247);
}

.detaildl img {
  height: 50px;
  width: 50px;
  margin: 0 14px 0 0;
  backface-visibility: hidden;
}

.detaildivtop {
  color: #666666;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  line-height: 66px;
}

.detaildiv {
  color: #666666;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding-right: 0;
  line-height: 30px;
  padding-left: 30px
}

.dlname {
  font-weight: normal;
  max-width: 175px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
}

.MV {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  width: 23px;
  height: 17px;
  background: url("../assets/table.png") no-repeat 0 -151px;
}

.ars {
  max-width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.state {
  margin-left: 30px;
}

.state img {
  height: 5px;
  width: 16px;
  backface-visibility: hidden;
  margin-right: 0;
}

.compomenttop {
  padding-bottom: 5px;
  text-align: left;
  margin: 40px 30px 0 40px;
  border-bottom: 2px solid red;
}

.logcompoment {
  padding-bottom: 5px;
  text-align: left;
  margin: 10px 30px 0 40px;
}

.logcompomentdetail {
  position: relative;
  height: 63px;
  width: 608px;
  padding: 5px 6px 6px 6px;
  margin-left: 60px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
}

.logcompomentdetail:after {
  content: '';
  left: -8px;
  top: 10px;
  position: absolute;
  background-image: url("../assets/img_1.png");
  width: 8px;
  height: 13px;
}

.iconspan:nth-child(1) {
  vertical-align: center;
  height: 20px;
  width: 20px;
  display: inline-block;
  background: url('../assets/icon.png') no-repeat -40px -490px

}

.iconspan:nth-child(2) {
  margin-left: 10px;
  vertical-align: center;
  height: 20px;
  width: 20px;
  display: inline-block;
  background: url('../assets/icon.png') no-repeat -60px -490px

}

.compomencommit {
  margin-left: 10px;
  display: inline-block;
  color: #FFFFFF;
  line-height: 25px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  height: 25px;
  width: 46px;
  background: url("../assets/button.png") no-repeat -84px -64px;
}

.inputcompoment {
  height: 100%;
  text-align: left;
  font-size: 12px;
  width: 100%;
  border: none;
}

.inputcompoment:focus {
  outline: none;
  border: none;
}

.hotcompomentbar {
  padding-bottom: 5px;
  text-align: left;
  margin: 10px 30px 0 40px;
  border-bottom: 1px solid rgb(207, 207, 207);
}

.hotcompoments dd img {
  backface-visibility: hidden;
  height: 50px;
  width: 50px;
  float: left;
}

.hotcompomentsdd {
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  padding: 10px 0;
  margin: 0 30px 0 40px;
  border-bottom: 1px dotted #999999;
}

.dianzan {
  vertical-align: bottom;
  height: 15px;
  width: 15px;
  display: inline-block;
  background: url("../assets/icon2.png") no-repeat -150px 0;
}

.newcompomentbar {
  text-align: left;
  margin: 30px 30px 0 40px;
  border-bottom: 1px solid rgb(207, 207, 207);
}

.pages {
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid rgb(204, 204, 204);
  padding: 5px 10px;
  display: inline-block;
  margin: 2px 10px 110px 0;
  color: #333333;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.pagesselect {
  background-color: red;
  color: white;
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

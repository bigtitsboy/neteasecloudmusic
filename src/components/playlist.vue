<template>
  <div> <!--  页面框架-->
    <div style="position: relative;" class="clearfix">
      <div class="container" style="position:absolute;left: 13%;">
        <div class="row">
          <div class="col-lg-9 offset-2" style="padding: 0;">
            <div class="row" style="border-left: 1px solid #666666;border-right: 1px solid #666666"> <!--  页面框架-->
              <!--              listbar-->
              <div class="listcompomentbar col-lg-10 offset-1" style="position: relative">
                <span style="color: #333333;font-size: 24px;font-family:'Microsoft YaHei',Arial,Helvetica,sans-serif ">全部</span>
                <!--                下拉框-->
                <div class="dropdown downdiv">
                  <button class="downbutton" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                          aria-expanded="false">
                    选择分类
                    <i class="bi-chevron-down"></i>
                  </button>
                  <!--                  下拉框-->
                  <div style="padding-bottom: 0;box-shadow: -5px 5px 5px rgb(190, 190, 190)"
                       class="dropdown-menu downul" aria-labelledby="dropdownMenuButton">
                    <div style="border-bottom: 1px solid rgb(230, 230, 230);padding-left: 26px;padding-bottom: 10px">
                      <button class="selecthotbutton" @click="changelisttohot">全部风格</button>
                    </div>
                    <!--                      下拉列表-->
                    <div>
                      <div style="margin: 10px 0 10px 0;padding: 0 16px;text-align: left" class="dropdown-item"
                           v-for="(item,index) in categories" :key="item">
                        <!--                        左侧-->
                        <span class="listclass">{{ item }}</span>
                        <!--                        详情-->
                        <ul class="clearfix"
                            style="display: inline-block;padding: 5px 40px 0 0 ;vertical-align: middle;margin: 5px 0 0 21px">
                          <li class="listdetailli" :key="item" v-for="item in listdetail(index)">
                            <span style="cursor: pointer" @click="changelist(item)">{{ item }}</span>
                            <span style="margin: 0 10px;display: inline-block">|</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!--                    <a class="dropdown-item" href="#">Action</a>-->
                  </div>
                </div>
                <!--                热门按钮-->
                <span class="hotbutton" @click="changelisttohot">热门</span>
              </div>
              <!--                歌单-->
              <div class="main col-lg-10 offset-1">
                <div class="container" style="padding: 0">
                  <div class="row">
                    <div style="margin-right: 25px;padding-right: 0;margin-top: 30px" class="col-lg-2"
                         v-for="(item,index) in lists" :key="'lists'+index">
                      <div class="listcontain">
                        <img class="listimg" :src="item.coverImgUrl" alt="">
                        <i class='bi-headphones coveri'>
                          {{ item.playCount | numberfilter }}
                          <i class="bi-play-circle" style="position: absolute;right: 0px;"></i>
                        </i>
                      </div>
                      <div class="listname">{{ item.name }}</div>
                      <div class="listartname">by {{ item.creator.nickname }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <!--              分页-->
                <span :class="{'pages':true,'pagesselect':start === parseInt(item)}" @click='changepage(item)'
                      v-for="(item, index) in pages" :key="'fy'+index">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
          <a v-show="backtopFlag" class="backtop" title="回到顶部" href="#TOP">
            <div class="bi-chevron-compact-up" style="padding: 0"></div>
            TOP
          </a>
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
  return res
}, function (error) {
  return Promise.reject(error)
})
export default {
  name: 'playlist',
  components: {
    HomeBottom
  },
  data: function () {
    return {
      categories: [], // 歌单分类
      categories0: [], // 分类详细信息
      categories1: [], // 分类详细信息
      categories2: [], // 分类详细信息
      categories3: [], // 分类详细信息
      categories4: [], // 分类详细信息
      start: 1,
      limit: 35,
      end: ' ',
      lists: null,
      backtopFlag: false,
      hot: true,
      nowitem: null
    }
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
    listdetail: function (index) {
      switch (parseInt(index)) {
        case 0:
          return this.categories0
        case 1:
          return this.categories1
        case 2:
          return this.categories2
        case 3:
          return this.categories3
        case 4:
          return this.categories4
      }
    },
    changelisttohot: function () {
      this.hot = true
      this.start = 1
      this.$axios({
        method: 'get',
        url: 'top/playlist',
        params: {
          order: 'hot',
          limit: this.limit,
          offset: (this.start - 1) * this.limit
        }
      }).then((res) => {
        this.end = parseInt(res.total / this.limit) + 1
        // console.log(res.total)
        // console.log(res.playlists)
        this.lists = res.playlists
      }).catch((err) => {
        console.log(err)
      })
    },
    changepage (page) {
      this.start = page// start变更之后computed会自动重新计算，页面会重新渲染
      switch (this.hot) {
        case true:
          // 获取热门该页评论
          this.$axios({
            method: 'get',
            url: 'top/playlist',
            params: {
              order: 'hot',
              limit: this.limit,
              offset: (this.start - 1) * this.limit
            }
          }).then((res) => {
            this.end = parseInt(res.total / this.limit) + 1
            // console.log(res.total)
            // console.log(res.playlists)
            this.lists = res.playlists
          }).catch((err) => {
            console.log(err)
          })
          break
        case false:
          // 获取item该页评论
          this.$axios({
            method: 'get',
            url: 'http://localhost:3000/top/playlist',
            params: {
              cat: this.nowitem,
              limit: this.limit,
              offset: (this.start - 1) * this.limit
            }
          }).then((res) => {
            this.end = parseInt(res.total / this.limit) + 1
            // console.log(res.total)
            // console.log(res.playlists)
            this.lists = res.playlists
          }).catch((err) => {
            console.log(err)
          })
          break
      }
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
    changelist: function (item) {
      this.nowitem = item
      this.hot = false
      this.start = 1
      this.$axios({
        method: 'get',
        url: 'http://localhost:3000/top/playlist',
        params: {
          cat: this.nowitem,
          limit: this.limit,
          offset: (this.start - 1) * this.limit
        }
      }).then((res) => {
        this.end = parseInt(res.total / this.limit) + 1
        // console.log(res.total)
        // console.log(res.playlists)
        this.lists = res.playlists
      }).catch((err) => {
        console.log(err)
      })
    }

  },
  created: function () {
    this.$axios({ // 请求歌单分类
      method: 'get',
      url: '/playlist/catlist'
    }).then((res) => {
      // console.log(res.categories)
      this.categories = res.categories
      for (const key in res.sub) {
        switch (parseInt(res.sub[key].category)) {
          case 0:
            this.categories0.push(res.sub[key].name)
            break
          case 1:
            this.categories1.push(res.sub[key].name)
            break
          case 2:
            this.categories2.push(res.sub[key].name)
            break
          case 3:
            this.categories3.push(res.sub[key].name)
            break
          case 4:
            this.categories4.push(res.sub[key].name)
            break
        }
        // console.log(res.sub[key].category)
      }
    }).catch((err) => {
      console.log(err)
    })
    // 请求推荐歌单
    this.changelisttohot()
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
ul {
  list-style: none;
}

.listcompomentbar {
  margin-top: 50px;
  padding: 0 0 5px 0;
  text-align: left;
  border-bottom: 2px solid red;
}

.downdiv {
  position: absolute;
  display: inline-block;
  top: 5px;
  margin-left: 10px;
  vertical-align: top;
  height: 31px;
  width: 90px;
  background: url("../assets/button2.png") no-repeat right -100px;
}

.downbutton {
  height: 31px;
  width: 86px;
  font-size: 12px;
  border-radius: 2px;
  border: none;
  color: #0c73c2 !important;
  font-family: Arial, Helvetica, sans-serif;
  /*border: 1px solid rgb(196, 196, 196);*/
  background: url("../assets/button2.png") no-repeat 0 -59px;
}

.hotbutton {
  cursor: pointer;
  float: right;
  margin-top: 5px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFFFFF;
  display: inline-block;
  background: url("../assets/button.png") no-repeat 0 0;
  text-align: center;
  line-height: 29px;
  border-radius: 5px;
  height: 29px;
  width: 46px;
  vertical-align: center;
}

.downul {
  top: 8px !important;
  left: -90px !important;
  width: 750px;
}

.downul:after {
  content: '';
  position: absolute;
  top: -9px;
  left: 100px;
  height: 11px;
  width: 24px;
  background-image: url("../assets/img_2.png");
}

.selecthotbutton {
  height: 26px;
  width: 75px;
  font-size: 12px;
  line-height: 26px;
  border: none;
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  border-radius: 2px;
  background: url("../assets/button.png") no-repeat 0 -64px;
}

.listclass {
  position: relative;
  border-right: 1px solid rgb(230, 230, 230);
  display: inline-block;
  height: 100%;
  font-size: 12px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 10px 0 25px;
  color: #333333;
  vertical-align: middle;
}

.dropdown-item:nth-child(1) .listclass:nth-child(1):before {
  content: '';
  height: 23px;
  width: 23px;
  position: absolute;
  left: -5px;
  top: -3px;
  background: url("../assets/icon.png") no-repeat -20px -735px;
}

.dropdown-item:nth-child(2) .listclass:nth-child(1):before {
  content: '';
  height: 23px;
  width: 23px;
  position: absolute;
  left: -5px;
  top: -3px;
  background: url("../assets/icon.png") no-repeat 0 -60px;
}

.dropdown-item:nth-child(3) .listclass:nth-child(1):before {
  content: '';
  height: 24px;
  width: 23px;
  position: absolute;
  left: -5px;
  top: -3px;
  background: url("../assets/icon.png") no-repeat 0 -88px;
}

.dropdown-item:nth-child(4) .listclass:nth-child(1):before {
  content: '';
  height: 23px;
  width: 23px;
  position: absolute;
  left: -5px;
  top: -3px;
  background: url("../assets/icon.png") no-repeat 0 -117px;
}

.dropdown-item:nth-child(5) .listclass:nth-child(1):before {
  content: '';
  height: 23px;
  width: 23px;
  position: absolute;
  left: -5px;
  top: -3px;
  background: url("../assets/icon.png") no-repeat 0 -141px;
}

.listdetailli {
  margin-bottom: 10px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  float: left;
}

.main {
  margin-top: 10px;
  padding: 0 0 5px 0;
  text-align: left;
}

.pages {
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid rgb(204, 204, 204);
  padding: 5px 10px;
  display: inline-block;
  margin: 50px 10px 50px 0;
  color: #333333;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

.pagesselect {
  background-color: red;
  color: white;
}

.listimg {
  backface-visibility: hidden;
  width: 130px;
  height: 130px;
  z-index: -1;
  position: relative;
}

.listcontain {
  position: relative;
  background: url("../assets/coverall.png") no-repeat 0 0;
  width: 100%;
}

.coveri {
  background: url("../assets/coverall.png") no-repeat 0 -537px;
  padding-left: 10px;
  left: 0;
  bottom: 0;
  width: 130px;
  height: 27px;
  color: #CCCCCC;
  line-height: 27px;
  font-size: 14px;
  /*display: inline-block;*/
  position: absolute;
}

.listname {
  margin-top: 5px;
  color: #000000;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.listartname {
  color: #666666;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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

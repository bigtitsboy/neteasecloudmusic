<template>
  <div>
    <div style="position: relative;" class="clearfix">
      <div class="container" style="position:absolute;left: 13%;">
        <div class="row">
          <div class="col-lg-9 offset-2" style="padding: 0;position: relative">
            <div class="row" style="border-left: 1px solid #666666;border-right: 1px solid #666666"> <!--  页面框架-->
              <!--              热门新碟-->
              <div class="hotalbumbar col-lg-10 offset-1" style="position: relative">
                <span
                  style="color: #333333;font-size: 24px;font-family:'Microsoft YaHei',Arial,Helvetica,sans-serif ">热门新碟</span>
                <div style="border-top: 2px solid red;" class="row" v-if="hotalbums[0]">
                  <div v-for="(item,index) in hotalbums" style="margin-right: 25px;padding-right: 0;margin-top: 30px;"
                       class="col-lg-2" :key="'hotalbums'+index">
                    <div class="listcontain">
                      <img class="listimg" :src="item.picUrl" alt="">
                    </div>
                    <div class="listname">{{ item.name }}</div>
                    <div class="listartname">{{ artistsname(item) }}</div>
                  </div>
                </div>
              </div>
              <!--              全部新碟-->
              <div class="albumbar col-lg-10 offset-1" style="position: relative">
                <span style="color: #333333;font-size: 24px;font-family:'Microsoft YaHei',Arial,Helvetica,sans-serif ">全部新碟</span>
                <ul class="mainbartop">
                  <li><a @click="changearea('all')" href="#">全部</a></li>
                  |
                  <li><a @click="changearea('zh')" href="#">华语</a></li>
                  |
                  <li><a @click="changearea('ea')" href="#">欧美</a></li>
                  |
                  <li><a @click="changearea('kr')" href="#">韩国</a></li>
                  |
                  <li><a @click="changearea('jp')" href="#">日本</a></li>
                </ul>
                <div style="border-top: 2px solid red;" class="row" v-if="hotalbums[0]">
                  <div v-for="(item,index) in detailalbums"
                       style="margin-right: 25px;padding-right: 0;margin-top: 30px;"
                       class="col-lg-2" :key="'detailalbums'+index">
                    <div class="listcontain">
                      <img class="listimg" :src="item.picUrl" alt="">
                    </div>
                    <div class="listname">{{ item.name }}</div>
                    <div class="listartname">{{ artistsname(item) }}</div>
                  </div>
                </div>
              </div>
              <!--              分页-->
              <div>
                 <span :class="{'pages':true,'pagesselect':start === parseInt(item)}"
                       @click='changepage(item)'
                       v-for="(item, index) in pages" :key="'fy'+index">
                  {{ item }}
                 </span>
              </div>
            </div>
            <a v-show="backtopFlag" class="backtop" title="回到顶部" href="#TOP">
              <div class="bi-chevron-compact-up" style="padding: 0"></div>
              TOP
            </a>
          </div>
        </div>
        <HomeBottom style="position: relative;width: 1920px;margin-left: -276px"></HomeBottom> <!--        放在于row平级-->
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
  name: 'album',
  components: {
    HomeBottom
  },
  data: function () {
    return {
      hotalbums: [],
      detailalbums: [],
      start: 1,
      end: ' 123',
      backtopFlag: false,
      limit: 35,
      area: null
    }
  },
  methods: {
    artistsname (item) {
      let artistsnames = ''
      for (let i = 0; i < item.artists.length; i++) {
        if (i !== item.artists.length - 1) {
          artistsnames = artistsnames + item.artists[i].name + '  /  '
        } else {
          artistsnames = artistsnames + item.artists[i].name
        }
      }
      return artistsnames
    },
    changepage (page) {
      this.start = page// start变更之后computed会自动重新计算，页面会重新渲染
      // 获取该页评论
      this.askdetailalbums()
      // this.end = parseInt(this.commentCount / 20)
      // console.log(page);
    },
    askdetailalbums: function () {
      this.$axios({
        method: 'get',
        url: 'album/new',
        params: {
          limit: this.limit,
          area: this.area,
          offset: (this.start - 1) * this.limit
        }
      }).then((res) => {
        this.end = parseInt(res.total / this.limit) + 1
        this.detailalbums = res.albums
        // console.log(res)
      }).catch((err) => {
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
    },
    changearea: function (area) {
      this.area = area
      this.start = 1
      this.askdetailalbums()
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
  created () {
    // 获取热门新碟
    this.$axios({
      method: 'get',
      url: 'album/newest'
    }).then((res) => {
      // console.log(res.albums)
      for (let key = 0; key < 10; key++) {
        this.hotalbums.push(res.albums[key])
      }
    }).catch((err) => {
      console.log(err)
    })
    // 请求全部详细碟片
    this.area = 'all'
    this.askdetailalbums()
  },
  filters: {
    splitnames: function (val) {
      return val.replace(' ', '/')
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
.hotalbumbar {
  margin-top: 40px;
  padding: 0 0 5px 0;
  text-align: left;
}

.albumbar {
  margin-top: 40px;
  padding: 0 0 5px 0;
  text-align: left;
}

.mainbartop {
  margin-left: 20px;
  list-style: none;
  display: inline-block;
  text-align: left;
  padding: 0;
  margin-bottom: 0;
  color: #CCCCCC;
  /*line-height: 30px;*/
}

.mainbartop li {
  margin: 0 10px 0 10px;
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
}

.mainbartop li a {
  font-size: 12px;
  color: #666666;
  text-decoration: none;
}

.listcontain {
  position: relative;
  background: url("../assets/coverall.png") no-repeat 0 -845px;
  width: 150px;
  /*width: 100%;*/
}

.listimg {
  backface-visibility: hidden;
  width: 130px;
  height: 130px;
  z-index: -1;
  position: relative;
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

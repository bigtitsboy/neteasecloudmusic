import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import toplist from '@/components/toplist'
import defultpage from '@/components/defultpage'
import playlist from '@/components/playlist'
import djradio from '@/components/djradio'
import artist from '@/components/artist'
import album from '@/components/album'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/discover'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'discover',
        component: defultpage
      },
      {
        path: 'toplist',
        component: toplist
      },
      {
        path: 'playlist',
        component: playlist
      },
      {
        path: 'djradio',
        component: djradio
      },
      {
        path: 'artist',
        component: artist
      },
      {
        path: 'album',
        component: album
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

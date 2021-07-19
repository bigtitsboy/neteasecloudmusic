<template>
  <div>
    <HomeHead></HomeHead>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeHead from '@/components/HomeHead'
export default {
  name: 'Home',
  components: { HomeHead }
}
</script>

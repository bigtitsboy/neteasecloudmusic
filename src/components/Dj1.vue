<template>
  <div class="row" style="padding: 20px;height: 220px">
    <div class="col-lg-1" v-for="(item,index) in djtypelist[0]" :key="'dj1'+index" style="margin: 20px 0 0 22px">
      <span class="djtypespan">
        <div :style="{height: '48px',width: '48px',display: 'inline-block',background:'url('+item.picWebUrl+')',position: 'relative'}">
          <span class="djtypename">{{ item.name }}</span>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dj1',
  data: function () {
    return {
      djtypelist: []
    }
  },
  methods: {
    getdjtype () {
      this.$axios({
        method: 'get',
        url: 'dj/catelist'
      }).then(res => {
        this.djtypelist.push(res.categories)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getdjtype()
  }
}
</script>

<style scoped>
.djtypespan {
  display: inline-block;
  height: 70px;
  width: 70px;
}

.djtypename {
  position: absolute;
  display: inline-block;
  width: 100%;
  left: 0;
  bottom: -15px;
  font-size: 12px;
  color: #888888;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

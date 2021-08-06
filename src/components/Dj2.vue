<template>
  <div class="row" style="padding: 20px;height: 220px">
    <div class="col-lg-1" style="margin: 20px 0 0 22px">
      <span class="djtypespan">
        <div class="djdiv1">
          <span class="djtypename">常见问题</span>
        </div>
      </span>
    </div>
    <div class="col-lg-1" style="margin: 20px 0 0 22px">
      <span class="djtypespan">
        <div class="djdiv2">
          <span class="djtypename" style="width: 60px;margin-left: -5px;color: #5ab5e7">我要做主播</span>
        </div>
      </span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Dj2'
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

.djdiv1 {
  height: 48px;
  width: 48px;
  display: inline-block;
  background: url('../assets/radio_faq.png') no-repeat 0 0;
  position: relative
}
.djdiv2 {
  height: 48px;
  width: 48px;
  display: inline-block;
  background: url('../assets/radio_apply.png') no-repeat 0 0;
  position: relative
}
</style>

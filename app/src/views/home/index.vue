<template>
  <div style="padding: 20px;">
    <router-link to="/video">
      <a>本地屏幕采集</a>
    </router-link>
    <router-link to="/tencent-live">
      <a>腾讯云直播（主播端）</a>
    </router-link>
    <router-link to="/tencent-player">
      <a>腾讯云直播（观众端）</a>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
  a {
    display: block;
    margin-bottom: 10px;
  }
</style>
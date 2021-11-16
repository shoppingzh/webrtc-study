<template>
  <div ref="el" id="video" class="video-wrap"></div>
</template>

<script setup>import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

  const el = ref(null)
  const liveUrl = ref(null)
  const init = () => {
    new TcPlayer('video', {
      webrtc: liveUrl.value,
      live: true,
      autoplay: true
    })
  }

  onMounted(() => {
    const url = window.prompt('请输入拉流地址：')
    if (!url) return
    liveUrl.value = url
    init()
  })
</script>

<style lang="less" scoped>
  .video-wrap {
    position: fixed;
    width: 80vw;
    height: 80vh;
    left: 10vw;
    top: 10vh;
    background-color: #000;
    transition: all .5s ease-in-out;
    overflow: hidden;
  }
</style>
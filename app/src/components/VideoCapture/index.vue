<template>
  <div class="video-capture">
    <video
      ref="video"
      controls
      @loadedmetadata="play"></video>
  </div>
</template>


<script setup>
  import { ref } from '@vue/reactivity';

  const video = ref(null)
  const init = async() => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true
    })
    video.value.srcObject = stream
  }

  const play = () => {
    video.value && video.value.play()
  }

  init()
</script>

<style lang="less" scoped>
  .video-capture {
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
    }
  }
</style>
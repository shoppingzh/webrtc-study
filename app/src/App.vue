<template>
  <video
    ref="video"
    style="width: 100%; height: 100%;"
    @loadedmetadata="play"></video>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup(props, ctx) {
    const video = ref(null)
    const init = async() => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      })
      console.log(stream)
      video.value.srcObject = stream
    }
    const play = () => {
      video.value.play()
    }

    onMounted(() => {
      init()
    })

    return {
      video,
      play
    }
  }
}
</script>


<style>
</style>

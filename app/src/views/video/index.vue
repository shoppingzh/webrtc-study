<template>
  <div>
    <video src="http://liveplay.dascomsoft.com/live/dascom.m3u8"></video>
    <MagicButton
      v-if="!showCapture"
      ref="button"
      class="button"
      size="large"
      @click="handleShowCapture">开始直播！</MagicButton>
    <div
      v-else
      class="capture-wrap"
      :style="originalStyle">
      <VideoCapture />
    </div>
  </div>
</template>

<script setup>
import VideoCapture from '@/components/VideoCapture/index.vue'
import { ref, computed, nextTick, watch } from 'vue'
import MagicButton from '@/components/MagicButton/index.vue'

const showCapture = ref(false)
const button = ref(null)
const originalRect = ref(null)
const originalStyle = computed(() => originalRect.value ? {
  left: `${originalRect.value.left}px`,
  top: `${originalRect.value.top}px`,
  width: `${originalRect.value.width}px`,
  height: `${originalRect.value.height}px`
} : null)

const handleShowCapture = () => {
  const el = button.value.$el
  const rect = el.getBoundingClientRect()
  originalRect.value = rect
  showCapture.value = true
  console.log(originalRect.value)
}

watch(showCapture, newVal => {
  if (!newVal) return
  setTimeout(() => {
    originalRect.value = null
  }, 50)
})
</script>


<style lang="less" scoped>
  .button {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .capture-wrap {
    position: fixed;
    background-color: rgba(0, 0, 0, 1);
    left: 10%;
    top: 5%;
    width: 80vw;
    height: 85vh;
    transition: all .3s ease-in-out;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 35px 20px rgba(0, 0, 0, .1), 4px 4px 10px 3px rgba(0, 0, 0, .8);
  }
</style>

<template>
  <div class="wrap" :class="{ 'is-open': isStart }">
    <div v-if="isStart" ref="el" class="video-wrap" />
    <magic-button v-else @click="start">
      开始腾讯云直播
    </magic-button>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import MagicButton from '@/components/MagicButton/index.vue'
import useTencentLive from '@/hooks/useTencentLive'

const isStart = ref(false)
const liveUrl = ref(null)
const { el, init } = useTencentLive(liveUrl)

const start = () => {
  const url = window.prompt('请输入你的推流地址：')
  if (!url) return
  liveUrl.value = url
  isStart.value = true
  nextTick(() => {
    init()
  })
}

</script>

<style lang="less" scoped>
  .wrap {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
    height: 50px;
    transition: all 0.5s ease-in-out;
    &.is-open {
      background-color: #000;
      width: 80vw;
      height: 80vh;
    }
  }
  .video-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
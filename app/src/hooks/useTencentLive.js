import { ref, reactive, computed, watch, isRef } from 'vue'

export default function(url) {
  const el = ref(null)
  const streamFlag = reactive({
    video: false,
    audio: false
  })
  const ready = computed(() => streamFlag.video && streamFlag.audio)
  const liveUrl = computed(() => isRef(url) ? url.value : url)

  const init = () => {
    const livePusher = new TXLivePusher()
    // 设置初始参数
    livePusher.setVideoQuality('720p')
    livePusher.setAudioQuality('standard')
    // 设置渲染层并开启摄像头与麦克风
    livePusher.setRenderView(el.value)
    livePusher.startCamera()
    livePusher.startMicrophone()
    // 等待采集到音视频后开始推流
    watch(ready, (newVal) => {
      if (!newVal) return
      livePusher.startPush(liveUrl.value)
    })
    livePusher.setObserver({
      onCaptureFirstAudioFrame: () => {
        console.log('采集到第一帧音频')
        streamFlag.audio = true
      },
      onCaptureFirstVideoFrame: () => {
        console.log('采集到第一帧视频')
        streamFlag.video = true
      },
      onError: (e) => {
        console.log(e)
      }
    })
    
  }

  return {
    el,
    ready,

    init
  }
}

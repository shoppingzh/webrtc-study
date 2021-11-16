const modules = import.meta.glob('../views/**/*.vue')
function view(path) {
  return modules[`../views/${path}`]
}

export default [
  {
    path: '/',
    component: view('home/index.vue')
  },
  {
    path: '/video',
    component: view('video/index.vue')
  },
  {
    path: '/tencent-live',
    component: view('tencent-live/index.vue')
  },
  {
    path: '/tencent-player',
    component: view('tencent-player/index.vue')
  }
]

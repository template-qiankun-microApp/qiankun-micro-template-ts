import Vue from 'vue'
import * as Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import routes from './routes'
import VueRouter, { RouteConfig } from 'vue-router'
import './set-path'

Vue.config.productionTip = false
Vue.use(Antd)

let instance: any
let router: any

let _swiperList: Array<any> = []

function render (props: any = {}): void {
  const { container, gameId } = props

  router = new VueRouter({
    mode: 'history',
    base: `/${gameId}/vue2app`,
    routes
  })

  instance = new Vue({
    router,
    render: h => h(App)
  })

  instance.$mount(container ? container.querySelector('#app') : '#app')
}

if (!(window).__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap (): Promise<void> {
  console.log('vue2app bootstraped')
}

export async function mount (props: any): Promise<void>  {
  console.log('vue2app mount', props)

  _swiperList.push( props.loadApp('vue2swiper', {container: '#swiper2vue_mount_node'}) )
  setTimeout(function() {
    _swiperList.push( props.loadApp('vue2swiper', {container: '#swiper2vue_mount_node2'}) )
  }, 0)
  
  render(props)
}

export async function unmount (): Promise<void>  {
  console.log('vue2app unmount')
  _swiperList.forEach(swiper => {
    swiper.unmount()
  })
  _swiperList = []
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}

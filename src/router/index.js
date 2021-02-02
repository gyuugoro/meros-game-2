import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Answer from '../views/Answer'
import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/answer',
    name: 'Answer',
    component: Answer,
    beforeEnter(to, from, next) {
      store.dispatch('setInfo')

      if (store.state.name == '') {

        next('/')

      } else if (store.state.name == '!') {

        console.log('コマンド：無視')

        store.commit('changeCommandText', 'コマンド：無視')
        store.commit('openCommand')

        store.dispatch('setRandomRandom')
        store.dispatch('setCharacter')
        store.commit('changeName', 'テスト')

        next()

      } else if (store.state.name.match(/^!\d*&\S*$/)) {

        const n = store.state.name.match(/^!(\d*)&\S*$/)[1]
        const s = store.state.name.match(/^!\d*&(\S*)$/)[1]

        console.log('コマンド：数字+文字：', n, '+', s)

        store.commit('changeCommandText', 'コマンド：' + s + 'を' + n + '番に')
        store.commit('openCommand')

        store.dispatch('setRandom', Number(n))
        store.commit('changeName', s)
        store.dispatch('setCharacter')
        store.dispatch('addInfo')

        next()

      } else if (store.state.name.match(/^!\d*$/)) {

        const n = store.state.name.match(/^!(\d*)$/)[1]

        console.log('コマンド：数字：', n)

        store.commit('changeCommandText', 'コマンド：' + n + '番に')
        store.commit('openCommand')

        store.dispatch('setRandom', Number(n))
        store.commit('changeName', 'テスト')
        store.dispatch('setCharacter')


        next()

      } else if (store.state.name == '%') {

        console.log('削除：全て')

        store.commit('changeCommandText', 'コマンド：全て削除')
        store.commit('openCommand')

        store.dispatch('removeInfoAll')

        store.commit('changeName', '')

        next(false)

      } else if (store.state.name.match(/^%\S*$/)) {

        const s = store.state.name.match(/^%(\S*)$/)[1]

        console.log('削除：' + s)

        store.commit('changeCommandText', 'コマンド：' + s + 'を削除')
        store.commit('openCommand')

        store.dispatch('removeInfo', s)

        store.commit('changeName', '')

        next(false)

      } else {

        store.dispatch('setRandomRandom')
        store.dispatch('setCharacter')
        store.dispatch('addInfo')

        next()
      }
    }
  },
  {
    path: '*',
    redirect: '/',
  }

]

const router = new VueRouter({
  routes
})

export default router

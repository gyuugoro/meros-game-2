import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    character: '',
    level: '',
    infos: [],
    random: 1,
    command: false,
    commandText: ''
  },
  mutations: {
    changeName(state, v) {
      state.name = v
    },
    changeLevel(state, v) {
      state.level = v
    },
    changeCharacter(state, v) {
      state.character = v
    },
    changeRandom(state, v) {
      state.random = v
    },
    changeInfo(state, v) {
      state.infos.unshift({ name: v.name, character: v.character })
    },
    deleteInfo(state) {
      state.infos = []
    },
    changeCommandText(state, v) {
      state.commandText = v
    },
    openCommand(state) {
      state.command = true
    }
  },
  actions: {

    setRandom({ commit }, v) {
      commit('changeRandom', v)
    },

    setRandomRandom({ commit }) {
      const random = Math.floor(Math.random() * 80) + 1

      commit('changeRandom', random)
    },

    addInfo({ state }) {
      firebase.firestore().collection('meros-game-2').doc(state.name).set({
        name: state.name,
        character: state.character
      }).then(() => {
        console.log('追加成功-firebase')
      }).catch((err) => {
        console.log('追加失敗-firebase：' + err)
      })
    },

    removeInfo(info, v) {
      firebase.firestore().collection('meros-game-2').doc(v).delete().then(() => {
        console.log('削除成功-firebase')
      }).catch((err) => {
        console.log('削除失敗-firebase：' + err)
      })
    },

    removeInfoAll() {
      firebase.firestore().collection('meros-game-2').get().then(docs => {
        docs.forEach((doc) => {
          firebase.firestore().collection('meros-game-2').doc(doc.id).delete().then(() => {
            console.log('削除成功-firebase')
          }
          ).catch((err) => {
            console.log('削除失敗-firebase：' + err)
          })
        })
        console.log('全て削除成功-firebase')
      }).catch((err) => {
        console.log('全て削除失敗-firebase：' + err)
      })
    },

    setInfo({ commit }) {
      commit('deleteInfo')

      firebase.firestore().collection('meros-game-2').get().then(docs => {
        docs.forEach(doc => {
          commit('changeInfo', doc.data())
        })
      })
    },

    setCharacter({ commit, state }) {

      const random = state.random

      console.log('数字：' + random)

      if (random >= 1 && random < 21) {
        commit('changeCharacter', 'メロス');
        commit('changeLevel', '低')

      } else if (random >= 21 && random < 41) {
        commit('changeCharacter', 'セリヌンティウス');
        commit('changeLevel', '低')

      } else if (random >= 41 && random < 61) {
        commit('changeCharacter', 'ディオニス');
        commit('changeLevel', '低')

      } else if (random >= 61 && random < 66) {
        commit('changeCharacter', 'メロスの妹');
        commit('changeLevel', '中')

      } else if (random >= 66 && random < 71) {
        commit('changeCharacter', 'フィロストラトス');
        commit('changeLevel', '中')

      } else if (random == 71) {
        commit('changeCharacter', '山賊');
        commit('changeLevel', '高')

      } else if (random == 72) {
        commit('changeCharacter', 'メロスの妹の結婚相手');
        commit('changeLevel', '高')

      } else if (random == 73) {
        commit('changeCharacter', 'メロスに揺さぶられた老爺');
        commit('changeLevel', '高')

      } else if (random == 74) {
        commit('changeCharacter', 'メロスに緋のマントを捧げた少女');
        commit('changeLevel', '高')

      } else if (random == 75) {
        commit('changeCharacter', 'ゼウス');
        commit('changeLevel', '高')

      } else if (random == 76) {
        commit('changeCharacter', 'メロスに蹴とばされた犬');
        commit('changeLevel', '高')

      } else if (random == 77) {
        commit('changeCharacter', 'メロスの羊');
        commit('changeLevel', '高')

      } else if (random == 78) {
        commit('changeCharacter', '太宰治');
        commit('changeLevel', '高')

      } else if (random == 79) {
        commit('changeCharacter', '永遠の裏切者、地上で最も不名誉の人種');
        commit('changeLevel', '高')

      } else if (random == 80) {
        commit('changeCharacter', '王に殺された賢臣のアレキス');
        commit('changeLevel', '高')

      }

    }
  },
})

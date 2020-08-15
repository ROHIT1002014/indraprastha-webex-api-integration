import Vue from 'vue'
import Vuex from 'vuex'
import webex from '../webexApi';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms:[]
  },

////////////////////////////////////////////////////////////
  getters: {
    rooms(state) {
      return state.rooms;
    },
  },

////////////////////////////////////////////////////////////
  mutations: {
    SET_ALL_ROOMS(state, rooms) {
      state.rooms = rooms
    }

  },

///////////////////////////////////////////////////////////
  actions: {
    fetchAllRooms({ commit }){
          webex.rooms.list({
          max: 10
        }).then((rooms) => {
          console.log(rooms.items)
          commit('SET_ALL_ROOMS', rooms.items);
        })
        },
  },

})

import Vue from 'vue'
import Vuex from 'vuex'
import { restService } from '../services/restService'
import { endpoints } from '../entities/api/endpoints'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {

    }
  },
  getters: {
    getAllPosts: function(state) {
      return state.data.posts;
    },

    getPost: function(state) {
      return state.data.post;
    }
  },
  mutations: {
    setAllPosts: function(state, posts) {
      state.data = posts;
    },

    setPost: function(state, post) {
      state.data = post;
    }
  },
  actions: {
    loadAllPosts: async function(state) {
      let data = await restService.get(endpoints.getAllPosts);
      if (data) state.commit('setPosts', data)
    },
  },
  modules: {
  }
})

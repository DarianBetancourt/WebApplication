import { createStore } from 'vuex'
import Auth from '../services/auth'
import router from '../router'

export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state , payload){
      state.token = payload
    }
  },
  actions: {
    login({commit} , user){
      return Auth.login(user).then(function (response) {

        commit('setToken' , response.data.token)
        
        /* Set Token in local storage */
        localStorage.setItem('token', response.data.token)
        router.push('contacts')

      }).catch(function (e) {
          user.error.msg = e.response.data.errors[0].message;
          user.error.status = true;
          console.log(user.error.msg)
          
      });
    },
    readToken({commit}) {
      if (localStorage.getItem('token')) {
        commit('setToken' , localStorage.getItem('token'))
      }else{
        commit('setToken' , null)
      }
    },
    logout({commit}){
      localStorage.removeItem('token')
      commit('setToken', null)
    }
  },
  modules: {
  }
})

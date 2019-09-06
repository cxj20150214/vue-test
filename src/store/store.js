
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
export default new vuex.Store({
	state: {
		token: window.sessionStorage.getItem('token'),  //存到localStorage中一样m
    test:'111',
    indexspan:localStorage.getItem('indexspan') || 0
	},
	mutations: {
		Company: (state, data) => {
			state.test = data;
    },
    setindex(state,value){
      localStorage.setItem('indexspan',value)
      state.indexspan=value


    }
	}
})


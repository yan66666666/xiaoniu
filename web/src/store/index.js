import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		userName:"",
		back:"/"
	},
	mutations:{
		changeUser(state,val){
			state.userName = val
		},
		changeBack(state,val){
			state.back = val
		}
	}
})

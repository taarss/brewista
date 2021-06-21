import { createStore } from 'vuex';
import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js';
const store = createStore({
    state(){
        return {
            isLoggedIn: false,
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
    
});

export default store;
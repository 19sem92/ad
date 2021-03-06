import * as fb from 'firebase'

class User {
    constructor(id){
        this.id = id
    }

}

export default {
    state: {
        user: null
    },
    mutations: {
        setUser (state, payload){
            state.user = payload
        }
    },
    actions: {
        registerUser ({commit}, {email, password}){

            commit('clearError');
            commit('setLoading', true);

            fb.auth().createUserWithEmailAndPassword(email, password)
                .then(user =>{
                    commit('setUser', new User(user.uid));
                    commit('setLoading', false)
                })
                .catch(error => {
                    commit('setLoading', false);
                    commit('setError', error.message);
                })
        },

        loginUser({commit}, {email, password}){
            commit('clearError');
            commit('setLoading', true);

            fb.auth().signInWithEmailAndPassword(email, password)
                .then(user =>{
                    commit('setUser', new User(user.uid));
                    commit('setLoading', false)
                })
                .catch(error => {
                    commit('setLoading', false);
                    commit('setError', error.message);
                })
        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
}
import * as fb from 'firebase'

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
            fb.auth().createUserWithEmailAndPassword(email, password)
        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
}
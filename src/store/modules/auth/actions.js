import firebase from '../../../boot/config';

export default{
    signup({commit}, payload) {
        return new Promise((resolve, reject) => {
            firebase.auth.createUserWithEmailAndPassword(payload.email, payload.password).then((response) => {
                resolve(response)
                commit("AUTH_STATUS_CHANGE", response)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    login({commit}, payload) {
        return new Promise((resolve, reject) => {
            firebase.auth.signInWithEmailAndPassword(payload.email,payload.password).then((response) => {
                resolve(response)
                commit("AUTH_STATUS_CHANGE", response)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    logged({commit}){
        commit('AUTH_STATUS_CHANGE')
    }
}
 
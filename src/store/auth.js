import firebase from 'firebase/app'

export default {
  actions: {
    async login({dsipatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch(e) {
        throw e
      }
    },
    async register({dsipatch}, {name, email, password}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dsipatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name
        })
      } catch(e) {
        throw e
      }
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    }
  }
}

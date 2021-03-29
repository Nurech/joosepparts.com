// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({ databaseURL: 'https://website-joosep-parts-default-rtdb.europe-west1.firebasedatabase.app/' })
  .database()

  const users = db.ref('users')

  export default {
    props: ['id'],
    data() {
      return {
        user: null,
      }
    },

    watch: {
      id: {
        // call it upon creation too
        immediate: true,
        handler(id) {
          this.$rtdbBind('user', users.child(id))
        },
      },
    },
  }


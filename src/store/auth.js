import firebase from "firebase/app";

export default {
  actions: {
    async login(store, { email, password }) {
      // eslint-disable-next-line no-useless-catch
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        throw e;
      }
    },
  },
};

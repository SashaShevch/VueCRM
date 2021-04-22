import firebase from "firebase/app";

export default {
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        const info = (
          await firebase.database().ref(`/users/${uid}/info`).once("value")
        ).val();
        commit("setInfo", info);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async updateInfo({ dispatch, commit, getters }, updatedFields) {
      try {
        const uid = await dispatch("getUid");
        const updatedData = { ...getters.info, ...updatedFields };
        await firebase.database().ref(`/users/${uid}/info`).update(updatedData);
        commit("setInfo", updatedData);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
  },
  getters: {
    info: (s) => s.info,
  },
};

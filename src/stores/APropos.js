const state = {
    profil: '',
    load: false
}
const getters = {
    PROFIL: (state) => state.profil
}
const mutations = {
    SET_PROFIL: (state, profil) => state.profil = profil
}
const actions = {
    SAVE_APROPOS: ({ commit }, profil) => {
        commit('SET_PROFIL', profil)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}
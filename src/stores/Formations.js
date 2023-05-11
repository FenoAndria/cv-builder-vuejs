const state = {
    formations: [],
    formation: ''
}
const getters = {
    FORMATIONS: (state) => state.formations,
    FORMATION: (state) => state.formation,
}
const mutations = {
    SET_FORMATION: (state, formation) => state.formation = formation,
    SET_FORMATIONS: (state, formations) => state.formations = formations,
    ADD_FORMATION: (state, formation) => {
        state.formations.push(formation)
    },
    DEL_FORMATION: (state, formation) => {
        state.formations = state.formations.filter((value, index, array) => {
            return value.id != formation;
        });
    },
    UPD_FORMATION: (state, formation) => {
        state.formations.forEach(element => {
            if (element.id == formation.id) {
                let index = state.formations.indexOf(element)
                state.formations[index] = formation
            }
        });
    }
}
const actions = {
    SAVE_FORMATION: ({ commit }, formation) => {
        commit('ADD_FORMATION', formation)
    },
    DELETE_FORMATION: ({ commit }, formation) => {
        commit('DEL_FORMATION', formation)
    },
    UPDATE_FORMATION: ({ commit }, formation) => {
        commit('UPD_FORMATION', formation)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}
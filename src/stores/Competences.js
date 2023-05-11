const state = {
    competences: [],
    competence: ''
}
const getters = {
    COMPETENCES: (state) => state.competences,
    COMPETENCE: (state) => state.competence,
}
const mutations = {
    ADD_COMPETENCE: (state, competence) => {
        state.competences.push(competence)
    },
    DEL_COMPETENCE: (state, competence) => {
        state.competences = state.competences.filter((value, index, array) => {
            return value.id != competence;
        });
    },
    UPD_COMPETENCE: (state, competence) => {
        state.competences.forEach(element => {
            if (element.id == competence.id) {
                let index = state.competences.indexOf(element)
                state.competences[index] = competence
            }
        });
    }
}
const actions = {
    SAVE_COMPETENCE: ({ commit }, competence) => {
        commit('ADD_COMPETENCE', competence)
    },
    DELETE_COMPETENCE: ({ commit }, competence) => {
        commit('DEL_COMPETENCE', competence)
    },
    UPDATE_COMPETENCE: ({ commit }, competence) => {
        commit('UPD_COMPETENCE', competence)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}
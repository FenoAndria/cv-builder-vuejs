const state = {
    langues: [],
    langue: ''
}
const getters = {
    LANGUES: (state) => state.langues,
    LANGUE: (state) => state.langue,
}
const mutations = {
    ADD_LANGUE: (state, langue) => {
        state.langues.push(langue)
    },
    DEL_LANGUE: (state, langue) => {
        state.langues = state.langues.filter((value, index, array) => {
            return value.id != langue;
        });
    },
    UPD_LANGUE: (state, langue) => {
        state.langues.forEach(element => {
            if (element.id == langue.id) {
                let index = state.langues.indexOf(element)
                state.langues[index] = langue
            }
        });
    }
}
const actions = {
    SAVE_LANGUE: ({ commit }, langue) => {
        commit('ADD_LANGUE', langue)
    },
    DELETE_LANGUE: ({ commit }, langue) => {
        commit('DEL_LANGUE', langue)
    },
    UPDATE_LANGUE: ({ commit }, langue) => {
        commit('UPD_LANGUE', langue)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}
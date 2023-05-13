const state = {
    autres: [],
}
const getters = {
    AUTRES: (state) => state.autres,
}
const mutations = {
    ADD_AUTRES: (state, autres) => {
        state.autres.push(autres)
    },
    DEL_AUTRES: (state, autres) => {
        state.autres = state.autres.filter((value, index, array) => {
            return value.id != autres;
        });
    },
    UPD_AUTRES: (state, autres) => {
        state.autres.forEach(element => {
            if (element.id == autres.id) {
                let index = state.autres.indexOf(element)
                state.autres[index] = autres
            }
        });
    }
}
const actions = {
    SAVE_AUTRES: ({ commit }, autres) => {
        commit('ADD_AUTRES', autres)
    },
    DELETE_AUTRES: ({ commit }, autres) => {
        commit('DEL_AUTRES', autres)
    },
    UPDATE_AUTRES: ({ commit }, autres) => {
        commit('UPD_AUTRES', autres)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}
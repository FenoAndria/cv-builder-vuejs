const state = {
    experiences: [],
    experience: ''
}
const getters = {
    EXPERIENCES: (state) => state.experiences,
    EXPERIENCE: (state) => state.experience,
}
const mutations = {
    SET_EXPERIENCE: (state, experience) => state.experience = experience,
    ADD_EXPERIENCE: (state, experience) => {
        state.experiences.push(experience)
    }
}
const actions = {
    SAVE_EXPERIENCE: ({ commit }, experience) => {
        commit('ADD_EXPERIENCE', experience)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}
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
    SET_EXPERIENCES: (state, experiences) => state.experiences = experiences,
    ADD_EXPERIENCE: (state, experience) => {
        state.experiences.push(experience)
    },
    DEL_EXP: (state, experience) => {
        state.experiences = state.experiences.filter((value, index, array) => {
            return value.id != experience;
        });
    },
    UPD_EXP: (state, experience) => {
        state.experiences.forEach(element => {
            if (element.id == experience.id) {
                let index = state.experiences.indexOf(element)
                state.experiences[index] = experience
            }
        });
    }
}
const actions = {
    SAVE_EXPERIENCE: ({ commit }, experience) => {
        commit('ADD_EXPERIENCE', experience)
    },
    DELETE_EXPERIENCE: ({ commit }, experience) => {
        commit('DEL_EXP', experience)
    },
    UPDATE_EXPERIENCE: ({ commit }, experience) => {
        commit('UPD_EXP', experience)
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}
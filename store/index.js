export const state = () => ({
    categories: null,
    sliders: []
})

export const getters = {
    categories(state) {
        return state.categories
    },
    sliders(state) {
        return state.sliders
    },
}

export const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories
    },
    SET_SLIDERS(state, sliders) {
        state.sliders = sliders
    },
}

export const actions = {
    async nuxtServerInit({ commit, dispatch }) {
        try {
            let response = await this.$axios.$get('categories')
            commit('SET_CATEGORIES', response.categories)
            commit('SET_SLIDERS', response.sliders)
        } catch (error) {
            console.error(error);
        }
    },
}
import Vuex from 'vuex'
import { VuexPersistence } from 'vuex-persist'

import APropos from './APropos'
import Experiences from './Experiences'

const vuexLocal = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
})

const store = new Vuex.Store({
    modules: {
        APropos,
        Experiences,
    },
    plugins: [vuexLocal.plugin]
})
export default store
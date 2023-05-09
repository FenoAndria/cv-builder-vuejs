import Vuex from 'vuex'
import { VuexPersistence } from 'vuex-persist'

import APropos from './APropos'

const vuexLocal = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
})

const store = new Vuex.Store({
    modules: {
        APropos
    },
    plugins: [vuexLocal.plugin]
})
export default store
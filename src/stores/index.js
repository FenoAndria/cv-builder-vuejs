import Vuex from 'vuex'
import { VuexPersistence } from 'vuex-persist'

import APropos from './APropos'
import Experiences from './Experiences'
import Formations from './Formations'
import Langues from './Langues'

const vuexLocal = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
})

const store = new Vuex.Store({
    modules: {
        APropos,
        Experiences,
        Formations,
        Langues,
    },
    plugins: [vuexLocal.plugin]
})
export default store
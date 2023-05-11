import Vuex from 'vuex'
import { VuexPersistence } from 'vuex-persist'

import APropos from './APropos'
import Experiences from './Experiences'
import Formations from './Formations'
import Langues from './Langues'
import Competences from './Competences'

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
        Competences,
    },
    plugins: [vuexLocal.plugin]
})
export default store
<template>
  <Main title="Langues" :add="addLangue" >
    <div class="">
      <div v-if="langues.length > 0">
        <div v-for="langue in langues">
          <LangueRepeater :langue="langue" @loadLangues="loadLangues" @deleteLangue="this.deleteLangue" />
        </div>
      </div>
      <div class="font-bold text-error" v-else>Aucune langue enregistrée</div>
    </div>
  </Main>
</template>
<script>
import { mapGetters } from "vuex";
import Main from "../components/Layouts/Main.vue";
import LangueRepeater from "../components/Layouts/LangueRepeater.vue";
export default {
  name: "Langues",
  data() {
    return {
      langues: [],
    };
  },
  components: {
    Main,
    LangueRepeater,
  },
  computed: {
    ...mapGetters(["LANGUES"]),
  },
  methods: {
    loadLangues() {
      this.langues = [...this.LANGUES];
    },
    addLangue() {
      // uuid
      console.log(this.langues);
      this.langues = [
        { id: Math.floor(Math.random() * 1000) },
        ...this.langues,
      ];
    },
    deleteLangue(id) {
      this.$store.dispatch("DELETE_LANGUE", id);
      this.loadLangues();
    },
  },
  mounted() {
    this.loadLangues();
  },
};
</script>
<template>
  <Main title="Compétences" :add="addCompetence" >
    <div class="">
      <div v-if="competences.length > 0">
        <div v-for="competence in competences">
          <CompetenceRepeater :competence="competence" @loadCompetences="loadCompetences" @deleteCompetence="this.deleteCompetence" />
        </div>
      </div>
      <div class="font-bold text-error" v-else>Aucune compétence enregistrée</div>
    </div>
  </Main>
</template>
<script>
import { mapGetters } from "vuex";
import Main from "../components/Layouts/Main.vue";
import CompetenceRepeater from "../components/Layouts/CompetenceRepeater.vue";
export default {
  name: "Competences",
  data() {
    return {
      competences: [],
    };
  },
  components: {
    Main,
    CompetenceRepeater,
  },
  computed: {
    ...mapGetters(["COMPETENCES"]),
  },
  methods: {
    loadCompetences() {
      this.competences = [...this.COMPETENCES];
    },
    addCompetence() {
      // uuid
      console.log(this.competences);
      this.competences = [
        { id: Math.floor(Math.random() * 1000) },
        ...this.competences,
      ];
    },
    deleteCompetence(id) {
      this.$store.dispatch("DELETE_COMPETENCE", id);
      this.loadCompetences();
    },
  },
  mounted() {
    this.loadCompetences();
  },
};
</script>
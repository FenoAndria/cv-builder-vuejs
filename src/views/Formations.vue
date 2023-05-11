<template>
  <Main>
    <h1 class="text-3xl">Formations</h1>
    <div class="">
      <button class="btn btn-primary btn-xs" @click="addFormation">
        <i class="bi bi-plus"></i>
      </button>
      <div v-if="formations.length > 0">
        <div v-for="formation in formations">
          <FormationRepeater :formation="formation" @delFormation="this.delFormation" />
          {{ formation.test }}
        </div>
      </div>
      <div class="font-bold text-error" v-else>
        Aucune formation enregistrées
      </div>
    </div>
  </Main>
</template>
<script>
import Main from "../components/Layouts/Main.vue";
import FormationRepeater from "../components/Layouts/FormationRepeater.vue";
import { mapGetters } from "vuex";

export default {
  name: "Formations",
  data() {
    return {
      formations: [{ test: "eç" }],
    };
  },
  components: {
    Main,
    FormationRepeater,
  },
  computed: {
    ...mapGetters(["FORMATIONS"]),
  },
  methods: {
    loadFormations() {
      this.formations = [...this.FORMATIONS];
    },
    addFormation() {
      // uuid
      this.formations = [
        { id: Math.floor(Math.random() * 1000) },
        ...this.formations,
      ];
    },
    delFormation(id) {
      this.$store.dispatch("DELETE_FORMATION", id);
      this.loadFormations();
    },
  },
  mounted() {
    this.loadFormations();
  },
};
</script>
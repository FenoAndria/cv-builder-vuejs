<template>
  <Main title="Formations" :add="addFormation">
    <div class="">
      <div v-if="formations.length > 0">
        <div v-for="formation in formations">
          <FormationRepeater
            :formation="formation"
            @loadFormations="loadFormations"
            @delFormation="this.delFormation"
          />
        </div>
      </div>
      <div class="font-bold text-error" v-else>
        Aucune formation enregistrée
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
      formations: [],
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
      this.formations = [{ id: this.$uuid() }, ...this.formations];
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
<template>
  <Card>
    <BtnDelete @click="deleteCompetence(this.competence.id)" />
    <form
      @submit.prevent="save(this.competence.id)"
      :id="'formulaireCompetence' + this.competence.id"
    >
      <div class="flex space-x-2">
        <div class="w-1/2">
          <label for="">Nom</label>
          <input
            type="text"
            :name="'nom' + this.competence.id"
            :value="this.competence.nom"
          />
        </div>
        <div class="w-1/2">
          <label class="block">Evaluation</label>
          <div class="rating">
            <input
              type="radio"
              class="mask mask-star"
              v-for="(item, index) in (1, 5)"
              :key="index"
              :value="item"
              :checked="item == this.competence.evaluation"
              :name="'evaluation' + this.competence.id"
            />
          </div>
        </div>
      </div>
      <div class="mt-2">
        <button class="btn btn-block btn-sm">Enregistrer</button>
      </div>
    </form>
  </Card>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "./Card.vue";
import BtnDelete from "./BtnDelete.vue";
export default {
  name: "CompetenceRepeater",
  props: ["competence"],
  data() {
    return {
      competenceData: "",
    };
  },
  components: {
    Card,
    BtnDelete,
  },
  computed: {
    ...mapGetters(["COMPETENCES"]),
  },
  methods: {
    save(id) {
      let form = new FormData(
        document.getElementById("formulaireCompetence" + id)
      );
      this.competenceData = {
        id,
        nom: form.get("nom" + id),
        evaluation: form.get("evaluation" + id) ?? 5,
      };
      this.$emit("saveCompetence", { ...this.competenceData });
      // location.reload()
    },
    deleteCompetence(id) {
      this.$emit("deleteCompetence", id);
    },
  },
};
</script>
<style lang="postcss">
</style>
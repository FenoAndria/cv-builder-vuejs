<template>
  <Card >
    <div class="flex justify-between">
      <span></span>
      <button
        class="btn btn-xs btn-error text-white"
        @click="deleteFormation(this.formation.id)"
      >
        -
      </button>
    </div>
    <form
      @submit.prevent="save(this.formation.id)"
      :id="'formulaireFormation' + this.formation.id"
    >
      <div class="flex space-x-2">
        <div class="w-1/2">
          <div class="">
            <label for="">Titre de la formation</label>
            <input
              type="text"
              :name="'titre' + this.formation.id"
              :value="this.formation.titre"
            />
          </div>
        </div>
        <div class="w-1/2">
          <div class="">
            <label for="">Diplôme (ou certificat)</label>
            <input
              type="text"
              :name="'diplome' + this.formation.id"
              :value="this.formation.diplome"
            />
          </div>
        </div>
      </div>
      <div class="flex space-x-2">
        <div class="w-1/2">
          <label for="">Etablissement</label>
          <input
            type="text"
            :name="'etablissement' + this.formation.id"
            :value="this.formation.etablissement"
          />
        </div>
        <div class="w-1/2">
          <label for="">Adresse de l'établissement</label>
          <input
            type="text"
            :name="'adresse_etablissement' + this.formation.id"
            :value="this.formation.adresse_etablissement"
          />
        </div>
      </div>
      <div class="">
        <label for="">Description</label>
        <textarea
          id=""
          cols="30"
          rows="1"
          :name="'description' + this.formation.id"
          :value="this.formation.description"
        ></textarea>
      </div>
      <div class="flex space-x-2">
        <div class="w-1/2">
          <label for="">Début</label>
          <input
            type="date"
            :name="'date_debut' + this.formation.id"
            :value="this.formation.date_debut"
          />
        </div>
        <div class="w-1/2">
          <label for="">Fin</label>
          <input
            type="date"
            :name="'date_fin' + this.formation.id"
            :value="this.formation.date_fin"
          />
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
export default {
  name: "FormationRepeater",
  props: ["formation"],
  data() {
    return {
      formationData: "",
    };
  },
  components:{
    Card
  },
  computed: {
    ...mapGetters(["FORMATIONS"]),
  },
  methods: {
    save(id) {
      let form = new FormData(
        document.getElementById("formulaireFormation" + id)
      );
      this.formationData = {
        id,
        titre: form.get("titre" + id),
        diplome: form.get("diplome" + id),
        etablissement: form.get("etablissement" + id),
        adresse_etablissement: form.get("adresse_etablissement" + id),
        description: form.get("description" + id),
        date_debut: form.get("date_debut" + id),
        date_fin: form.get("date_fin" + id),
      };
      console.log(this.formationData);
      if (!this.formationExists(id)) {
        this.$store.dispatch("SAVE_FORMATION", this.formationData);
      } else {
        this.$store.dispatch("UPDATE_FORMATION", this.formationData);
      }
      this.$emit('loadFormations')
    },
    deleteFormation(id) {
      this.$emit("delFormation", id);
    },
    formationExists(id) {
      return this.FORMATIONS.some((value, index, array) => {
        return value.id == id;
      });
    },
  },
};
</script>
<style lang="postcss">
.exp-repeater {
  @apply bg-slate-600 p-2 rounded my-1;
}
.exp-repeater input {
  @apply input input-xs;
}
</style>
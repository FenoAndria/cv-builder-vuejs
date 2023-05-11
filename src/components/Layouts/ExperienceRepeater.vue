<template>
  <div class="exp-repeater">
    <div class="flex justify-between">
      <span></span>
      <button
        class="btn btn-xs btn-error text-white"
        @click="deleteExp(this.experience.id)"
      >
        -
      </button>
    </div>
    <form
      @submit.prevent="save(this.experience.id)"
      :id="'formulaire' + this.experience.id"
    >
      <div class="">
        <label for="">Titre du poste</label>
        <input
          type="text"
          :name="'titre_poste' + this.experience.id"
          :value="this.experience.titre_poste"
        />
      </div>
      <div class="flex space-x-2">
        <div class="w-1/2">
          <label for="">Société</label>
          <input
            type="text"
            :name="'societe' + this.experience.id"
            :value="this.experience.societe"
          />
        </div>
        <div class="w-1/2">
          <label for="">Adresse de la société</label>
          <input
            type="text"
            :name="'adresse_societe' + this.experience.id"
            :value="this.experience.adresse_societe"
          />
        </div>
      </div>
      <div class="">
        <label for="">Description</label>
        <textarea
          id=""
          cols="30"
          rows="1"
          :name="'description' + this.experience.id"
          :value="this.experience.description"
        ></textarea>
      </div>
      <div class="flex space-x-2">
        <div class="w-1/2">
          <label for="">Début</label>
          <input
            type="date"
            :name="'date_debut' + this.experience.id"
            :value="this.experience.date_debut"
          />
        </div>
        <div class="w-1/2">
          <label for="">Fin</label>
          <input
            type="date"
            :name="'date_fin' + this.experience.id"
            :value="this.experience.date_fin"
          />
        </div>
      </div>
      <div class="mt-2">
        <button class="btn btn-block btn-sm">Enregistrer</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ExperienceRepeater",
  props: ["experience"],
  data() {
    return {
      experienceData: "",
    };
  },
  computed: {
    ...mapGetters(["EXPERIENCES"]),
  },
  methods: {
    save(id) {
      let form = new FormData(document.getElementById("formulaire" + id));
      this.experienceData = {
        id,
        titre_poste: form.get("titre_poste" + id),
        societe: form.get("societe" + id),
        adresse_societe: form.get("adresse_societe" + id),
        description: form.get("description" + id),
        date_debut: form.get("date_debut" + id),
        date_fin: form.get("date_fin" + id),
      };
      if (!this.expExists(id)) {
        this.$store.dispatch("SAVE_EXPERIENCE", this.experienceData);
      } else {
        this.$store.dispatch("UPDATE_EXPERIENCE", this.experienceData);
      }
    },
    deleteExp(id) {
      this.$emit("fafao", id);
    },
    expExists(id) {
      return this.EXPERIENCES.some((value, index, array) => {
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
<template>
  <div class="exp-repeater">
    <div class="flex justify-between">
      <h4>{{ this.param }}</h4>
      <button class="btn btn-xs btn-error text-white" @click="deleteExp(this.param.id)">-</button>
    </div>
    <form
      @submit.prevent="save(this.param.id)"
      :id="'formulaire' + this.param.id"
    >
      <div class="">
        <label for="">Titre du poste</label>
        <input type="text" :name="'titre_poste' + this.param.id" />
      </div>
      <div class="flex space-x-2">
        <div class="w-1/2">
          <label for="">Société</label>
          <input type="text" :name="'societe' + this.param.id" />
        </div>
        <div class="w-1/2">
          <label for="">Adresse de la société</label>
          <input type="text" :name="'adresse_societe' + this.param.id" />
        </div>
      </div>
      <div class="">
        <label for="">Description</label>
        <textarea
          id=""
          cols="30"
          rows="1"
          :name="'description' + this.param.id"
        ></textarea>
      </div>
      <div class="flex space-x-2">
        <div class="w-1/2">
          <label for="">Début</label>
          <input type="date" :name="'date_debut' + this.param.id" />
        </div>
        <div class="w-1/2">
          <label for="">Fin</label>
          <input type="date" :name="'date_fin' + this.param.id" />
        </div>
      </div>
      <div class="space-x-2">
        <label for="">En cours</label>
        <input
          type="checkbox"
          :name="'en_cours' + this.param.id"
          class="checkbox checkbox-xs checkbox-accent inline"
        />
      </div>
      <div class="">
        <button class="btn btn-block btn-sm">Enregistrer</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ExperienceRepeater",
  props: ["param"],
  data() {
    return {
      experience: "",
    };
  },
  computed: {
    ...mapGetters(["EXPERIENCES"]),
  },
  methods: {
    save(id) {
      let form = new FormData(document.getElementById("formulaire" + id));
      (this.experience = {
        id,
        titre_poste: form.get("titre_poste" + id),
        societe: form.get("societe" + id),
        adresse_societe: form.get("adresse_societe" + id),
        description: form.get("description" + id),
        date_debut: form.get("date_debut" + id),
        date_fin: form.get("date_fin" + id),
        en_cours: form.get("en_cours" + id),
      }),
        console.log(this.expExists(id));
      if (!this.expExists(id)) {
        this.$store.dispatch("SAVE_EXPERIENCE", this.experience);
      }
    },
    deleteExp(id){
        this.$emit('fafao',id)
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
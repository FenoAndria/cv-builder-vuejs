<template>
  <form @submit.prevent="save" id="formulaire" class="exp-repeater">
    <div class="">
      <label for="">Titre du poste</label>
      <input type="text" name="titre_poste" />
    </div>
    <div class="flex space-x-2">
      <div class="w-1/2">
        <label for="">Société</label>
        <input type="text" name="societe" />
      </div>
      <div class="w-1/2">
        <label for="">Adresse de la société</label>
        <input type="text" name="adresse_societe" />
      </div>
    </div>
    <div class="">
      <label for="">Description</label>
      <textarea id="" cols="30" rows="1" name="description"></textarea>
    </div>
    <div class="flex space-x-2">
      <div class="w-1/2">
        <label for="">Début</label>
        <input type="date" name="date_debut" />
      </div>
      <div class="w-1/2">
        <label for="">Fin</label>
        <input type="date" name="date_fin" />
      </div>
    </div>
    <div class="space-x-2">
      <label for="">En cours</label>
      <input type="checkbox" name="en_cours" class="checkbox checkbox-xs checkbox-accent inline" />
    </div>
    <div class="">
      <button class="btn btn-block btn-sm">Enregistrer</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "ExperienceRepeater",
  methods: {
    save() {
      let form = new FormData(document.getElementById("formulaire"));
      (this.experience = {
        titre_poste: form.get("titre_poste"),
        societe: form.get("societe"),
        adresse_societe: form.get("adresse_societe"),
        description: form.get("description"),
        date_debut: form.get("date_debut"),
        date_fin: form.get("date_fin"),
        en_cours: form.get("en_cours"),
      }),
        // this.$store.dispatch("SAVE_EXPERIENCE", this.experience);
        (this.experience = "");
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
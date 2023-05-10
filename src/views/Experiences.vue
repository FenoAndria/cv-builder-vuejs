<template>
  <Main>
    <h1 class="text-3xl">Expériences</h1>
    <div class="">
      <form @submit.prevent="save" id="formulaire">
        <div class="">
          <label for="">Titre du poste</label>
          <input type="text" name="titre_poste" />
        </div>
        <div class="">
          <label for="">Société</label>
          <input type="text" name="societe" />
        </div>
        <div class="">
          <label for="">Adresse de la société</label>
          <input type="text" name="adresse_societe" />
        </div>
        <div class="">
          <label for="">Description</label>
          <textarea id="" cols="30" rows="1" name="description"></textarea>
        </div>
        <div class="">
          <label for="">Début</label>
          <input type="date" name="date_debut" />
        </div>
        <div class="">
          <label for="">Fin</label>
          <input type="date" name="date_fin" />
        </div>
        <div class="">
          <label for="">En cours</label>
          <input
            type="checkbox"
            name="en_cours"
            class="checkbox checkbox-accent"
          />
        </div>
        <div class="">
          <button class="btn btn-block btn-sm">Enregistrer</button>
        </div>
      </form>
    </div>
  </Main>
</template>
<script>
import Main from "../components/Layouts/Main.vue";

export default {
  name: "Experiences",
  data() {
    return {
      experience: {
        titre_poste: "",
        societe: "",
        adresse_societe: "",
        description: "",
        date_debut: "",
        date_fin: "",
        en_cours: false,
      },
    };
  },
  components: {
    Main,
  },
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
      this.$store.dispatch("SAVE_EXPERIENCE", this.experience);
      this.experience = ''
    },
  },
};
</script>
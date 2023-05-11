<template>
  <Main title="A Propos">
    <div class="space-y-2">
      <form @submit.prevent="save" id="formulaire">
        <div class="">
          <label for="">Photo</label>
          <FilePond
            ref="pond"
            class-name="my-pond"
            label-idle="Téleverser votre photo..."
            allow-multiple="false"
            id="photofile"
            name="photofile"
          />
        </div>
        <div class="">
          <label for="">Nom</label>
          <input type="text" name="nom" :value="PROFIL.nom" />
        </div>
        <div class="">
          <label for="">Prénom(s)</label>
          <input type="text" name="prenom" :value="PROFIL.prenom" />
        </div>
        <div class="">
          <label for="">Date de naissance</label>
          <input
            type="date"
            name="dateNaissance"
            :value="PROFIL.dateNaissance"
          />
        </div>
        <div class="">
          <label for="">Adresse</label>
          <input type="text" name="adresse" :value="PROFIL.adresse" />
        </div>
        <div class="">
          <label for="">Téléphone</label>
          <input type="text" name="telephone" :value="PROFIL.telephone" />
        </div>
        <div class="">
          <label for="">Email</label>
          <input type="text" name="email" :value="PROFIL.email" />
        </div>
        <div class="">
          <button class="btn btn-block">Enregistrer</button>
        </div>
      </form>
    </div>
  </Main>
</template>
<script>
import { mapGetters } from "vuex";
import Main from "../components/Layouts/Main.vue";
import "filepond/dist/filepond.min.css";
import vueFilePond from "vue-filepond";
const FilePond = vueFilePond();

export default {
  name: "APropos",
  data() {
    return {
      profil: "",
    };
  },
  components: {
    Main,
    FilePond,
  },
  computed: {
    ...mapGetters(["PROFIL"]),
    // nom: {
    //   get() {
    //     return this.PROFIL.nom;
    //   },
    //   set(value) {
    //     this.$store.commit("SET_PROFIL", { ...PROFIL, nom: value });
    //   },
    // },
  },
  methods: {
    save() {
      let form = new FormData(document.getElementById("formulaire"));
      this.profil = {
        nom: form.get("nom"),
        prenom: form.get("prenom"),
        dateNaissance: form.get("dateNaissance"),
        adresse: form.get("adresse"),
        telephone: form.get("telephone"),
        email: form.get("email"),
      };
      this.$store.dispatch("SAVE_APROPOS", this.profil);

      let photoFile = this.$refs.pond.getFiles()[0];
      if (photoFile) {
        const reader = new FileReader();
        reader.readAsDataURL(photoFile.file);
        reader.addEventListener("load", () => {
          localStorage.setItem("photo", reader.result);
          location.reload();
        });
      }
    },
  },
};
</script>
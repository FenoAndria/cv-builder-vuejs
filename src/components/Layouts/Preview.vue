<template>
  <div class="bg-maroon fixed top-0 right-0 h-screen" id="preview-content" >
    <h1 class="text-center">PREVIEW</h1>
    <div class="">
      <div class="">
        <div class="" v-if="PROFIL">
          <img
            src=""
            alt="Photo"
            id="photo"
            class="rounded-full h-24 w-24 object-cover float-right"
          />
          <div class="">
            <p>Nom : {{ PROFIL.nom }}</p>
            <p>Prénom(s) : {{ PROFIL.prenom }}</p>
            <p>
              Date de naissance :
              {{
                PROFIL.dateNaissance
                  ? this.$dayjs(PROFIL.dateNaissance).format("DD MMM YYYY")
                  : ""
              }}
            </p>
            <p>Adresse: {{ PROFIL.adresse }}</p>
          </div>
        </div>
        <div v-else>PROFIL VIDE!</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Preview",
  data() {
    return {
      profil: "",
    };
  },
  computed: {
    ...mapGetters(["PROFIL"]),
  },
  methods: {
    loadProfil() {
      console.log("loadProfil");
    },
  },
  mounted() {
    this.profil = this.PROFIL;
    const photo = localStorage.getItem("photo");
    const photoDom = document.getElementById("photo");
    if (photo) {
      photoDom.setAttribute("src", photo);
    }
  },
};
</script>
<style lang="postcss">
#preview-content {
  width: 500px;
}
#photo {
}
</style>
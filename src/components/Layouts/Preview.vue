<template>
  <div class="bg-maroon fixed top-0 right-0 h-screen" id="preview-content">
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
            <p>Téléphone: {{ PROFIL.telephone }}</p>
            <p>Email: {{ PROFIL.email }}</p>
          </div>
        </div>
        <div v-else>PROFIL VIDE!</div>
      </div>
      <div class="">
        <h3 class="text-xl">Expériences</h3>
        <hr />
        <div v-if="EXPERIENCES">
          <div class="" v-for="(exp, expIndex) in EXPERIENCES" :key="expIndex">
            <h4 class="text-lg font-semibold">
              {{ exp.titre_poste }}
            </h4>
            <h4 class="text-sm">{{ exp.societe }} {{ exp.adresse_societe }}</h4>
            <h4 class="text-sm">
              {{ this.$dayjs(exp.date_debut).format("DD MMM YYYY") }} -
              {{ this.$dayjs(exp.date_fin).format("DD MMM YYYY") }}
            </h4>
          </div>
        </div>
      </div>
      <div class="">
        <h3 class="text-xl">Formations</h3>
        <hr />
        <div v-if="FORMATIONS">
          <div
            class=""
            v-for="(formation, formationIndex) in FORMATIONS"
            :key="formationIndex"
          >
            <h4 class="text-lg font-semibold">
              {{ formation.titre }} - {{ formation.diplome }}
            </h4>
            <h4 class="text-sm">
              {{ formation.etablissement }}
              {{ formation.adresse_etablissement }}
            </h4>
            <h4 class="text-sm">
              {{ this.$dayjs(formation.date_debut).format("DD MMM YYYY") }} -
              {{ this.$dayjs(formation.date_fin).format("DD MMM YYYY") }}
            </h4>
          </div>
        </div>
      </div>
      <div class="">
        <h3 class="text-xl">Langues</h3>
        <hr />
        <div v-if="LANGUES">
          <div
            class=""
            v-for="(langue, langueIndex) in LANGUES"
            :key="langueIndex"
          >
            <h4 class="text-lg font-semibold">
              {{ langue.nom }}
            </h4>
            <h4 class="text-lg font-semibold">
              {{ langue.evaluation }}
            </h4>
          </div>
        </div>
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
    ...mapGetters(["PROFIL", "EXPERIENCES", "FORMATIONS", "LANGUES"]),
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
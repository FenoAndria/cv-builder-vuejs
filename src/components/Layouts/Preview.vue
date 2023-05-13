<template>
  <div class="bg-white fixed top-0 right-0 h-screen" id="preview-container">
    <div class="p-4 text-dark" id="to-pdf">
      <div class="">
        <div
          class="flex justify-between items-center"
          v-if="PROFIL"
          id="profil-info"
        >
          <div>
            <p class="text-xl font-semibold text-default">
              {{ PROFIL.nom }} {{ PROFIL.prenom }}
            </p>
            <div class="text-lg">
              <p class="">
                <i class="bi bi-person-heart"></i>
                {{
                  PROFIL.dateNaissance
                    ? this.$dayjs(PROFIL.dateNaissance).format("DD MMM YYYY")
                    : ""
                }}
              </p>
              <p><i class="bi bi-geo-alt"></i> {{ PROFIL.adresse }}</p>
              <p><i class="bi bi-phone"></i> {{ PROFIL.telephone }}</p>
              <p><i class="bi bi-envelope"></i> {{ PROFIL.email }}</p>
            </div>
          </div>
          <img
            src=""
            alt="Photo"
            id="photo"
            class="rounded-full h-32 w-32 object-cover shadow"
          />
        </div>
        <div v-else>PROFIL VIDE!</div>
      </div>
      <div class="flex space-x-2 mt-2">
        <div class="w-3/5">
          <div class="">
            <div class="">
              <h3 class="section-title">Expériences</h3>
              <div v-if="EXPERIENCES">
                <div
                  class=""
                  v-for="(exp, expIndex) in EXPERIENCES"
                  :key="expIndex"
                >
                  <h4 class="text-xl font-semibold text-gray-500">
                    {{ exp.titre_poste }}
                  </h4>
                  <div class="pl-2">
                    <h4 class="text-base font-semibold">
                      <i class="bi bi-geo-alt text-xs"></i> {{ exp.societe }}
                      {{ exp.adresse_societe }}
                    </h4>
                    <h4 class="text-base">
                      <i class="bi bi-calendar-range text-xs"></i>
                      {{ this.$dayjs(exp.date_debut).format("DD MMM YYYY") }} -
                      {{ this.$dayjs(exp.date_fin).format("DD MMM YYYY") }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <h3 class="section-title">Formations</h3>
              <div v-if="FORMATIONS">
                <div
                  class=""
                  v-for="(formation, formationIndex) in FORMATIONS"
                  :key="formationIndex"
                >
                  <h4 class="text-xl font-semibold text-gray-500">
                    {{ formation.diplome }} - {{ formation.titre }}
                  </h4>
                  <div class="pl-2">
                    <h4 class="text-base font-semibold">
                      <i class="bi bi-geo-alt text-xs"></i>
                      {{ formation.etablissement }}
                      {{ formation.adresse_etablissement }}
                    </h4>
                    <h4 class="text-base">
                      <i class="bi bi-calendar-range text-xs"></i>
                      {{
                        this.$dayjs(formation.date_debut).format("DD MMM YYYY")
                      }}
                      -
                      {{
                        this.$dayjs(formation.date_fin).format("DD MMM YYYY")
                      }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2/5">
          <div class="">
            <div class="">
              <h3 class="section-title">Compétences</h3>
              
              <div v-if="COMPETENCES">
                <div
                  class=""
                  v-for="(competence, competenceIndex) in COMPETENCES"
                  :key="competenceIndex"
                >
                  <div class="competence-container">
                    <span class="competence-nom">{{ competence.nom }}</span>
                    <span class="competence-evaluation"
                      ><i
                        v-for="i in (1, 5)"
                        :class="
                          i <= competence.evaluation
                            ? 'bi-star-fill'
                            : 'bi-star'
                        "
                      ></i
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <h3 class="section-title">Langues</h3>
              
              <div v-if="LANGUES">
                <div
                  class=""
                  v-for="(langue, langueIndex) in LANGUES"
                  :key="langueIndex"
                >
                  <div class="competence-container">
                    <span class="competence-nom">
                      {{ langue.nom }}
                    </span>
                    <span class="competence-evaluation">
                      <i
                        v-for="i in (1, 5)"
                        :class="
                          i <= langue.evaluation ? 'bi-star-fill' : 'bi-star'
                        "
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-4 right-4 absolute">
      <button
        class="btn btn-xl btn-primary text-white btn-circle text-xl"
        @click="exportToPDF"
      >
        <i class="bi bi-printer"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import html2pdf from "html2pdf.js";
export default {
  name: "Preview",
  data() {
    return {
      profil: "",
    };
  },
  computed: {
    ...mapGetters([
      "PROFIL",
      "EXPERIENCES",
      "FORMATIONS",
      "LANGUES",
      "COMPETENCES",
    ]),
  },
  methods: {
    exportToPDF() {
      const opt = {
        filename: "CV.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a5" },
        image: {
          type: "jpeg",
          quality: 0.9,
        },
      };
      html2pdf()
        .set(opt)
        .from(document.getElementById("to-pdf"))
        .output("dataurlnewwindow");
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
#preview-container {
  width: 500px;
  @apply leading-snug p-2;
}
#profil-info {
  @apply  rounded-lg;
}
#profil-info i {
  @apply text-sm text-gray-700 ;
}
.section-title {
  @apply text-2xl font-semibold text-default rounded ;
}
.competence-container {
  @apply flex items-center justify-between text-xl;
}
.competence-nom {
  @apply text-gray-600;
}
.competence-evaluation {
  @apply text-xs text-gray-600 mr-0.5;
}
</style>
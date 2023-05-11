<template>
  <Main>
    <h1 class="text-3xl">Expériences</h1>
    <div class="">
      <button class="btn btn-primary btn-xs" @click="addExp">
        <i class="bi bi-plus"></i>
      </button>
      <div v-if="experiences.length > 0">
        <div v-for="exp in this.experiences">
          <ExperienceRepeater :experience="exp" @loadExperiences="loadExperiences" @deleteExperience="this.deleteExperience" />
        </div>
      </div>
      <div class="font-bold text-error" v-else>
        Aucune expérience enregistrée
      </div>
    </div>
  </Main>
</template>
<script>
import Main from "../components/Layouts/Main.vue";
import ExperienceRepeater from "../components/Layouts/ExperienceRepeater.vue";
import { mapGetters } from "vuex";

export default {
  name: "Experiences",
  data() {
    return {
      experiences: [],
    };
  },
  components: {
    Main,
    ExperienceRepeater,
  },
  computed: {
    ...mapGetters(["EXPERIENCES"]),
  },
  methods: {
    loadExperiences() {
      this.experiences = [...this.EXPERIENCES];
    },
    addExp() {
      // uuid
      this.experiences = [
        { id: Math.floor(Math.random() * 1000) },
        ...this.experiences,
      ];
    },
    deleteExperience(id) {
      this.$store.dispatch("DELETE_EXPERIENCE", id);
      this.loadExperiences();
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>
<template>
  <Main title="Expériences" :add="addExp">
    <div class="">
      <div v-if="experiences.length > 0">
        <div v-for="exp in this.experiences">
          <ExperienceRepeater
            :experience="exp"
            @loadExperiences="loadExperiences"
            @deleteExperience="this.deleteExperience"
          />
        </div>
      </div>
      <div class="no-record-message" v-else>
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
      this.experiences = [{ id: this.$uuid() }, ...this.experiences];
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
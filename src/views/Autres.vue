<template>
  <Main title="Autres" :add="addAutresRepeater">
    <div class="">
      <div v-if="autres.length > 0">
        <div v-for="autre in autres">
          <AutresRepeater :autres="autre" @deleteAutre="this.deleteAutre" @saveAutre="saveAutres"/>
        </div>
      </div>
      <div class="font-bold text-error" v-else>
        Aucune compétence enregistrée
      </div>
    </div>
  </Main>
</template>
<script>
import { mapGetters } from "vuex";
import Main from "../components/Layouts/Main.vue";
import AutresRepeater from "../components/Layouts/AutresRepeater.vue";
export default {
  name: "Autres",
  data() {
    return {
      autres: [],
    };
  },
  components: {
    Main,
    AutresRepeater,
  },
  computed: {
    ...mapGetters(["AUTRES"]),
  },
  methods: {
    loadAutres() {
      this.autres = [...this.AUTRES];
    },
    addAutresRepeater() {
      this.autres = [{ id: this.$uuid() }, ...this.autres];
    },
    deleteAutre(id) {
      if (this.autresExists(id)) {
        this.$store.dispatch("DELETE_AUTRES", id);
      this.loadAutres()
      } else {
        this.autres = this.autres.filter((value, index, array) => {
          return value.id != id;
        });
      }
    },
    saveAutres(autres) {
      if (!this.autresExists(autres.id)) {
        this.$store.dispatch("SAVE_AUTRES", autres);
      } else {
        this.$store.dispatch("UPDATE_AUTRES", autres);
      }
      this.loadAutres()
    },
    autresExists(id) {
      return this.AUTRES.some((value, index, array) => {
        return value.id == id;
      });
    },
  },
  mounted() {
    this.loadAutres()
  },
};
</script>
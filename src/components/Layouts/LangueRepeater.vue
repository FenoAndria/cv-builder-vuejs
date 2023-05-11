<template>
  <div class="exp-repeater">
    <div class="flex justify-between">
      <span></span>
      <button
        class="btn btn-xs btn-error text-white"
        @click="deleteLangue(this.langue.id)"
      >
        -
      </button>
    </div>
    <form
      @submit.prevent="save(this.langue.id)"
      :id="'formulaireLangue' + this.langue.id"
    >
      <div class="">
        <label for="">Nom</label>
        <input
          type="text"
          :name="'nom' + this.langue.id"
          :value="this.langue.nom"
        />
      </div>
      <div class="">
        <label for="">Evaluation</label>
        <input
          type="text"
          :name="'evaluation' + this.langue.id"
          :value="this.langue.evaluation"
        />
      </div>
      <div class="mt-2">
        <button class="btn btn-block btn-sm">Enregistrer</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "LangueRepeater",
  props: ["langue"],
  data() {
    return {
      langueData: "",
    };
  },
  computed: {
    ...mapGetters(["LANGUES"]),
  },
  methods: {
    save(id) {
      let form = new FormData(document.getElementById("formulaireLangue" + id));
      this.langueData = {
        id,
        nom: form.get("nom" + id),
        evaluation: form.get("evaluation" + id),
      };
      console.log(this.langueData);
      if (!this.langueExists(id)) {
        this.$store.dispatch("SAVE_LANGUE", this.langueData);
      } else {
        this.$store.dispatch("UPDATE_LANGUE", this.langueData);
      }
      // location.reload()
    },
    deleteLangue(id) {
      this.$emit("deleteLangue", id);
    },
    langueExists(id) {
      return this.LANGUES.some((value, index, array) => {
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
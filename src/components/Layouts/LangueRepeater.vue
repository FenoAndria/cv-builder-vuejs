<template>
  <Card >
    <BtnDelete @click="deleteLangue(this.langue.id)" />
    <form
      @submit.prevent="save(this.langue.id)"
      :id="'formulaireLangue' + this.langue.id"
    >
      <div class="flex space-x-2">
        <div class="w-1/2">
          <label for="">Nom</label>
          <input
            type="text"
            :name="'nom' + this.langue.id"
            :value="this.langue.nom"
          />
        </div>
        <div class="w-1/2">
          <label class="block">Evaluation</label>
          <div class="rating">
            <input
              type="radio"
              class="mask mask-star text-primary"
              v-for="(item, index) in (1, 5)"
              :key="index"
              :value="item"
              :checked="item == this.langue.evaluation"
              :name="'evaluation' + this.langue.id"
            />
          </div>
        </div>
      </div>
      <div class="mt-2">
        <button class="btn btn-block btn-sm">Enregistrer</button>
      </div>
    </form>
  </Card>
</template>
<script>
import { mapGetters } from "vuex";
import Card from "./Card.vue";
import BtnDelete from "./BtnDelete.vue";
export default {
  name: "LangueRepeater",
  props: ["langue"],
  data() {
    return {
      langueData: "",
    };
  },
  components: {
    Card,
    BtnDelete
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
        evaluation: form.get("evaluation" + id) ?? 5,
      };
      if (!this.langueExists(id)) {
        this.$store.dispatch("SAVE_LANGUE", this.langueData);
      } else {
        this.$store.dispatch("UPDATE_LANGUE", this.langueData);
      }
      this.$emit("loadLangues");
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

</style>
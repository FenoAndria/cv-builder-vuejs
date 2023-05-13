<template>
  <Card>
    <BtnDelete @click="deleteAutre(autres.id)" />
    <form
      @submit.prevent="saveAutre(autres.id)"
      :id="'formulaireAutre' + autres.id"
    >
      <div class="w-1/2">
        <label for="">Nom</label>
        <input type="text" :name="'nom' + autres.id" :value="autres.nom" />
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
  name: "AutreRepeater",
  props: ["autres"],
  data() {
    return {
      autresData: "",
    };
  },
  components: {
    Card,
    BtnDelete,
  },
  computed: {
    ...mapGetters(["AUTRES"]),
  },
  methods: {
    saveAutre(id) {
       let form = new FormData(
        document.getElementById("formulaireAutre" + id)
      );
      this.autresData = {
        id,
        nom: form.get("nom" + id),
      };
      this.$emit("saveAutre", { ...this.autresData });
    },
    deleteAutre(id) {
      this.$emit("deleteAutre", id);
    },
  },
};
</script>
<style lang="postcss">
</style>
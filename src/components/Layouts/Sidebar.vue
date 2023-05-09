<template>
  <div class="fixed h-screen" id="sidebar">
    <div class="" id="sidebar-title">
      <h1 class="text-center text-3xl">CV Builder</h1>
    </div>
    <div class="">
      <div class="">
        <div class="" v-for="(link, linkIndex) in this.links" :key="linkIndex">
          <router-link :to="{ name: link.name }" active-class="nav-link-active">{{ link.tag }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      links: [
        { tag: "A Propos", name: "APropos" },
        { tag: "Experiences", name: "Experiences" },
        { tag: "Formations", name: "Formations" },
        { tag: "Langues", name: "Langues" },
        { tag: "Autres", name: "Autres" },
      ],
    };
  },
};
</script>
<style lang="postcss">
#sidebar {
  width: 250px;
}
</style>
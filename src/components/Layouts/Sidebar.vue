<template>
  <div class="fixed h-screen bg-light" id="sidebar">
    <div class="" id="sidebar-title">
      <h1 class="text-dark text-center text-3xl font-semibold">CV Builder</h1>
    </div>
    <div class="">
      <div class="space-y-2 p-2">
        <div v-for="(link, linkIndex) in this.links" :key="linkIndex">
          <router-link
            :to="{ name: link.name }"
            class="nav-link"
            active-class="nav-link-active"
            >{{ link.tag }}</router-link
          >
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
        { tag: "Expériences", name: "Experiences" },
        { tag: "Formations", name: "Formations" },
        { tag: "Compétences", name: "Competences" },
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
  @apply shadow-lg
}
.nav-link {
  @apply rounded px-4 py-2 block text-gray-600;
}
.nav-link-active,
.nav-link:hover {
  @apply bg-default text-white font-bold transition-all;
}
</style>
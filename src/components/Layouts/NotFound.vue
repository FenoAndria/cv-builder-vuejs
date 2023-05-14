<template>
  <div
    class="
      bg-default
      flex flex-col
      space-y-4
      h-screen
      justify-center
      items-center
    "
  >
    <h1 class="text-4xl">Page introuvable :(</h1>
    <router-link :to="{ name: 'Index' }">
      <button class="btn btn-primary"><i class="bi bi-arrow-left-circle mr-2 text-xl"></i> Revenir à l'accueil</button>
    </router-link>
  </div>
</template>
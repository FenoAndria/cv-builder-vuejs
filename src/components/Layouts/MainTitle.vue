<template>
  <div class="fixed-top px-2 py-1" id="main-title-container">
    <div
      class="
        flex
        justify-between
        bg-light
        py-2
        px-4
        shadow-lg
        font-semibold
        rounded-lg
        text-default text-2xl
      "
      id="main-title"
    >
      <div class="">
        {{ title }}
      </div>
      <div class="">
        <button class="btn btn-info btn-circle btn-sm text-white text-xl" v-if="add" @click="add">+</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainTitle",
  props: ["title", "add"],
};
</script>
<style lang="postcss">
#main-title-container {
  height: 55px;
  margin-left: 250px;
  margin-right: 500px;
  @apply bg-gray-400;
}
#main-title {
}
</style>
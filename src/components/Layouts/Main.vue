<template>
  <div class="flex">
    <Sidebar />
    <div class="bg-purple w-full" id="main-content">
      <slot></slot>
    </div>
    <Preview />
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
import Preview from "./Preview.vue";
export default {
  name: "Main",
  components: {
    Sidebar,
    Preview,
  },
};
</script>
<style lang="postcss">
#main-content {
  margin-left: 250px;
  margin-right: 500px;
}
</style>
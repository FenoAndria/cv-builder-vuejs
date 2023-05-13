<template>
  <div class="flex">
    <Sidebar />
      <MainTitle :title="title" :add="add"/>
    <div class="w-full p-2" id="main-content">
      <slot></slot>
    </div>
    <Preview />
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
import Preview from "./Preview.vue";
import MainTitle from "./MainTitle.vue";

export default {
  name: "Main",
  props: ["title",'add'],
  components: {
    Sidebar,
    Preview,
    MainTitle,
  },
};
</script>
<style lang="postcss">
#main-content {
  margin-left: 250px;
  margin-right: 500px;
  margin-top: 55px;
}
</style>
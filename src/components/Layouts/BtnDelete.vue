<template>
  <button class="btn-delete" >
    <i class="bi bi-trash"></i>
  </button>
</template>
<script>
export default {
  name: "BtnDelete",
//   props:['del']
};
</script>
<style lang="postcss">
.btn-delete {
  top: 5px;
  right: 5px;
  @apply btn btn-xs  btn-error font-bold text-white absolute;
}
</style>
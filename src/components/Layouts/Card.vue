<template>
  <div class="bg-light p-4 shadow-lg font-semibold rounded-lg text-gray-600 mb-2 card-content relative">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Card",
};
</script>
<style lang="postcss">
.card-content input{
    @apply input input-sm rounded-lg 
}
</style>
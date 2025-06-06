<script setup lang="ts">
</script>

<template>
  <div class="card-container flex justify-center items-center border-2 border-primary rounded-xl aspect-square shadow-md cursor-pointer">
    <span class="icon-container"><Icon name="teenyicons:pdf-outline" size="35" /></span>
  </div>
</template>

<style scoped>
  .card-container:hover {
    border-color: var(--color-danger);
  }

  .card-container:hover .icon-container {
    background-color: var(--color-danger);
    color: var(--color-white);
    transition: .3s;
  }
</style>
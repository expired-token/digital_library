<script setup lang="ts">
  import FileCard from "~/components/card/FileCard.vue";

  defineProps<{
    type: "file" | "section";
    route?: string;
    title: string;
    background?: string;
  }>();
</script>

<template>
  <div class="">
    <div v-show="type === 'file'" >
      <CardFileCard />
    </div>

    <div v-show="type === 'section'">
      <NuxtLink :to="route"><CardSectionCard /></NuxtLink>
    </div>

    <div class="text-center p-2">
      <h1 class="default-text">{{ title }}</h1>
    </div>
  </div>
</template>

<style scoped>

  .file-card-container:hover {
    border-color: var(--color-danger);
  }
  .file-card-container:hover .icon-container {
    background-color: var(--color-danger);
    color: var(--color-white);
  }
  .card:hover .card-container {
    box-shadow: 0 0;
  }

</style>
<script setup lang="ts">
  defineProps<{
    type: "file" | "section";
    route?: string;
    title: string;
    background?: string;
  }>();
</script>

<template>
  <div>
    <div v-show="type === 'file'" >
      <CardFileCard />
    </div>

    <div v-show="type === 'section'">
      <NuxtLink :to="route"><CardSectionCard /></NuxtLink>
    </div>

    <div class="text-center p-2 h-16">
      <h1 class="default-text">{{ title }}</h1>
    </div>
  </div>
</template>

<style scoped></style>
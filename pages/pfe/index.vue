<script setup lang="ts">

definePageMeta({
  title: "PFE",
  buttonExists: false,
})

const { data, error } = await useAsyncData('pdf-list-pfe', () => $fetch('/pdf-list-pfe.json'));

</script>

<template>

  <a v-for="pdf in data" :href="pdf.path" target="_blank">
    <Card
      :title="pdf.title"
      type="file"
    />
  </a>

</template>

<style scoped></style>

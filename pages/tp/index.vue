<script setup lang="ts">

// const tpListByYear: CardItem[] = [
//   {
//     title: "Tronc Commun",
//     route: '#',
//   },
//   {
//     title: "1ére Année",
//     route: '#',
//   },
//   {
//     title: "2ème Année",
//     route: '#',
//   }
// ];


definePageMeta({
  title: "travaux pratiques",
  buttonExists: false,
})

const { data, error } = await useAsyncData('pdf-list-tp', () => $fetch('/pdf-list-tp.json'));

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

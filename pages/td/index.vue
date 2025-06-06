<script setup lang="ts">

// const tdList: CardItem[] = [
//   {
//     title: "TD 1",
//     route: '#',
//   },
//   {
//     title: "TD 2",
//     route: '#',
//   },
//   {
//     title: "TD 3",
//     route: '#',
//   }
// ];

definePageMeta({
  title: "Liste des travaux dirigés",
  buttonExists: false,
})

const { data, error } = await useAsyncData('pdf-list-td', () => $fetch('/pdf-list-td.json'));

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

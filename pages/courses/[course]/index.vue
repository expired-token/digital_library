<script setup lang="ts">
  definePageMeta({
    title: "cours",
    buttonExists: true,
  })

  const route = useRoute().params?.course;

  const { data } = route === 'bio-veg' ? await useAsyncData('pdf-list-veg', () => $fetch('/pdf-list-veg.json'))
      : route === 'bio-animale' ? await useAsyncData('pdf-list-ani', () => $fetch('/pdf-list-ani.json'))
      : [];


</script>

<template>
  <a v-for="pdf in data" :href="pdf.path" target="_blank">
    <Card
      type="file"
      :title="pdf.title"
    />
  </a>
</template>


<style scoped></style>

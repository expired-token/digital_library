<script setup lang="ts">

let courseList: any[] = [
  {
    title: "Biologie Végétale",
    route: "../courses/bio-veg"
  },
  {
    title: "Biologie Animale",
    route: "../courses/bio-animale"
  },
  /*{
    title: "Biologie Végétale",
    route: "../courses/bio-veg"
  },
  {
    title: "Biologie Animale",
    route: "../courses/bio-animale"
  },
  {
    title: "Biologie Végétale",
    route: "../courses/bio-veg"
  },
  {
    title: "Biologie Animale",
    route: "../courses/bio-animale"
  },
  {
    title: "Biologie Végétale",
    route: "../courses/bio-veg"
  },
  {
    title: "Biologie Animale",
    route: "../courses/bio-animale"
  }*/
];

definePageMeta({
  title: "cours",
  buttonExists: false,
});

</script>

<template>
  <Card
    v-for="course in courseList"
    :title="course.title"
    :route="course.route"
    type="section"
  />
</template>

<style scoped></style>

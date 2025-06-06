<script setup lang="ts">

import { itemRoute } from "#shared";

const navList: any[] = [
  {
    title: "Cours",
    route: itemRoute.get("courses"),
  },
  {
    title: "TP",
    route: itemRoute.get("tp"),
  },
  {
    title: "TD",
    route: itemRoute.get("td"),
  },
  {
    title: "PFE",
    route: itemRoute.get("pfe"),
  }
];

</script>

<template>
  <div class="w-1/3 inline-flex justify-between bg-transparent">
    <nav v-for="nav in navList">
      <NuxtLink :to="nav.route" class="nav-text">{{ nav.title }}</NuxtLink>
    </nav>
  </div>
</template>

<style scoped></style>
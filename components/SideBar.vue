<script setup lang="ts">

import { itemRoute } from "#shared";
import SideBarItem from "~/components/sidebar/SideBarItem.vue";

interface Item {
  icon: string;
  title: string;
  route: string;
  background?: string;
}
const itemsList: Item[] = [
  {
    icon: "material-symbols:home-outline-rounded",
    title: "Accueil",
    route: itemRoute.get("accueil")!
  },
  {
    icon: "material-symbols:menu-book-outline",
    title: "Cours",
    route: itemRoute.get("courses")!
  },
  {
    icon: "material-symbols:description-outline",
    title: "TPs",
    route: itemRoute.get("tp")!
  },
  {
    icon: "material-symbols:contract-edit-outline-rounded",
    title: "TDs",
    route: itemRoute.get("td")!
  },
  {
    icon: "material-symbols:contract",
    title: "PFE",
    route: itemRoute.get("pfe")!
  },
];

</script>

<template>
  <div class="flex flex-col items-baseline w-1/6 pl-7 collapse md:visible bg-secondary rounded-br-lg">

    <section class="flex items-center h-1/10 mb-2">
      <NuxtLink to="/"><h1 class="logo-title w-fit">Librairie Digitale</h1></NuxtLink>
    </section>

    <section v-for="item in itemsList" class="w-full">
      <SideBarItem
          :title="item.title"
          :route="item.route"
          :prefixIcon="item.icon"
      />
    </section>
  </div>
</template>

<style scoped></style>
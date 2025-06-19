<script setup lang="ts">
  const route = useRoute();

  let test: Array<RadioItem> = [
    {
      name: "Item 1",
      value: "item1",
    },
    {
      name: "Item 2",
      value: "item2",
    },
    {
      name: "Item 3",
      value: "item3",
    },
  ];

</script>


<template>

  <div class="flex h-dvh bg-background">
    <SideBar />

    <div class="w-full">
      <HeaderDefault />

      <main class="rounded-xl h-fit p-7 md:p-10 mx-7 md:mx-10 my-3 bg-secondary">

        <section class="flex justify-between items-center">
          <h1 class="page-title">{{ `Liste des ${route.meta.title}` }}</h1>
          <Button v-show="route.meta.buttonExists" text="Ajouter" btn-style="disabled" />
        </section>

        <Modal :title="route.meta.title as string"></Modal>

        <section class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center mt-6">
          <slot />
        </section>

      </main>

    </div>
  </div>

</template>


<style scoped></style>

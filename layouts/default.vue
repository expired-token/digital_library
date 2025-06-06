<script setup lang="ts">
  const route = useRoute();
</script>


<template>

  <div class="flex h-dvh bg-background">
    <SideBar />

    <div class="w-full">
      <HeaderDefault />

      <main class="rounded-xl h-fit p-10 mx-10 my-3 bg-secondary shadow-lg">

        <div class="flex justify-between items-center">
          <h1 class="page-title">{{ route.meta.title }}</h1>
          <Button v-show="route.meta.buttonExists" text="Ajouter" />
        </div>

        <div class="grid grid-cols-6 gap-10 items-center mt-4">
          <slot />
        </div>

      </main>
    </div>
  </div>

</template>


<style scoped></style>

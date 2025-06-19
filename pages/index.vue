<script setup lang="ts">
definePageMeta(
    { layout: "landing" }
)

</script>

<template>
  <div class="relative flex items-center justify-center h-screen">

    <div class="absolute h-screen w-screen bg-[url(assets/img/library.jpg)] brightness-30"></div>
    <main class="relative w-11/12 h-9/10 border-5 border-double border-primary backdrop-blur-[3px] rounded-4xl">
      <span class="absolute z-10 inset-0 my-10 w-full h-fit flex justify-center">
        <HeaderLanding />
      </span>

      <section class="flex flex-col gap-2 justify-center md:items-center items-start px-10 w-full h-full">
        <h1 class="landing-title">Bienvenue sur votre librairie digitale</h1>
        <!-- TODO - Search bar for all resources on the website -->
        <form class="md:w-1/2 w-11/12">
          <FormField type="text" placeholder="Trouver une ressource.." disabled />
        </form>
        <!-- TODO - End TODO -->
      </section>
    </main>
  </div>
</template>

<style scoped></style>

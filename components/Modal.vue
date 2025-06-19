<script setup lang="ts">

withDefaults(
  defineProps<{
    title?: string;
    content?: any[];
  }>(),
  {
    title: "Ajouter une ressource"
  }
);

let isOpen = ref(false);

function closeModal(): void {
  if(isOpen.value) {
    isOpen.value = false;
  }
}

</script>

<template>
  <div v-show="isOpen" class="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center backdrop-blur-xs backdrop-brightness-80">
    <div class="min-w-3/8 h-fit bg-secondary border border-dashed border-primary rounded-2xl py-5 px-7">

      <section class="flex justify-between items-center mb-5">
        <h1 class="text-xl text-primary font-semibold">{{ `Ajouter un ${title}` || title }}</h1>
        <span class="icon-container icon-red" @click="closeModal"><Icon name="material-symbols:close-rounded" size="22" /></span>
      </section>

      <section>
<!--        <form>-->
<!--          <FormField  />-->
<!--        </form>-->
      </section>

      <section>

      </section>

    </div>
  </div>

</template>

<style scoped>

.modal-title {
  font-size: 1.6rem;
  color: var(--color-primary);
  font-weight: 600;
}

</style>

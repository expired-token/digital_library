<script setup lang="ts">

withDefaults(
    defineProps<{
      title: string,
      route: string,
      prefixIcon: string,
    }>(),
    {
      prefixIcon: "carbon:category",
    }
)

let isSelected = ref(false);

function selectItem(): void {
  console.log(isSelected.value);
  isSelected.value = !isSelected.value;
}

</script>


<template>

  <NuxtLink :to="route" @click="selectItem">
    <div class="item-container flex items-center py-3">
      <span class="icon-container mr-3"><Icon :name="prefixIcon" /></span>
      <span class="sidebar-text">{{ title }}</span>
    </div>
  </NuxtLink>

</template>


<style scoped>

.item-container:hover .icon-container {
  background-image: linear-gradient(to bottom right, var(--color-primary), var(--color-blue));
  color: var(--color-white);
}
.item-container:hover .sidebar-text {
  color: var(--color-primary);
}

</style>
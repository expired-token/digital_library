<script setup lang="ts">
withDefaults(
    defineProps<{
      text: string;
      type?: "button" | "submit" | "reset";
      style?: "primary" | "secondary" | "warn" | "danger" | "disabled";
    }>(),
    {
      type: "button",
      style: "primary",
    }
);
</script>

<template>
  <button :type="type" :text="text" :class="'border cursor-pointer rounded-xl px-7 py-2 hover:text-white transition duration-400 button-' + style">{{ text }}</button>
</template>

<style scoped></style>
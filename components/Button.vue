<script setup lang="ts">

withDefaults(
  defineProps<{
    text: string;
    type?: "button" | "submit" | "reset";
    btnStyle?: "primary" | "warn" | "danger" | "disabled";
  }>(),
    {
      type: "button",
      btnStyle: "primary",
  }
);

function buttonClasses(btnStyle: string) {
  const baseClasses: string = 'border py-2 px-7 rounded-xl transition duration-400 cursor-pointer';

  const styleCLasses: Map<string, string> = new Map();
  styleCLasses.set("primary", 'border-primary text-primary hover:bg-primary hover:text-white');
  styleCLasses.set("danger", 'border-danger text-danger hover:bg-danger hover:text-white');
  styleCLasses.set("warn", 'border-warn text-warn hover:bg-warn hover:text-white');
  styleCLasses.set("disabled", 'border-disabled bg-disabled text-secondary cursor-not-allowed');

  return `${baseClasses} ${styleCLasses.get(btnStyle)}`;
}


</script>

<template>
  <button
    :class="buttonClasses(btnStyle)"
    :text="text"
    :type="type"
    :disabled="btnStyle === 'disabled'"
  >
    {{ text }}
  </button>
</template>

<style scoped>

</style>
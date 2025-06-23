<script setup lang="ts">
let error: boolean = false;

withDefaults(
  defineProps<{
    label?: string,
    name?: string,
    placeholder?: string,
    items: any[], // Map text, value
    value?: string,
    disabled?: boolean,
    required?: boolean
  }>(),
  {
    disabled: false,
    required: false,
  }
);

</script>

<template>
  <div class="w-full flex flex-col">
    <label :for="name" class="form-label-text"></label>
    <select
        class="bg-secondary border border-disabled hover:border-primary focus:outline-0 focus:border-primary text-white rounded-xl px-5 py-3 my-2 disabled:bg-disabled disabled:border-disabled transition duration-400"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
    >
      <option v-for="item in items">{{ item }}</option> <!-- item: (name, value) -->
    </select>
    <span v-show="error" class="text-danger mx-3">This in an error</span>
  </div>
</template>

<style scoped></style>

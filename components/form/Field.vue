<script setup lang="ts">
let error: boolean = false;

withDefaults(
  defineProps<{
    type?: 'text' | 'email' | 'password' | 'file',
    label?: string,
    name?: string,
    placeholder?: string,
    value?: string;
    disabled?: boolean,
    required?: boolean
  }>(),
  {
    type: 'text',
    disabled: false,
    required: false,
  }
);


</script>

<template>
  <div class="w-full flex flex-col">
    <label :for="name" class="form-label-text"></label>
    <input
        class="bg-secondary border border-disabled hover:border-primary focus:outline-0 focus:border-primary text-white rounded-xl px-5 py-3 my-2 disabled:bg-disabled disabled:border-disabled transition duration-400"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        :required="required"
    />
    <span v-show="error" class="text-danger mx-3">This in an error</span>
  </div>
</template>

<style scoped>

/*input[type="file"] {}*/

</style>

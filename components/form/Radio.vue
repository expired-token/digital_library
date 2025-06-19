<script setup lang="ts">


  withDefaults(
    defineProps<{
      axis?: 'row' | 'col';
      items: Array<RadioItem>;
      type?: 'radio' | 'checkbox';
      name?: string;
      value?: string | string[];
      disabled?: boolean;
      required?: boolean;
    }>(),
    {
      axis: 'col',
      type: 'radio',
      disabled: false,
      required: false,
    }
  )
</script>

<template>
  <div :class="`flex flex-${axis} gap-5`">
    <div v-for="item of items" class="min-w-fit max-w-30 flex justify-between items-center">
      <label :for="item.value" class="form-label-text mr-2">{{ item.name }}</label>
      <input
          :type="type"
          :name="item.value"
          :value="item.value"
          :disabled="disabled"
          :required="required"
          :checked="typeof value === 'string' ? item.value === value : value?.includes(item.value)"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
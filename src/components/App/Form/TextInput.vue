<script setup lang="ts">

interface IProps {
  label: string,
  placeholder?: string
}

const props = defineProps<IProps>();
const modelValue = defineModel()
</script>
<template>
  <label class="form-control w-full py-4">
    <div class="label">
      <span class="label-text">{{ props.label }}</span>
    </div>
    <input type="text" v-model="modelValue" :placeholder="props.placeholder"
      class="input input-bordered w-full" />
  </label>
</template>



<style scoped></style>

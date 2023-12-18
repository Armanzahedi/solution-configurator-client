<script setup lang="ts">

interface SelectItem {
  name: string,
  value?: string,
  selected?: boolean
}
interface IProps {
  label: string,
  selectList: Array<SelectItem>
}
const props = defineProps<IProps>();
const modelValue = defineModel();

</script>
<template>
  <label class="form-control w-full">
    <div class="label">
      <span class="label-text">{{ props.label }}</span>
    </div>
    <p>{{ modelValue }}</p>
    <select v-model="modelValue" class="select select-bordered">
      <option v-for="selectItem in props.selectList"
        :value="selectItem.value ?? selectItem.name">{{ selectItem.name }}</option>
    </select>
  </label>
</template>

<style scoped></style>

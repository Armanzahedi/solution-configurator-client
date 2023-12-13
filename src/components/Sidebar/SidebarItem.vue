
<script setup lang="ts">
interface IProps {
  name: string,
  iconSrc: string,
  link: string
}
const props = defineProps<IProps>()
</script>
<template>
  <RouterLink active-class="active" :to="props.link"
    class="sidebar-item flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded hover:bg-gray-100 hover:text-gray-700">
    <img :src="props.iconSrc" />

    <span class="mx-2 text-sm font-medium">{{ props.name }}</span>
  </RouterLink>
</template>


<style>

.sidebar-item.active {
  @apply bg-gray-100
}
</style>

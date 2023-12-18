
<script setup lang="ts">
const uiStore= useUIStore();
const {isLoading} = uiStore;
</script>
<template>
  <div v-if="isLoading">
    <div class="absolute w-[100%] h-[100%] "></div>
        <div class="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 custom-loading">
          <span class="loading loading-spinner text-primary"></span>
        </div>
  </div>
</template>


<style scoped>

</style>

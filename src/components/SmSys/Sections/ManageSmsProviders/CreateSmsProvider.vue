
<script setup lang="ts">

const selectList = [
  {
    name: "آسانک"
  },
  {
    name: "کاوه نگار",
    selected:true
  }
]
const selectedProvider = ref(selectList[1]);
const dos = (item: any)=> console.log(item)
</script>
<template>
  <div>
    <h3 class="font-bold text-lg -mt-4">افزودن سرویس دهنده</h3>
    <div class="pt-4">
      <SelectInput label="سرویس دهنده" :select-list="selectList" v-model="selectedProvider.name" @select="dos" />
      <TextInput label="نام" placeholder="سرویس دهنده 1" />
      <TextInput label="ApiKey" placeholder="b4c977474188b9a23846fd1436bb" />
    </div>
  </div>
</template>


<style scoped></style>

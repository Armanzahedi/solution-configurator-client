
<script setup lang="ts">

const tabs = ref([
  {
    id: "provider-setting",
    name: "تنظیمات سرویس دهنده",
    isSelected: true,
  },
  {
    id: "line-setting",
    name: "تنظیمات خط",
    isSelected: false,
  }
])
const selectTab = (tabId: string) => {
  tabs.value.map(t => t.isSelected = t.id == tabId);
}
</script>
<template>
  <!-- <div role="tablist" class="tabs tabs-boxed">
      <a role="tab" class="tab tab-active">تنظیمات سرویس دهنده</a>
      <a role="tab" class="tab">تنظیمات خط</a>
    </div> -->
  <div role="tablist" class="tabs tabs-boxed">
    <a v-for="tab in tabs" role="tab" class="tab" @click="selectTab(tab.id)" :class="{ 'tab-active': tab.isSelected }">{{
      tab.name }}</a>
  </div>
  <div class="mx-auto">
    <ManageSmsProviders v-if="tabs.find(t => t.id == 'provider-setting')?.isSelected == true" />

  </div>
</template>

<style scoped></style>

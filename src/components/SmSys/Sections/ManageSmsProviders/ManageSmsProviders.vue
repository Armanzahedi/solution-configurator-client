
<script setup lang="ts">
import CreateSmsProvider from './CreateSmsProvider.vue';

const tableItems = [
  {
    name: "آسانک",
    number: "98123456789",
    credit: "123,5",
    isDefault: true
  },
  {
    name: "کاوه نگار",
    number: "98123456789",
    credit: "123,5",
    isDefault: false
  }
]
const layout= useLayout();
</script>

<template>
    <div role="alert" class="alert mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span class="text-sm text-info">افزودن سرویس دهنده لازم میباشد.</span>
</div>
 <div class="items-start justify-end flex">
      <div class="mt-5">
        <button class="btn btn-primary btn-sm text-white" @click="layout.openModal(CreateSmsProvider)">افزودن سرویس دهنده</button>
      </div>
    </div>
    <div class="relative h-max w-[100%] overflow-x-auto overflow-y-hidden">
      <table class="w-full table-auto text-sm text-right">
        <thead class="text-gray-600 font-medium border-b">
          <tr>
            <th class="py-3 pr-6">پیش فرض</th>
            <th class="py-3 pr-6">نام</th>
            <th class="py-3 pr-6">شماره</th>
            <th class="py-3 pr-6">موجودی</th>
            <th class="py-3 pr-6"></th>
          </tr>
        </thead>
        <tbody class="text-gray-600 divide-y">
          <tr v-for="(item, idx) in tableItems" :key="idx">
            <td class="pr-6 py-4 whitespace-nowrap"><input type="radio" name="radio-2" class="radio radio-primary"
                :checked="item.isDefault" /></td>
            <td class="pr-6 py-4 whitespace-nowrap">{{ item.name }}</td>
            <td class="pr-6 py-4 whitespace-nowrap">{{ item.number }}</td>
            <td class="pr-6 py-4 whitespace-nowrap">{{ item.credit }}</td>
            <td class="text-right whitespace-nowrap">


              <div class="dropdown dropdown-hover dropdown-left">
                <div tabindex="0" role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
                </div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                  <li><a>ویرایش</a></li>
                  <li><a class="text-red-600">حذف</a></li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<style scoped>

</style>
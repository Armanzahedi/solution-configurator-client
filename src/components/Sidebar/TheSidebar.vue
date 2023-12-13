
<script setup lang="ts">
const layout = useLayout()

interface SidebarItem {
  name: string,
  iconSrc: string,
  link: string
}
const sidebarItems: Array<SidebarItem> = [
  { name: "سرویس پیامک", iconSrc: "/icons/sms.png", link: "smsys-setting" },
  { name: "سرویس تلگرام", iconSrc: "/icons/telegram.png", link: "telegramsys-setting" },
  { name: "سرویس واتساپ", iconSrc: "/icons/whatsapp.png", link: "whatsappsys-setting" },
]

</script>
<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="w-full navbar border-b absolute bg-white border-gray-100">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2 font-bold">تنظیمات سیستان</div>

      </div>
      <slot />

    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <aside class="flex flex-col w-64 h-screen px-5 py-3 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l ">

        <div class="flex flex-col justify-between flex-1">
          <nav class="-mx-3">
            <div v-if="layout.isLoading.value == false">
              <SidebarItem v-for="(item, index) in sidebarItems" :key="index" :name="item.name" :link="item.link"
                :icon-src="item.iconSrc" />
            </div>
          </nav>
        </div>
      </aside>
    </div>
  </div>
</template>


<style></style>


<script setup lang="ts">

</script>

<template>
  <main class="h-[98vh]">
    <Modal />
    <Loading />
    <div class="w-[100%] h-[100%]">
    <TheSidebar>
      <div class="pt-20 main-content">
        <RouterView />
      </div>
    </TheSidebar>
    </div>
  </main>
</template>

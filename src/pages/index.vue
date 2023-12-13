<script setup lang="ts" generic="T extends any, O extends any">
const router = useRouter();
const route = useRoute();
const layout = useLayout();
onMounted(() => {
  layout.toggleLoading(true);
  setTimeout(() => {
    const organizationid = route.query["orgid"] as string;
  if (organizationid == null) {
    //@ts-ignore
    document.getElementById('no_orgnization_alert').showModal();
    layout.toggleLoading(false);
  } else {
    localStorage.setItem("orgid", organizationid);
    router.push("/smsys-setting")
    layout.toggleLoading(false);
  }
  }, 3000);

})
</script>

<template></template>

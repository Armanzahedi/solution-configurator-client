<script setup lang="ts" >
import NoOrganizationAlert from '~/components/App/NoOrganizationAlert.vue';



const router = useRouter();
const route = useRoute();
const layout = useLayout();
onMounted(() => {
  layout.toggleLoading(true);
  setTimeout(() => {
    const organizationid = route.query["orgname"] as string;
    if (organizationid == null) {

      layout.openModal(NoOrganizationAlert, null, false);
      layout.toggleLoading(false);
    } else {
      localStorage.setItem("orgid", organizationid);
      router.push("/smsys-setting")
      layout.toggleLoading(false);
    }
  }, 0);

})
</script>

<template></template>

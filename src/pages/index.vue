<script setup lang="ts" >
import NoOrganizationAlert from '~/components/App/NoOrganizationAlert.vue';



const router = useRouter();
const route = useRoute();
const uiStore = useUIStore();
const {toggleLoading,openModal} = uiStore;

onMounted(() => {
  toggleLoading(true);
  setTimeout(() => {
    const organizationid = route.query["orgname"] as string;
    if (organizationid == null) {

      openModal(NoOrganizationAlert, null, false);
      toggleLoading(false);
    } else {
      localStorage.setItem("orgid", organizationid);
      router.push("/smsys-setting")
      toggleLoading(false);
    }
  }, 0);

})
</script>

<template></template>

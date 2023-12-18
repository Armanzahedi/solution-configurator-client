import { toRefs, reactive, computed, StyleValue } from 'vue'
import { defineStore } from 'pinia'

export const MODALS = {
  NO_ORGANIZATION_ALERT: "NO_ORGANIZATION_ALERT",
  SMS_PROVIDERS_CREATE: "SMS_PROVIDERS_CREATE",
  SMS_PROVIDERS_UPDATE: "SMS_PROVIDERS_UPDATE",
  SMS_PROVIDERS_DELETE: "SMS_PROVIDERS_DELETE",
}

const layoutState = reactive({
  loading: false,
})

const modalState = shallowReactive({
  width: null as string | undefined | null | StyleValue,
  isShow: false,
  showClose: true,
  component: null as object | null,
  props: {},
  reloadParent: false
})


export const useLayout = defineStore('layout', () => {

  const toggleLoading = (state?: boolean) => {
    layoutState.loading = state ?? !layoutState.loading;
  }

  function openModal(component: object, width?: string | undefined | null | StyleValue, showClose?: boolean, props?: object) {
    modalState.isShow = true;
    modalState.width = width;
    modalState.component = component;
    modalState.props = props ?? {};
    modalState.reloadParent = false;
    modalState.showClose = showClose ?? modalState.showClose;

    //@ts-ignore
    document.getElementById("modal").showModal();
  }

  function closeModal(reloadParent?: boolean) {
    modalState.isShow = false;
    modalState.component = null;
    modalState.props = {};
    modalState.reloadParent = reloadParent != undefined ? reloadParent : false;
  }
  const isLoading = computed(() => layoutState.loading)
  return {
    MODALS,
    layoutState: toRefs(layoutState),
    modalState: toRefs(modalState),
    isLoading,
    toggleLoading,
    openModal,
    closeModal
  }
}
)
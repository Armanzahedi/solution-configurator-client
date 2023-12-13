import { toRefs, reactive, computed } from 'vue'


const layoutState = reactive({
  loading: false,
})

export function useLayout () {


  const toggleLoading = (state?: boolean)=> {
    layoutState.loading = state ?? !layoutState.loading;
  }
  const isLoading = computed(()=> layoutState.loading)
  return {
    layoutState: toRefs(layoutState),
    isLoading,
    toggleLoading
  }
}

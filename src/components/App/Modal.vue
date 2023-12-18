
<script setup lang="ts">
const uiStore= useUIStore();
const {modalState} = uiStore;

</script>
<template>
    <dialog id="modal" class="modal">
        <div class="modal-box" :style="modalState.width != null ? `max-width:${modalState.width}` : ''">
            <component :is="modalState.component" v-bind="modalState.props"></component>
            <div class="modal-action">
                <form method="dialog" v-if="modalState.showClose">
                    <button
                        class="btn btn-sm focus-visible:outline-none btn-circle btn-ghost absolute left-2 top-2">✕</button>
                </form>

            </div>
        </div>
    </dialog>
</template>

<style scoped></style>

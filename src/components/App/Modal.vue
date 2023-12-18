        
<script setup lang="ts">
const layout = useLayout();


</script>
<template>
    <dialog id="modal" class="modal">

        <div class="modal-box" :style="layout.modalState.width != null ? `max-width:${layout.modalState.width}` : ''">
            <component :is="layout.modalState.component" v-bind="layout.modalState.props"></component>
            <div class="modal-action">
                <form method="dialog" v-if="layout.modalState.showClose">
                    <button
                        class="btn btn-sm focus-visible:outline-none btn-circle btn-ghost absolute left-2 top-2">✕</button>
                </form>

            </div>
        </div>
    </dialog>
</template>

<style scoped></style>
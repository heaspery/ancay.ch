<script setup>

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  }
});

</script>

<template>
    <button
      class="px-6 py-3 border hover:bg-black hover:text-amber-50 transition hover:border-black cursor-auto"
    >
      <slot></slot>
    </button>
</template>
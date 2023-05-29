<template>
  <div
    v-if="loading"
    class="w-100 d-flex align-center justify-center h-screen absolute top-0"
  >
    <v-progress-circular indeterminate color="teal"></v-progress-circular>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

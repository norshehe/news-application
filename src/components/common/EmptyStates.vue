<template>
  <div grid-list-xs class="d-flex justify-space-center align-center py-10">
    <div class="d-flex flex-column ma-auto">
      <VAvatar class="bg-teal mr-2 text-white" size="100">
        <VIcon size="50">{{ icon }}</VIcon>
      </VAvatar>
      <p class="text-h6 text-center mt-3">{{ message }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    requied: true,
  },
});
</script>

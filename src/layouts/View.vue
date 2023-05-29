<template>
  <VMain>
    <RouterView />
  </VMain>
</template>

<script lang="ts" setup>
import { NewsActionEnums } from "@/enums/store.enums";
import { store } from "@/store";
import { onMounted } from "vue";

onMounted(() => {
  store.dispatch(NewsActionEnums.FETCH_TOP_HEADLINES);
});
</script>

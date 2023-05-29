<template>
  <VImg :src="details.urlToImage"></VImg>
  <p class="text-caption text-grey mt-1">
    {{ details.description }}
  </p>

  <p class="text-body mt-10">
    {{ details.content }}
  </p>
</template>
<script lang="ts" setup>
import { TopHeadlineArticlesResponse } from "@/types/response.types";
import { PropType } from "vue";

defineProps({
  details: {
    type: Object as PropType<TopHeadlineArticlesResponse>,
    required: true,
  },
});
</script>

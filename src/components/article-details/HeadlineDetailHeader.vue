<template>
  <VBreadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </VBreadcrumbs>
  <h1 class="text-dark">
    <span class="d-none d-flex d-md-none text-h4 font-weight-bold"
      >{{ details.title }}ds</span
    >
    <span class="d-none d-md-flex text-h3 font-weight-bold">{{
      details.title
    }}</span>
  </h1>
  <p class="text-subtitle-1 mt-3" v-if="details.author">
    By: {{ details.author }}
  </p>
  <p class="text-subtitle-2 text-grey">
    {{ formatDate(details.publishedAt) }}
    {{ formatTime(details.publishedAt) }}
    /
    {{ details.source.name }}
  </p>
</template>
<script lang="ts" setup>
import { formatDate, formatTime } from "@/common/helper.service";
import { TopHeadlineArticlesResponse } from "@/types/response.types";
import { PropType } from "vue";

//props
const props = defineProps({
  details: {
    type: Object as PropType<TopHeadlineArticlesResponse>,
    required: true,
  },
});

const items = [
  {
    title: "Headlines",
    disabled: false,
    href: "/",
  },
  {
    title: props.details.title,
    disabled: true,
  },
];
</script>

<style>
.v-breadcrumbs {
  padding: 16px 0px 16px 0px !important;
}
</style>

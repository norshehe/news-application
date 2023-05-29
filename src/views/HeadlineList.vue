<template>
  <SubheaderLayout><HeadlineListHeader /></SubheaderLayout>
  <VContainer class="pt-5">
    <HeadlineListArticles />
  </VContainer>
</template>

<script lang="ts" setup>
import SubheaderLayout from "@/layouts/components/SubheaderLayout.vue";
import HeadlineListHeader from "@/components/headline-list/HeadlineListHeader.vue";
import HeadlineListArticles from "@/components/headline-list/HeadlineListArticles.vue";
import { onMounted } from "vue";
import { store } from "@/store";
import { NewsActionEnums } from "@/enums/store.enums";

onMounted(() => {
  store.dispatch(NewsActionEnums.FETCH_SOURCES);
});
</script>

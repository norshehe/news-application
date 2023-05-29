<template>
  <SubheaderLayout>
    <HeadlineDetailHeader v-if="articleDetails" :details="articleDetails" />
  </SubheaderLayout>
  <VContainer v-if="articleDetails" class="d-flex">
    <VRow class="">
      <VCol cols="12" sm="8">
        <HeadlineDetailContent
          v-if="articleDetails"
          :details="articleDetails"
        />
      </VCol>
      <VCol cols="12" sm="4">
        <p class="text-subtitle-1 mb-2">Top Headlines</p>
        <HeadlineSimpleList :headlines="recommendedHeadlines" />
      </VCol>
    </VRow>
  </VContainer>
</template>
<script lang="ts" setup>
import { slugify, getRandomElements } from "@/common/helper.service";
import HeadlineDetailContent from "@/components/article-details/HeadlineDetailContent.vue";
import HeadlineDetailHeader from "@/components/article-details/HeadlineDetailHeader.vue";
import HeadlineSimpleList from "@/components/common/HeadlineSimpleList.vue";
import SubheaderLayout from "@/layouts/components/SubheaderLayout.vue";
import { store } from "@/store";
import { StateTypes } from "@/store/news/state";
import { TopHeadlineArticlesResponse } from "@/types/response.types";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { NewsMutationEnums } from "@/enums/store.enums";

import { DocumentTitle } from "@/types/app.types";

const route = useRoute();
const articleIndex = computed(() => route.params.slug as string);
const topHeadlines = computed(
  () => store.getters.getTopHeadlines as StateTypes["topHeadlines"]
);
const recommendedHeadlines = computed(() =>
  topHeadlines.value
    ? getRandomElements<TopHeadlineArticlesResponse>(
        topHeadlines.value.articles
      )
    : []
);
const articleDetails = computed(() => {
  const articleFromHeadline = topHeadlines.value?.articles.find(
    (d) => slugify(d.title) == articleIndex.value
  );
  if (articleFromHeadline) return articleFromHeadline;

  const articleHistory = store.getters
    .getArticleHistory as StateTypes["articleHistory"];

  if (articleHistory.length > 0) {
    const articleFromHistory = articleHistory.find(
      (d) => slugify(d.title) == articleIndex.value
    );
    return articleFromHistory;
  }
  return null;
});
onMounted(() => {
  if (articleDetails.value) {
    store.commit(NewsMutationEnums.SET_ARTICLE_HISTORY, articleDetails.value);
    const documentTitle: DocumentTitle = document;
    documentTitle.title = `News | ${articleDetails.value.title}`;
  }
});
</script>

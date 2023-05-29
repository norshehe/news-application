<template>
  <Loader :loading="headlineLoading" />
  <VRow class="">
    <VCol
      cols="12"
      sm="6"
      :md="article.cardType == CardVariantsEnum.VARIANT_ONE ? '4' : '6'"
      v-for="article in topHeadlinesComputed"
      :key="article.url"
    >
      <HeadlineListArticlesCard
        :url-to-image="article.urlToImage"
        :title="article.title"
        :source-name="article.source.name"
        :description="article.description"
        :published-at="article.publishedAt"
        :card-type="article.cardType"
        @edit-article="handleEditArticle"
      />
    </VCol>
  </VRow>
  <v-dialog v-model="editDialog" persistent width="500">
    <HeadlineListArticlesEdit
      :title="editTitleValue"
      @close="
        editDialog = false;
        editTitleValue = '';
      "
    />
  </v-dialog>
</template>
<script lang="ts" setup>
import Loader from "@/components/common/Loader.vue";
import HeadlineListArticlesEdit from "@/components/headline-list/HeadlineListArticlesEdit.vue";
import HeadlineListArticlesCard from "@/components/headline-list/HeadlineListArticlesCard.vue";
import { store } from "@/store";
import { StateTypes } from "@/store/news/state";
import { computed, ref } from "vue";
import { CardVariantsEnum } from "@/enums/card-variants.enum";
const topHeadlines = computed(
  () => store.getters.getTopHeadlines as StateTypes["topHeadlines"]
);

const editDialog = ref(false);

const headlineLoading = computed(
  () => store.getters.getHeadlineLoading as StateTypes["headlineLoading"]
);

const editTitleValue = ref("");

function handleEditArticle(event: { title: string }) {
  editDialog.value = true;
  editTitleValue.value = event.title;
}

const topHeadlinesComputed = computed(() => {
  const allImages = [];

  if (topHeadlines.value) {
    let counter = 0;
    for (let index = 0; index < topHeadlines.value?.articles.length; index++) {
      const element = topHeadlines.value?.articles[index];
      const newElement = {
        author: element.author,
        content: element.content,
        description: element.description,
        publishedAt: element.publishedAt,
        source: element.source,
        title: element.title,
        url: element.url,
        urlToImage: element.urlToImage,
        cardType: CardVariantsEnum.VARIANT_ONE,
      };
      if (counter <= 2) {
        newElement.cardType = CardVariantsEnum.VARIANT_ONE;
        console.log(newElement);
        allImages.push(newElement);
        counter++;
      } else if (counter > 2 && counter <= 4) {
        newElement.cardType = CardVariantsEnum.VARIANT_TWO;
        allImages.push(newElement);
        counter++;
      } else {
        counter = 0;
      }
    }
  }

  return allImages;
});
</script>

<style>
.two-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
}
.three-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal;
}
</style>

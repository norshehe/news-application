<template>
  <VRow dense>
    <VCol cols="12" v-for="article in headlines" :key="article.url">
      <VCard>
        <div class="d-flex justify-space-between flex-nowrap flex-row">
          <div class="ma-auto">
            <VImg
              width="100"
              :aspect-ratio="1"
              :src="article.urlToImage"
              cover
            />
          </div>

          <div>
            <VCardItem>
              <p class="text-caption two-lines">
                {{ formatDate(article.publishedAt) }}
              </p>

              <RouterLink
                :to="`${slugify(article.title)}`"
                class="d-flex align-center gap-x-3 text-decoration-none text-teal"
              >
                <p class="text-subtitle-2 two-lines">{{ article.title }}</p>
              </RouterLink>
            </VCardItem>
          </div>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>
<script lang="ts" setup>
import { formatDate, slugify } from "@/common/helper.service";
import { TopHeadlineArticlesResponse } from "@/types/response.types";
import { PropType } from "vue";

defineProps({
  headlines: {
    type: Array as PropType<TopHeadlineArticlesResponse[]>,
    required: true,
  },
});
</script>

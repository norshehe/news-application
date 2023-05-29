<template>
  <VCard elevation="5" v-if="cardType == CardVariantsEnum.VARIANT_ONE">
    <VImg height="250" cover :src="urlToImage" class="text-white">
      <div class="d-flex justify-end ma-3">
        <VBtn
          @click="editArticle"
          icon
          color="teal-darken-3"
          class="ma-1 pa-1"
          size="30"
        >
          <VIcon size="15">mdi-pencil</VIcon>
        </VBtn>
        <RouterLink
          :to="`${slugify(title)}`"
          class="d-flex align-center gap-x-3 text-decoration-none"
        >
          <VBtn icon class="mx-1 px-1" size="30">
            <VIcon size="15">mdi-arrow-right</VIcon>
          </VBtn>
        </RouterLink>
      </div>
    </VImg>

    <VCardItem>
      <VCardSubtitle v-if="sourceName">
        {{ sourceName }}
      </VCardSubtitle>
      <p class="text-h6 two-lines">{{ title }}</p>

      <div style="min-height: 60px" class="d-flex align-center">
        <p class="text-body-2 two-lines mt-3">
          {{ description }}
        </p>
      </div>
      <VCardSubtitle class="mt-3">
        {{ formatDate(publishedAt) }}
      </VCardSubtitle>
    </VCardItem>
  </VCard>
  <VCard elevation="5" v-if="cardType == CardVariantsEnum.VARIANT_TWO">
    <div
      class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row"
    >
      <VImg width="200" cover :src="urlToImage" />

      <div>
        <VCardItem>
          <div class="d-flex justify-space-between align-center">
            <VCardSubtitle>
              {{ sourceName }}
            </VCardSubtitle>
            <div class="d-flex justify-end">
              <VBtn
                @click="editArticle"
                icon
                color="teal-darken-3"
                class="mx-1 px-1"
                size="30"
              >
                <VIcon size="15">mdi-pencil</VIcon>
              </VBtn>

              <RouterLink
                :to="`${slugify(title)}`"
                class="d-flex align-center gap-x-3 text-decoration-none"
              >
                <VBtn icon class="mx-1 px-1" size="30">
                  <VIcon size="15">mdi-arrow-right</VIcon>
                </VBtn>
              </RouterLink>
            </div>
          </div>

          <p class="text-h6 two-lines">{{ title }}</p>
          <div style="min-height: 60px" class="d-flex align-center">
            <p class="text-body-2 three-lines mt-3">
              {{ description }}
            </p>
          </div>
          <VCardSubtitle class="mt-3">
            {{ formatDate(publishedAt) }}
          </VCardSubtitle>
        </VCardItem>
      </div>
    </div>
  </VCard>
</template>
<script lang="ts" setup>
import { formatDate, slugify } from "@/common/helper.service";
import { CardVariantsEnum } from "@/enums/card-variants.enum";

import { PropType } from "vue";

const props = defineProps({
  cardType: {
    type: String as PropType<CardVariantsEnum>,
    default: CardVariantsEnum.VARIANT_ONE,
  },
  urlToImage: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  sourceName: {
    type: String,
  },
  description: {
    type: String,
    default: "No Description",
  },
  publishedAt: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["editArticle"]);

function editArticle() {
  emit("editArticle", { title: props.title });
}
</script>

<template>
  <div class="d-flex justify-space-between">
    <div class="d-flex">
      <v-tabs
        :model-value="currentSource"
        v-if="mountTab"
        @update:model-value="selectSource($event as string)"
      >
        <v-tab bg-color=" w-auto " slider-color="teal-lighten-3" value="all">
          All
        </v-tab>
        <v-tab
          class="d-none d-lg-flex"
          bg-color=" w-auto"
          slider-color="teal-lighten-3"
          v-for="source in firstFiveSource"
          :key="source.id"
          :value="source.id"
        >
          {{ source.name }}
        </v-tab>

        <v-menu v-if="otherSources.length">
          <template v-slot:activator="{ props }">
            <v-btn
              variant="plain"
              rounded="0"
              class="align-self-center me-4"
              height="100%"
              v-bind="props"
            >
              more
              <v-icon end> mdi-menu-down </v-icon>
            </v-btn>
          </template>

          <v-list class="bg-grey-lighten-3">
            <v-list-item
              v-for="otherSource in otherSources"
              :key="otherSource.id"
              @click="selectSource(otherSource.id)"
            >
              {{ otherSource.name }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </div>
    <div class="d-flex">
      <v-btn @click="history = true" class="bg-teal mr-2" variant="tonal">
        <v-icon prepend-icon>mdi-history</v-icon>
        <span class="d-none d-sm-flex">History</span>
      </v-btn>
      <v-btn @click="reloadHeadline()" class="bg-white" variant="tonal">
        <v-icon prepend-icon>mdi-reload</v-icon>
        <span class="d-none d-sm-flex">Reload</span></v-btn
      >
    </div>
  </div>
  <v-navigation-drawer v-model="history" temporary width="400">
    <HeadlineArticlesHistory />
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { store } from "@/store";

import { SourceItemsResponse } from "@/types/response.types";
import { computed, ref, watch } from "vue";
import { NewsMutationEnums, NewsActionEnums } from "@/enums/store.enums";
import { nextTick } from "vue";
import { NewsApi } from "@/common/api.service";
import HeadlineArticlesHistory from "@/components/headline-list/HeadlineArticlesHistory.vue";
const currentSource = computed(() => store.getters.getCurrentSource as string);

const history = ref(false);
const sources = computed(() =>
  store.getters.getSources
    ? (store.getters.getSources.sources as SourceItemsResponse[])
    : ([] as SourceItemsResponse[])
);

const firstFiveSource = computed(() => sources.value.slice(0, 4));

const otherSources = computed(() =>
  sources.value.slice(5, sources.value.length)
);

const mountTab = ref(true);

async function selectSource(sourceId: string) {
  store.commit(NewsMutationEnums.SET_RECENT, sourceId);
  store.commit(NewsMutationEnums.SET_CURRENT_SOURCE, sourceId);
  mountTab.value = false;
  await nextTick().then(() => (mountTab.value = true));
}

async function reloadHeadline() {
  await NewsApi.fetchTopHeadlineError();
}

watch(
  () => currentSource.value,
  () => {
    store.dispatch(NewsActionEnums.FETCH_TOP_HEADLINES);
  }
);
</script>

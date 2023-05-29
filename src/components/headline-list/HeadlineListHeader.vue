<template>
  <div class="d-flex justify-space-between align-center">
    <div class="d-flex align-center py-3">
      <p class="text-h5 text-dark-teal-1 font-weight-thin mr-2">Headlines</p>
    </div>

    <div class="d-flex align-center py-2 w-50">
      <v-text-field
        :model-value="headlineFilter"
        @update:model-value="handleInput"
        label="Search headline"
        variant="underlined"
        class="pb-3"
        hide-details
        prepend-icon="mdi-magnify"
      ></v-text-field>
    </div>
  </div>
  <HeadlineListHeaderToolBar />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import HeadlineListHeaderToolBar from "@/components/headline-list/HeadlineListHeaderToolBar.vue";
import { store } from "@/store";
import { NewsActionEnums, NewsMutationEnums } from "@/enums/store.enums";
import { debounce } from "@/common/helper.service";

const headlineFilter = computed(
  () => store.getters.getHeadlineFilter as string
);

const fetchHeadlines = debounce(() => {
  store.dispatch(NewsActionEnums.FETCH_TOP_HEADLINES);
}, 250);

function handleInput(event: string) {
  store.commit(NewsMutationEnums.SET_HEADLINE_FILTER, event);
  fetchHeadlines();
}
</script>
<style>
.search-input {
  width: 300px;
}
</style>

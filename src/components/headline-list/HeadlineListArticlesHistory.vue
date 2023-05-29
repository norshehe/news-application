<template>
  <div class="pa-3">
    <HeadlineSimpleList
      v-if="articleHistory.length"
      :headlines="articleHistory"
    />
    <EmptyStates v-else icon="mdi-history" message="No History" />
  </div>
</template>
<script lang="ts" setup>
import { store } from "@/store";
import { StateTypes } from "@/store/news/state";
import { computed } from "vue";
import HeadlineSimpleList from "../common/HeadlineSimpleList.vue";
import EmptyStates from "@/components/common/EmptyStates.vue";
const articleHistory = computed(
  () => store.getters.getArticleHistory as StateTypes["articleHistory"]
);
</script>

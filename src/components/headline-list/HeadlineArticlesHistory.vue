<template>
  <div class="pa-3"><HeadlineSimpleList :headlines="articleHistory" /></div>
</template>
<script lang="ts" setup>
import { store } from "@/store";
import { StateTypes } from "@/store/news/state";
import { computed } from "vue";
import HeadlineSimpleList from "../common/HeadlineSimpleList.vue";

const articleHistory = computed(
  () => store.getters.getArticleHistory as StateTypes["articleHistory"]
);
</script>

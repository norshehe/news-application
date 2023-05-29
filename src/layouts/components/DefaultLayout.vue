<template>
  <VAppBar class="bg-teal" elevation="0">
    <VContainer class="d-flex justify-space-between align-center">
      <p class="text-subtitle-1 d-none d-sm-block">{{ currentDate }}</p>
      <RouterLink
        to="/"
        class="d-flex align-center gap-x-3 text-decoration-none"
      >
        <VAvatar
          icon="mdi-newspaper"
          class="bg-teal-darken-3 mr-2 text-white"
          size="50"
        ></VAvatar>
        <p
          class="font-weight-medium leading-normal text-xl text-uppercase text-white"
        >
          News
        </p>
      </RouterLink>
      <VMenu>
        <template v-slot:activator="{ props }">
          <VBtn
            variant="plain"
            rounded="0"
            class="align-self-center me-4"
            height="100%"
            v-bind="props"
          >
            {{ currentCountryName?.name }}
            <VIcon end> mdi-menu-down </VIcon>
          </VBtn>
        </template>

        <VList class="bg-grey-lighten-3">
          <VListItem
            v-for="country in countries"
            :key="country.id"
            @click="selectCountry(country.id)"
          >
            {{ country.name }}
          </VListItem>
        </VList>
      </VMenu>
    </VContainer>
  </VAppBar>
  <slot />
</template>
<script lang="ts" setup>
import countries from "@/common/countries";
import { store } from "@/store";
import { computed } from "vue";
import { NewsMutationEnums } from "@/enums/store.enums";
import { NewsActionEnums } from "@/enums/store.enums";
import { formatDate } from "@/common/helper.service";
const currentCountryName = computed(() =>
  countries.find((i) => i.id == store.getters.getCurrentCountry)
);

const currentDate = computed(() => formatDate());

function selectCountry(id: string) {
  store.commit(NewsMutationEnums.SET_CURRENT_COUNTRY, id);
  store.dispatch(NewsActionEnums.FETCH_SOURCES);
  store.dispatch(NewsActionEnums.FETCH_TOP_HEADLINES);
}
</script>
<style>
.custom-container {
  max-width: 1500px; /* Default max-width for larger screens */

  @media only screen and (max-width: 960px) {
    /* Modify max-width for medium-sized screens */
    max-width: 800px;
  }

  @media only screen and (max-width: 600px) {
    /* Modify max-width for smaller screens */
    max-width: 400px;
  }
  width: 100%;

  margin-right: auto;
  margin-left: auto;
}
</style>

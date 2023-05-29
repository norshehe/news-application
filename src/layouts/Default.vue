<template>
  <DefaultLayout>
    <Notification />
    <DefaultView />
  </DefaultLayout>
</template>

<script lang="ts" setup>
import Notification from "@/components/common/Notification.vue";
import DefaultView from "@/layouts/View.vue";
import DefaultLayout from "@/layouts/components/DefaultLayout.vue";
</script>

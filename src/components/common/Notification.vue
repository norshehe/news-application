<template>
  <v-snackbar
    :model-value="notificationDetails.show"
    :color="
      notificationDetails.type == NotificationEnum.SUCCESS ? 'teal' : 'red'
    "
    @update:model-value="handleChange"
  >
    {{ notificationDetails.message }}
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="close"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
<script lang="ts" setup>
import { AppMutationEnums } from "@/enums/store.enums";
import { store } from "@/store";
import { StateTypes } from "@/store/application/state";
import { computed } from "vue";
import { NotificationEnum } from "@/enums/notification-status.enum";

const notificationDetails = computed(
  () =>
    store.getters.getSnackBarNotification as StateTypes["snackBarNotification"]
);

function close() {
  store.commit(AppMutationEnums.SHOW_NOTIFICATION, {
    show: false,
  });
}
function handleChange(event: boolean) {
  if (event == false) {
    close();
  }
}
</script>

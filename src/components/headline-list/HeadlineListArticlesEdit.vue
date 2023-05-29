<template>
  <v-card>
    <v-card-title class="pt-5">
      <span class="text-h5">Edit Article</span>
    </v-card-title>
    <v-container>
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field
          label="Article Title *"
          v-model="articleForm.title"
          :rules="[
            (v) => !!v || 'Article title is required',
            (v) => v.length <= 255 || 'Title cannot exceed 255 characters',
          ]"
          required
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="$emit('close')">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" type="submit">
            Save
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-container>
  </v-card>
</template>
<script lang="ts" setup>
import { NotificationEnum } from "@/enums/notification-status.enum";
import { AppMutationEnums } from "@/enums/store.enums";
import { store } from "@/store";
import { nextTick } from "vue";
import { reactive, onMounted } from "vue";

//props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const articleForm = reactive({
  title: "",
});

function submit() {
  store.commit(AppMutationEnums.SHOW_NOTIFICATION, {
    show: true,
    message: "Article has been saved",
    type: NotificationEnum.SUCCESS,
  });
  nextTick().then(() => {
    emit("close");
  });
}

onMounted(() => {
  articleForm.title = props.title;
});
</script>

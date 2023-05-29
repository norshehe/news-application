/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import { ApiService } from "./common/api.service";
import RouterService from "./common/router.service";

//Init

ApiService.init();
RouterService.init();

const app = createApp(App);

registerPlugins(app);

app.mount("#app");

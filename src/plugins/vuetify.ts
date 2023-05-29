/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          dark: "#111622",
          deepNavy: "#001738",
          pumpkin: "#ff7200",
          secondary: "#8A8D93",
          "on-secondary": "#fff",
          success: "#56CA00",
          info: "#16B1FF",
          warning: "#FFB400",
          error: "#FF4C51",
          "on-primary": "#FFFFFF",
          "on-success": "#FFFFFF",
          "on-warning": "#FFFFFF",
          background: "#F4F5FA",
          "on-background": "#3A3541",
          "on-surface": "#3A3541",
          "grey-50": "#FAFAFA",
          "grey-100": "#F0F2F8",
          "grey-200": "#EEEEEE",
          "grey-300": "#E0E0E0",
          "grey-400": "#BDBDBD",
          "grey-500": "#9E9E9E",
          "grey-600": "#757575",
          "grey-700": "#616161",
          "grey-800": "#424242",
          "grey-900": "#212121",
          "perfect-scrollbar-thumb": "#DBDADE",
          "skin-bordered-background": "#fff",
          "skin-bordered-surface": "#fff",
        },

        variables: {
          "code-color": "#d400ff",
          "overlay-scrim-background": "#3A3541",
          "overlay-scrim-opacity": 0.5,
          "hover-opacity": 0.04,
          "focus-opacity": 0.1,
          "selected-opacity": 0.12,
          "activated-opacity": 0.1,
          "pressed-opacity": 0.14,
          "dragged-opacity": 0.1,
          "border-color": "#3A3541",
          "table-header-background": "#F9FAFC",
          "custom-background": "#F9F8F9",

          // Shadows
          "shadow-key-umbra-opacity": "rgba(var(--v-theme-on-surface), 0.08)",
          "shadow-key-penumbra-opacity":
            "rgba(var(--v-theme-on-surface), 0.12)",
          "shadow-key-ambient-opacity": "rgba(var(--v-theme-on-surface), 0.04)",
        },
      },
    },
  },
});

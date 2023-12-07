/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./assets/css/fontawesome.css";
import "./assets/css/brands.css";
import "./assets/css/solid.css";
import "./assets/css/regular.css";
createApp(App).use(router).mount("#app");

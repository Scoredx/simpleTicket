import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/SCSS/reset.scss";

createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/styles/main.scss";
import "material-icons/iconfont/material-icons.css";
import ClickOutSide from "./directives/ClickOutSide";
import router from "./router";
import store from "./store";
import axios from "axios";

const app = createApp(App);
app.provide("axios", axios);

app.use(store)
    .use(router)
    .directive("click-outside", ClickOutSide)
    .mount("#app");

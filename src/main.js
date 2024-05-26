import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

const globalComponents = import.meta.glob(
  ["./components/UI/**/*.vue", "./components/icons/**/*.vue"],
  {
    eager: true,
  }
);

Object.entries(globalComponents).forEach(([path, module]) => {
  app.component(path.split("/").at(-1).slice(0, -4), module.default);
});

app.mount("#app");

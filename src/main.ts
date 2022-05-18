import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Default from "./layouts/DefaultLayout.vue";
import AppLayout from "./layouts/AppLayout.vue";
import AdminLayout from "./layouts/AdminLayout.vue";
import "./assets/css/tailwind.css";

const app = createApp(App);
app.component("default-layout", Default);
app.component("app-layout", AppLayout);
app.component("admin-layout", AdminLayout);

app.use(router);
app.mount("#app");

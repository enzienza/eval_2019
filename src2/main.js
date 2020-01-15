// import de base
import Vue from "vue";
import App from "./App.vue";

// import ajouter
import { store } from "./stores/store";
import { router } from "./routes/router";

// import CSS
import "./assets/css/app.css";
import "./assets/css/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

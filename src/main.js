import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/style/reset.css"

Vue.use(ElementUI)
Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') {
  require("./mock/index.js")
}
let vm =new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm);

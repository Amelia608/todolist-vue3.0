import { createApp } from "vue";
import ElementPlus from "element-plus";
import SvgIcon from "@/components/SvgIcon"; // svg component
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons";
import * as icons from "@element-plus/icons";
import { toLowerLine } from "@/utils";
console.log(icons);
const app = createApp(App);
app.component("svg-icon", SvgIcon);
Object.keys(icons).map((el) => {
    app.component(toLowerLine(el), icons[el]);
});
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");

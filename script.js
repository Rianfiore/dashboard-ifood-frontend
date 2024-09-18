import { renderComponent } from "./utils/render-component.js";

const header = renderComponent("./components/header");
const sidebar = renderComponent("./components/sidebar");
const dashboard = renderComponent("./screens/dashboard");

Promise.all([header, sidebar, dashboard]);

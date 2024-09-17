const header = fetch("./components/header");
const sidebar = fetch("./components/sidebar");
const dashboard = fetch("/screens/dashboard");

Promise.all([header, sidebar, dashboard]).then((responses) => {
  responses.forEach((response) => {
    response
      .text()
      .then((data) => {
        document.getElementById("content").innerHTML += data;
      })
      .catch((error) => console.log(`Error loading component:`, error));
  });
});

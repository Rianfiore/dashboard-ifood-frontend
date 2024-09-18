export function renderComponent(componentPath) {
  fetch(`${componentPath}/index.html`).then((response) => {
    response.text().then((data) => {
      const content = document.getElementById("content");

      content.innerHTML += data;
    });
  });

  fetch(`${componentPath}/styles.css`).then((response) => {
    response.text.then((data) => {
      const head = document.getElementsByClassName("head");

      head.innerHTML += data;
    });
  });
}

export function renderComponent(componentPath) {
  fetch(`${componentPath}/index.html`).then((response) => {
    response.text().then((data) => {
      const content = document.getElementById("content");
      content.innerHTML += data;
    });
  });

  fetch(`${componentPath}/styles.css`).then((response) => {
    response.text().then((data) => {
      const style = document.createElement("style");
      style.textContent = data;
      document.head.appendChild(style);
    });
  });

  fetch(`${componentPath}/script.js`).then((response) => {
    response.text().then((data) => {
      const script = document.createElement("script");
      script.textContent = data;
      document.body.appendChild(script);
    });
  });
}

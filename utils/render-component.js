export function renderComponent(componentPath, injectHTML = true) {
  // Condicional para carregar ou não o HTML
  if (injectHTML) {
    fetch(`${componentPath}/index.html`).then((response) => {
      response.text().then((data) => {
        const content = document.getElementById("content");
        content.innerHTML += data;
      });
    });
  }

  // Carrega o CSS
  fetch(`${componentPath}/styles.css`).then((response) => {
    response.text().then((data) => {
      const style = document.createElement("style");
      style.textContent = data;
      document.head.appendChild(style);
    });
  });

  // Carrega o JS
  fetch(`${componentPath}/script.js`).then((response) => {
    response.text().then((data) => {
      const script = document.createElement("script");
      script.textContent = data;
      document.body.appendChild(script);
    });
  });
}

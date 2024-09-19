
function renderComponent(componentPath, renderConfigParam) {
  const renderConfig = {
    hasHTML: true,
    hasCSS: true,
    hasJS: false,
    ...renderConfigParam,
  };
  // Carrega o HTML
  if (renderConfig.hasHTML) {
    fetch(`${componentPath}/index.html`).then((response) => {
      response.text().then((data) => {
        const content = document.getElementById("content");
        content.innerHTML += data;
      });
    });
  }

  // Carrega o CSS
  if (renderConfig.hasCSS) {
    fetch(`${componentPath}/styles.css`).then((response) => {
      response.text().then((data) => {
        const style = document.createElement("style");
        style.textContent = data;
        document.head.appendChild(style);
      });
    });
  }

  // Carrega o JS

  if (renderConfig.hasJS) {
    fetch(`${componentPath}/script.js`).then((response) => {
      response.text().then((data) => {
        const script = document.createElement("script");

        script.setAttribute("src", `${componentPath}/script.js`);

        document.body.insertBefore(script, document.body.firstChild);
      });
    });
  }
}

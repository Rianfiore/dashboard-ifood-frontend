function handleSidebarItemClick(event, screen) {
  const hasMainContentWithScreenId = document.getElementById(screen);

  if (hasMainContentWithScreenId) return;

  const mainContent = document.getElementsByTagName("main")[0];
  const otherSidebarItems = document.querySelectorAll("#asidebar__item-title");

  otherSidebarItems.forEach((sidebarItem) => {
    sidebarItem.classList.remove("selected");
  });

  const sidebarItem = event.target;

  if (mainContent) {
    mainContent.remove();
  }

  renderComponent(`/screens/${screen}`, { hasJS: true });

  sidebarItem.classList.add("selected");
}

function handleExpandSidebarClick(event) {
  const el = event.target;
  const aside = document.getElementById("aside");

  if (el.classList.contains("expanded")) {
    el.classList.remove("expanded");
    aside.classList.remove("expanded");
  } else {
    el.classList.add("expanded");
    aside.classList.add("expanded");
  }
}

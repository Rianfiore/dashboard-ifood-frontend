export function createCard(iconClass = '', title, value) {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'custom-card d-flex align-items-center';

  if (iconClass) {
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'icon-wrapper';
  
      const icon = document.createElement('i');
      icon.className = iconClass;
      iconWrapper.appendChild(icon);
      cardContainer.appendChild(iconWrapper);
  }

  const textContainer = document.createElement('div');
  textContainer.className = iconClass ? 'ms-3' : 'ms-3 no-icon';

  const cardTitle = document.createElement('p');
  cardTitle.className = 'card-title mb-1';
  cardTitle.textContent = title;

  const cardValue = document.createElement('p');
  cardValue.className = 'card-value';
  cardValue.textContent = value;

  textContainer.appendChild(cardTitle);
  textContainer.appendChild(cardValue);
  cardContainer.appendChild(textContainer);

  return cardContainer;
}

const stockList = document.querySelector('.stock-list');

stockList.addEventListener('click', (event) => {
  const clickedItem = event.target.closest('li');
  if (clickedItem) {
    const stockSymbol = clickedItem.dataset.stock;
    openStockPopup(stockSymbol);
  }
});

function openStockPopup(stockSymbol) {
  const popup = document.createElement('div');
  popup.classList.add('stock-popup');

  const title = document.createElement('h2');
  title.textContent = `Stock Details for ${stockSymbol}`;
  popup.appendChild(title);

  // Add buttons with placeholder content (replace with your functionality)
  const buyButton = document.createElement('button');
  buyButton.textContent = 'Buy Shares';
  buyButton.addEventListener('click', () => {
    console.log('Buy button clicked for', stockSymbol);
  });

  const sellButton = document.createElement('button');
  sellButton.textContent = 'Sell Shares';
  sellButton.addEventListener('click', () => {
    console.log('Sell button clicked for', stockSymbol);
  });

  const moreInfoButton = document.createElement('button');
  moreInfoButton.textContent = 'More Info';
  moreInfoButton.addEventListener('click', () => {
    console.log('More Info button clicked for', stockSymbol);
  });

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    popup.remove();
  });

  // Append all child elements to the popup
  popup.appendChild(buyButton);
  popup.appendChild(sellButton);
  popup.appendChild(moreInfoButton);
  popup.appendChild(closeButton);

  // Append the popup to the body and display it
  document.body.appendChild(popup);
}

const stockList = document.querySelector('.stock-list');

stockList.addEventListener('click', (event) => {
  const clickedItem = event.target.closest('li');
  if (clickedItem) {
    const stockSymbol = clickedItem.dataset.stock;
    openStockPopup(stockSymbol);
  }
});

function openStockPopup(stockSymbol) {
  // Simulate some content for the popup
  const popupContent = `<h2>Stock Details for ${stockSymbol}</h2>
  <p>This is a placeholder for detailed information about stock ${stockSymbol}. You can add charts, news, or other relevant data here.</p>`;

  // Create a popup element
  const popup = document.createElement('div');
  popup.classList.add('stock-popup');
  popup.innerHTML = popupContent;

  // Add a close button to the popup
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    popup.remove();
  });
  popup.appendChild(closeButton);

  // Append the popup to the body and position it
  document.body.appendChild(popup);
  popup.style.position = 'fixed';  /* Make the popup fixed to the viewport */
  popup.style.bottom = '0';  /* Position it at the bottom */
  popup.style.left = '50%';  /* Center horizontally */
  popup.style.transform = 'translateX(-50%)';  /* Account for centering offset */

  // Set fixed size and grayish purple background color (same as before)
  popup.style.width = '300px';
  popup.style.height = '300px';
  popup.style.background = 'rgba(128, 128, 144, 0.7)';
  popup.style.color = '#fff';
  popup.style.padding = '1em';
  popup.style.borderRadius = '5px';
}

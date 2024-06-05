let balance = 10000;
const myList = [];

const stockList = document.querySelector('.stock-list');
const balanceElement = document.getElementById('balance');
const myListElement = document.getElementById('myList');

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
    buyShares(stockSymbol);
  });

  const sellButton = document.createElement('button');
  sellButton.textContent = 'Sell Shares';
  sellButton.addEventListener('click', () => {
    sellShares(stockSymbol);
  });

  const moreInfoButton = document.createElement('button');
  moreInfoButton.textContent = 'More Info';
  moreInfoButton.addEventListener('click', () => {
    console.log('More Info button clicked for', stockSymbol);
    // Fetch and display more stock info here
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

  // Close popup on ESC key press
  document.addEventListener('keydown', function escKeyListener(event) {
    if (event.key === 'Escape') {
      popup.remove();
      document.removeEventListener('keydown', escKeyListener);
    }
  });
}

function buyShares(stockSymbol) {
  const price = getStockPrice(stockSymbol); // Replace with real API call
  if (balance >= price) {
    balance -= price;
    myList.push(stockSymbol);
    updatePortfolio();
    console.log(`Bought ${stockSymbol} for $${price}`);
  } else {
    console.log('Insufficient balance');
  }
}

function sellShares(stockSymbol) {
  const price = getStockPrice(stockSymbol); // Replace with real API call
  const index = myList.indexOf(stockSymbol);
  if (index !== -1) {
    balance += price;
    myList.splice(index, 1);
    updatePortfolio();
    console.log(`Sold ${stockSymbol} for $${price}`);
  } else {
    console.log('Stock not in portfolio');
  }
}

function updatePortfolio() {
  balanceElement.textContent = balance.toFixed(2);
  myListElement.innerHTML = '';
  myList.forEach(stock => {
    const li = document.createElement('li');
    li.textContent = stock;
    myListElement.appendChild(li);
  });
}

function getStockPrice(stockSymbol) {
  // Mock function to get stock price, replace with real API call
  const prices = {
    'AAPL': 150,
    'GOOGL': 2800,
    'MSFT': 300
  };
  return prices[stockSymbol] || 0;
}

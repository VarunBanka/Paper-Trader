let balance = parseFloat(localStorage.getItem('balance')) || 10000;
const myList = JSON.parse(localStorage.getItem('myList')) || [];

const stockList = document.querySelector('.stock-list');
const balanceElement = document.getElementById('balance');
const myListElement = document.getElementById('myList');

if (stockList) {
  stockList.addEventListener('click', (event) => {
    const clickedItem = event.target.closest('li');
    if (clickedItem) {
      const stockSymbol = clickedItem.dataset.stock;
      openStockPopup(stockSymbol);
    }
  });
}

if (balanceElement && myListElement) {
  updatePortfolio();
}

function openStockPopup(stockSymbol) {
  const popup = document.createElement('div');
  popup.classList.add('stock-popup');

  const title = document.createElement('h2');
  title.textContent = `Stock Details for ${stockSymbol}`;
  popup.appendChild(title);

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
  });

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    popup.remove();
  });

  popup.appendChild(buyButton);
  popup.appendChild(sellButton);
  popup.appendChild(moreInfoButton);
  popup.appendChild(closeButton);

  document.body.appendChild(popup);

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
    localStorage.setItem('balance', balance);
    localStorage.setItem('myList', JSON.stringify(myList));
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
    localStorage.setItem('balance', balance);
    localStorage.setItem('myList', JSON.stringify(myList));
    updatePortfolio();
    console.log(`Sold ${stockSymbol} for $${price}`);
  } else {
    console.log('Stock not in portfolio');
  }
}

function updatePortfolio() {
  if (balanceElement && myListElement) {
    balanceElement.textContent = balance.toFixed(2);
    myListElement.innerHTML = '';
    myList.forEach(stock => {
      const li = document.createElement('li');
      li.textContent = stock;
      myListElement.appendChild(li);
    });
  }
}

function getStockPrice(stockSymbol) {
  const prices = {
    'AAPL': 150,
    'GOOGL': 2800,
    'MSFT': 300
  };
  return prices[stockSymbol] || 0;
}

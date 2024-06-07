const stocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: Math.floor(Math.random() * 1000) + 1000 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: Math.floor(Math.random() * 1000) + 200 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: Math.floor(Math.random() * 1000) + 1500 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: Math.floor(Math.random() * 1000) + 500 },
  { symbol: 'NFLX', name: 'Netflix Inc.', price: Math.floor(Math.random() * 1000) + 300 },
  { symbol: 'FB', name: 'Meta Platforms Inc.', price: Math.floor(Math.random() * 1000) + 150 },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: Math.floor(Math.random() * 1000) + 400 },
  { symbol: 'INTC', name: 'Intel Corporation', price: Math.floor(Math.random() * 1000) + 50 },
  { symbol: 'AMD', name: 'Advanced Micro Devices Inc.', price: Math.floor(Math.random() * 1000) + 80 },
  { symbol: 'DIS', name: 'The Walt Disney Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'BA', name: 'The Boeing Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'BABA', name: 'Alibaba Group Holding Ltd.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'JNJ', name: 'Johnson & Johnson', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'V', name: 'Visa Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'WMT', name: 'Walmart Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'PG', name: 'Procter & Gamble Co.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'MA', name: 'Mastercard Incorporated', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'PFE', name: 'Pfizer Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'KO', name: 'The Coca-Cola Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'XOM', name: 'Exxon Mobil Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'PEP', name: 'PepsiCo Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'CSCO', name: 'Cisco Systems Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'MRK', name: 'Merck & Co., Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'T', name: 'AT&T Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'VZ', name: 'Verizon Communications Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'ABT', name: 'Abbott Laboratories', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'MDT', name: 'Medtronic plc', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'UNH', name: 'UnitedHealth Group Incorporated', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'LLY', name: 'Eli Lilly and Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'CVX', name: 'Chevron Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'MMM', name: '3M Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'IBM', name: 'International Business Machines Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'GE', name: 'General Electric Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'NKE', name: 'NIKE, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'MCD', name: 'McDonald\'s Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'COST', name: 'Costco Wholesale Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'TGT', name: 'Target Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'ORCL', name: 'Oracle Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'SAP', name: 'SAP SE', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'TM', name: 'Toyota Motor Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'SNE', name: 'Sony Group Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'ADBE', name: 'Adobe Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'PYPL', name: 'PayPal Holdings, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'QCOM', name: 'QUALCOMM Incorporated', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'AVGO', name: 'Broadcom Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'TXN', name: 'Texas Instruments Incorporated', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'HON', name: 'Honeywell International Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'BMY', name: 'Bristol-Myers Squibb Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'SBUX', name: 'Starbucks Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'GS', name: 'The Goldman Sachs Group, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'MS', name: 'Morgan Stanley', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'BKNG', name: 'Booking Holdings Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'NOW', name: 'ServiceNow, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'ISRG', name: 'Intuitive Surgical, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'LRCX', name: 'Lam Research Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'AMAT', name: 'Applied Materials, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'ADP', name: 'Automatic Data Processing, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'SPGI', name: 'S&P Global Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'PLD', name: 'Prologis, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'MO', name: 'Altria Group, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'CL', name: 'Colgate-Palmolive Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'KMB', name: 'Kimberly-Clark Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'GIS', name: 'General Mills, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'EL', name: 'The Estée Lauder Companies Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'ZTS', name: 'Zoetis Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'C', name: 'Citigroup Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'SYY', name: 'Sysco Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'EMR', name: 'Emerson Electric Co.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'DHR', name: 'Danaher Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'LMT', name: 'Lockheed Martin Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'RTN', name: 'Raytheon Technologies Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'UTX', name: 'United Technologies Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'CAT', name: 'Caterpillar Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'UPS', name: 'United Parcel Service, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'FDX', name: 'FedEx Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'DE', name: 'Deere & Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'NEE', name: 'NextEra Energy, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'DUK', name: 'Duke Energy Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'SO', name: 'The Southern Company', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'D', name: 'Dominion Energy, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'EXC', name: 'Exelon Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'SRE', name: 'Sempra Energy', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'AEP', name: 'American Electric Power Company, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'PPL', name: 'PPL Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'PEG', name: 'Public Service Enterprise Group Incorporated', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'XEL', name: 'Xcel Energy Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'ED', name: 'Consolidated Edison, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'FE', name: 'FirstEnergy Corp.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'PCG', name: 'PG&E Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'EIX', name: 'Edison International', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'AWK', name: 'American Water Works Company, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'AES', name: 'The AES Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'CERN', name: 'Cerner Corporation', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'HCA', name: 'HCA Healthcare, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'ANTM', name: 'Anthem, Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'HUM', name: 'Humana Inc.', price: Math.floor(Math.random() * 1000) + 100 },
  { symbol: 'CI', name: 'Cigna Corporation', price: Math.floor(Math.random() * 1000) + 100 }
];

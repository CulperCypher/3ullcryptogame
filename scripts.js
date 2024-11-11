// Cryptocurrency Data and Initial Values
const cryptocurrencies = [
    { name: "Bitcoin", symbol: "BTC", price: 30000, change: 2, news: "Bitcoin hits a new all-time high!" },
    { name: "Ethereum", symbol: "ETH", price: 2000, change: -1.5, news: "Ethereum upgrade successful, price rises." },
    { name: "Avalanche", symbol: "AVAX", price: 60, change: 3, news: "Avalanche network grows, attracting more developers." },
    { name: "Solana", symbol: "SOL", price: 150, change: -0.5, news: "Solana's transaction speeds increase, market reacts." },
    { name: "Dogecoin", symbol: "DOGE", price: 0.08, change: 5, news: "Dogecoin surges after Elon Musk tweet." },
    { name: "Cardano", symbol: "ADA", price: 1.2, change: 0.2, news: "Cardano's smart contract adoption increasing." },
    { name: "Litecoin", symbol: "LTC", price: 200, change: -2, news: "Litecoin experiences some sell-off after market correction." },
    { name: "Chainlink", symbol: "LINK", price: 25, change: 1.5, news: "Chainlink signs new partnerships with big companies." },
    { name: "Polkadot", symbol: "DOT", price: 10, change: -0.5, news: "Polkadot faces competition from new Layer 2 solutions." },
    { name: "3ULL", symbol: "3ULL", price: 0.5, change: 0.8, news: "3ULL coin seeing growing interest in the gaming community." },
    { name: "Shiba Inu", symbol: "SHIB", price: 0.00001, change: 10, news: "Shiba Inu announces major partnership with gaming platform." },
    { name: "XRP", symbol: "XRP", price: 0.75, change: -1, news: "XRP faces challenges in ongoing legal battles." },
];

let portfolio = [
    { name: "Bitcoin", amount: 0, value: 0 },
    { name: "Ethereum", amount: 0, value: 0 },
    { name: "Avalanche", amount: 0, value: 0 },
    { name: "Solana", amount: 0, value: 0 },
    { name: "Dogecoin", amount: 0, value: 0 },
    { name: "Cardano", amount: 0, value: 0 },
    { name: "Litecoin", amount: 0, value: 0 },
    { name: "Chainlink", amount: 0, value: 0 },
    { name: "Polkadot", amount: 0, value: 0 },
    { name: "3ULL", amount: 0, value: 0 },
    { name: "Shiba Inu", amount: 0, value: 0 },
    { name: "XRP", amount: 0, value: 0 },
];

let balance = 10000; // Starting balance

let currentMonth = 1;

function updateMarket() {
    const cryptoList = document.getElementById("crypto-list");
    cryptoList.innerHTML = "";
    cryptocurrencies.forEach(crypto => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${crypto.name} (${crypto.symbol})</td>
            <td>$${crypto.price}</td>
            <td>${crypto.change}%</td>
            <td><button onclick="buyCrypto('${crypto.name}')">Buy</button></td>
        `;
        cryptoList.appendChild(row);
    });
}

function updatePortfolio() {
    const portfolioList = document.getElementById("portfolio-list");
    portfolioList.innerHTML = "";
    portfolio.forEach(coin => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${coin.name}</td>
            <td>${coin.amount}</td>
            <td>$${coin.value}</td>
        `;
        portfolioList.appendChild(row);
    });
}

function updateNews() {
    const newsText = document.getElementById("news-text");
    const crypto = cryptocurrencies[Math.floor(Math.random() * cryptocurrencies.length)];
    newsText.innerText = `Market News: ${crypto.news}`;
}

function updateChart() {
    // Placeholder chart for price simulation
    const ctx = document.getElementById("price-chart").getContext("2d");
    const chartData = cryptocurrencies.map(crypto => crypto.price);
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: cryptocurrencies.map(crypto => crypto.name),
            datasets: [{
                label: 'Cryptocurrency Prices',
                data: chartData,
                borderColor: 'rgba(0,123,255,0.5)',
                fill: false,
            }]
        }
    });
}

function buyCrypto(cryptoName) {
    const crypto = cryptocurrencies.find(crypto => crypto.name === cryptoName);
    if (balance >= crypto.price) {
        balance -= crypto.price;
        const coin = portfolio.find(coin => coin.name === crypto.name);
        coin.amount += 1;
        coin.value = coin.amount * crypto.price;
        updatePortfolio();
    } else {
        alert("Not enough balance to buy this coin.");
    }
}

document.getElementById("next-month").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 12) {
        alert("Game Over! Thanks for playing.");
    } else {
        updateMarket();
        updateNews();
        updateChart();
    }
});

updateMarket();
updatePortfolio();
updateNews();
updateChart();

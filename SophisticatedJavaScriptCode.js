// File: SophisticatedJavaScriptCode.js
// Description: This code demonstrates a sophisticated JavaScript application that simulates a stock market portfolio tracker.

// Portfolio class to manage a collection of stocks
class Portfolio {
  constructor(name) {
    this.name = name;
    this.stocks = [];
  }

  addStock(stock) {
    this.stocks.push(stock);
  }

  removeStock(stock) {
    const index = this.stocks.indexOf(stock);
    if (index !== -1) {
      this.stocks.splice(index, 1);
    }
  }

  calculateTotalValue() {
    let totalValue = 0;
    for (const stock of this.stocks) {
      totalValue += stock.quantity * stock.price;
    }
    return totalValue;
  }

  printPortfolio() {
    console.log(`Portfolio: ${this.name}`);
    for (const stock of this.stocks) {
      console.log(`Stock: ${stock.name}, Quantity: ${stock.quantity}, Price: $${stock.price}`);
    }
    console.log(`Total Value: $${this.calculateTotalValue()}`);
  }
}

// Stock class to represent individual stocks
class Stock {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
}

// Create a portfolio and add stocks
const portfolio = new Portfolio("My Portfolio");
const stock1 = new Stock("AAPL", 10, 150.25);
const stock2 = new Stock("GOOGL", 5, 2500.75);
const stock3 = new Stock("MSFT", 8, 300.50);

portfolio.addStock(stock1);
portfolio.addStock(stock2);
portfolio.addStock(stock3);

// Print the portfolio details
portfolio.printPortfolio();

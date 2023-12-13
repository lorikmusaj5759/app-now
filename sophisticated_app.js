/**
 * Filename: sophisticated_app.js
 * 
 * Description:
 * This JavaScript file includes a sophisticated application that simulates an e-commerce store.
 * It demonstrates various functionalities, such as user registration, product listing, cart management,
 * and order processing, using complex algorithms and data structures.
 * 
 * Note: The code provided is a simplified example and not meant for production use. 
 * It may contain some pseudo code to explain the concepts.
 */


// Constants
const TAX_RATE = 0.1;
const DISCOUNT_THRESHOLD = 100;

// Data Structures
let users = [];
let products = [];
let cart = [];

// Model - User
class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.cartId = null;
    this.orderHistory = [];
  }
  
  addToCart(productId, quantity) {
    // Check if the product exists and has sufficient quantity in stock
    const product = products.find(p => p.id === productId);
    if (!product || product.stock < quantity) {
      console.log("Product not available or quantity exceeded.");
      return;
    }
    
    // Check if the user already has a cart, if not create one
    if (!this.cartId) {
      const newCart = { userId: this.email, items: [] };
      cart.push(newCart);
      this.cartId = newCart;
    }
    
    // Add product to the user's cart
    const cartItem = { productId, quantity };
    this.cartId.items.push(cartItem);
    
    // Decrease the product stock
    product.stock -= quantity;
    console.log("Product added to cart successfully.");
  }
  
  checkout() {
    // Check if the user has any items in the cart
    if (!this.cartId || this.cartId.items.length === 0) {
      console.log("No items in the cart to checkout.");
      return;
    }
    
    const items = this.cartId.items;
    let total = 0;
    
    for (const item of items) {
      // Find the product in the product list
      const product = products.find(p => p.id === item.productId);
      
      // Calculate the item price with tax
      const itemPrice = product.price * item.quantity * (1 + TAX_RATE);
      
      // Add the item price to the total
      total += itemPrice;
    }
    
    // Apply discount if the total exceeds the discount threshold
    if (total > DISCOUNT_THRESHOLD) {
      total *= 0.9; // Apply 10% discount
    }
    
    // Create an order with the calculated total
    const order = { userId: this.email, total };
    
    // Add the order to the user's orderHistory
    this.orderHistory.push(order);
    
    // Clear the user's cart
    this.cartId.items = [];
    
    console.log("Checkout completed. Order placed successfully.");
  }
}

// Model - Product
class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

// Initialization
function initializeData() {
  // Create some users
  const user1 = new User("John", "Doe", "john.doe@example.com", "123456");
  const user2 = new User("Alice", "Smith", "alice.smith@example.com", "qwerty");
  users.push(user1, user2);
  
  // Create some products
  const prod1 = new Product(1, "Product 1", 10.99, 50);
  const prod2 = new Product(2, "Product 2", 19.99, 100);
  const prod3 = new Product(3, "Product 3", 5.99, 30);
  products.push(prod1, prod2, prod3);
}

// Usage
initializeData();

// User actions
const user = users[0];
user.addToCart(1, 2);
user.addToCart(2, 1);
user.checkout();

console.log(user); // See the updated user object


// ... More logic and functionalities ...
// ...

// Note: This is a simplified example code to demonstrate a concept.
// In an actual application, you would further break down the code into smaller functions and modules,
// handle errors and validations, integrate with a database, and implement security measures, among other tasks.
// The code provided here is for illustrative purposes only.
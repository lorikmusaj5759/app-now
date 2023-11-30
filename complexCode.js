/* 
Filename: complexCode.js
Content: This code demonstrates a complex implementation of a chatbot using JavaScript.
*/

// User Class
class User {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }
  
  sendMessage(message) {
    this.messages.push(message);
  }
}

// Chatbot Class
class Chatbot {
  constructor(name) {
    this.name = name;
    this.responses = [];
  }
  
  addResponse(response) {
    this.responses.push(response);
  }
  
  generateResponse(message) {
    for(let i = 0; i < this.responses.length; i++) {
      if(message.includes(this.responses[i].trigger)) {
        return this.responses[i].response;
      }
    }
    return "I'm sorry, I don't understand.";
  }
}

// Response Class
class Response {
  constructor(trigger, response) {
    this.trigger = trigger;
    this.response = response;
  }
}

// Main function
function main() {
  // Creating users and chatbot
  const user1 = new User("John");
  const user2 = new User("Emily");
  const chatbot = new Chatbot("Chatbot");

  // Adding responses to the chatbot
  const response1 = new Response("hi", "Hello there!");
  const response2 = new Response("how are you", "I'm doing well, thank you.");
  const response3 = new Response("weather", "The weather is sunny today.");
  chatbot.addResponse(response1);
  chatbot.addResponse(response2);
  chatbot.addResponse(response3);
  
  // User1 sends messages
  user1.sendMessage("Hi, how are you?");
  user1.sendMessage("What's the weather like today?");
  
  // Chatbot responds to User1's messages
  for(let i = 0; i < user1.messages.length; i++) {
    const response = chatbot.generateResponse(user1.messages[i]);
    console.log(`${chatbot.name}: ${response}`);
  }
  
  // User2 sends a message
  user2.sendMessage("Hello, Chatbot!");

  // Chatbot responds to User2's message
  const response = chatbot.generateResponse(user2.messages[0]);
  console.log(`${chatbot.name}: ${response}`);
}

// Call main function
main();
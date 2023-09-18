// This is a Node.js Express application that sets up a simple server for handling payments through Stripe.
// Dependencies: It begins by importing necessary dependencies: express, cors, body-parser, and dotenv.

// App Configuration: The Express app is created using express(), and CORS 
// (Cross-Origin Resource Sharing) and body parsing middleware are added to the app. CORS 
// middleware allows requests from different origins, and body parsing middleware is used to 
// parse JSON and URL-encoded data in incoming requests.

// Port Configuration: The application reads the PORT environment variable from the .env file using dotenv 
// and assigns it to the port variable. This allows the server to listen on the specified port.

// Stripe Setup: It initializes the Stripe library with the STRIPE_SECRET_KEY from the .env file. 
// This key is used to authenticate with Stripe's API.

// Routes:

// app.get("/"): This is a simple route that responds with "Hello World!" when you access the root URL.
// app.post("/pay"): This route is designed to handle payment requests. When a POST request is made to 
// this route, it expects a JSON payload with a token (Stripe token) and an amount. It then uses the Stripe
//  library to create a charge with the provided token, specifying the amount in USD.
// Server Listening: The server is started and listens on the specified port. A log message is displayed to
//  indicate that the server is running.

// In summary, this Express application sets up a server to handle payment requests via Stripe. When a 
// POST request is made to the "/pay" route with the required data, it creates a charge with Stripe for the 
// specified amount in USD. This can be used as a backend for processing payments in an e-commerce or payment 
// processing application

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/pay", async (req, res) => {
  console.log(req.body.token);
  await Stripe.charges.create({
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  });
});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
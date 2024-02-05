import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";

import handlerFunctions from "./controller.js";

// Set up express instance
const app = express();

// Set up middleware
app.use(morgan("dev")); // while in dev environment use morgan for addidtional logging, etc
app.use(express.urlencoded({ extended: false })); // allows express to read POST request objects
app.use(express.static('public')); // pointing to the public folder for vite/express to understand where to look
app.use(express.json()); // lets server and front-end know that the'll be communicating with JSON

// Routes

// Before creating an endpoint, address 4 questions:
// 1. What is the purpose of my endpoint
// 2. Will I need any queries/params/body objects for recieving data?
// 3. What will the endpoint string look like? Ex: ("/home")
// 4. What do I want the response to look like when the front-end receives it?

// First Endpoint (GET)
// 1. Get a list of all invoices (TEST_DATA)
// 2. No, generic requestfor all TEST_DATA
// 3. "/invoices"
// 4. [] of invoice {}
app.get("/invoices", handlerFunctions.getInvoices);

// Second Endpoint (POST)
// 1. Add a new row of invoice data to our TEST_DATA in controller.js
// 2. Yes - req.body to contain the new invoice object
// 3. "/invoice/add"
// 4. New invoice {} with a confirmation
app.post("/invoice/add", handlerFunctions.addInvoice);

// Third Endpoint (DELETE)
// 1. Delete a specified invoice from TEST_DATA
// 2. Yes - req.params for id
// 3. "/invoice/delete/:id"
// 4. Send back a boolean comfirmation

app.delete("/invoice/delete/:id", handlerFunctions.deleteInvoice);

// Fourth Endpoint (PUT)
// 1. Update data on the invoice
// 2. id - req.params, rate/description/hours - req.body
// 3. "invoice/update/:id"
// 4. Send back updated invoice with confirmation

app.put("/invoice/update/:id", handlerFunctions.updateInvoice);

// Open up the door to our server
const port = 9999;
ViteExpress.listen(app, port, () => console.log(`Server is running on: http://localhost:${port}`))
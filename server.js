const express = require('express') // Import from node_modules
const app = express() // Functie express(), dit toevoegen aan var app & later settings aan toevoegen.
app.use(express.json())

console.log("API is up and running, YIPEEE");

const usersRouter = require("./routes/users");
const shoppingnodeRouter = require("./routes/shoppingnode");
const receiptRouter = require("./routes/receipt");

app.use("/users", usersRouter);
app.use("/shoppingnode", shoppingnodeRouter);
app.use("/receipt", receiptRouter);

app.use(express.json());

app.listen(3000) // <|°_°|>
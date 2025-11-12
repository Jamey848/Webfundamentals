const express = require('express') // Import from node_modules
const app = express() // Functie express(), dit toevoegen aan var app & later settings aan toevoegen.
app.use(express.json())

console.log("API is up and running, YIPEEE");

const usersRouter = require("./routes/users");
const receiptRouter = require("./routes/receipt");
const receiptitemsRouter = require("./routes/receiptitems");
const metricsRouter = require("./routes/metrics");
const adminRouter = require("./routes/admin");

app.use("/users", usersRouter);
app.use("/receipt", receiptRouter);
app.use("/receiptitems", receiptitemsRouter);
app.use("/metrics", metricsRouter);
app.use("/admin", adminRouter);

app.use(express.json());

app.listen(3000) // <|°_°|>
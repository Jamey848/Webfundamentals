const express = require('express') // Import from node_modules
const app = express() // Functie express(), dit toevoegen aan var app & later settings aan toevoegen.
app.use(express.json())

console.log("API is up and running, YIPEEE");

const usersRouter = require("./routes/users");
const artistRouter = require("./routes/artists");
const goatsRouter = require("./routes/goats");
const songsRouter = require("./routes/songs");
const countriesRouter = require("./routes/countries");
const rankingRouter = require("./routes/ranking");
const votesRouter = require("./routes/votes");

app.use("/artists", artistRouter);
app.use("/goats", goatsRouter);
app.use("/songs", songsRouter);
app.use("/countries", countriesRouter);
app.use("/ranking", rankingRouter);
app.use("/votes", votesRouter);
app.use("/users", usersRouter);

app.use(express.json());

app.listen(3000) // <|°_°|>
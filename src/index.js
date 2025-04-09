const express = require("express");
const { PORT } = require("./config/server");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json({ type: "application/*+json" }));
const { createCity } = require("./controllers/city-controllers");

app.get("/:city", createCity);

async function startServer() {
	app.listen(PORT, () => {
		console.log(`Example app listening on port ${PORT}`);
	});
}

startServer();

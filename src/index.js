const express = require("express");
const { PORT } = require("./config/server");
const app = express();


app.get("/", (req, res) => {
	res.send("Hello World!");
});

async function startServer() {
	app.listen(PORT, () => {
		console.log(`Example app listening on port ${PORT}`);
	});
}

startServer()
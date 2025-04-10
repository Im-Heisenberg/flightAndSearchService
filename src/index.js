const express = require("express");
const { PORT } = require("./config/server");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes");

async function startServer() {
	const app = express();
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use("/api", apiRoutes);
	app.listen(PORT, () => {
		console.log(`Example app listening on port ${PORT}`);
	});
}

startServer();

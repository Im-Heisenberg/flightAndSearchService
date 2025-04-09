const { CityService } = require("../services");

const cityService = new CityService();
async function createCity(req, res) {
	try {
		const response = await cityService.createCity(req.params['city']);
		res.send(response);
	} catch (error) {
		console.log(error);
	}
}

module.exports = { createCity };

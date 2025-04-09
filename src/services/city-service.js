const { CityRepository } = require("../repository");

class CityService {
	constructor() {
		this.cityRepository = new CityRepository();
	}
	createCity(cityName) {
		try {
			const city = this.cityRepository.createCity(cityName);
			return city;
		} catch (error) {
			throw { error };
		}
	}
}
module.exports = CityService;

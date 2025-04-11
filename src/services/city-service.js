const { CityRepository } = require("../repository");

class CityService {
	constructor() {
		this.cityRepository = new CityRepository();
	}
	async createCity(cityName) {
		try {
			return await this.cityRepository.createCity(cityName);
		} catch (error) {
			throw { error };
		}
	}
	async updateCity(cityId, updateData = {}) {
		try {
			return await this.cityRepository.updateCity(cityId, updateData);
		} catch (error) {
			throw { error };
		}
	}
	async delteCity(cityId) {
		try {
			return await this.cityRepository.deleteCity(cityId);
		} catch (error) {
			throw { error };
		}
	}
	async getCity(cityId) {
		try {
			return await this.cityRepository.getCity(cityId);
		} catch (error) {
			throw { error };
		}
	}
	async getAllCities(filter) {
		try {
			return await this.cityRepository.getAllCities(filter);
		} catch (error) {
			throw { error };
		}
	}
}
module.exports = CityService;

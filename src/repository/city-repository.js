const { City } = require("../models/");
const { Op } = require("sequelize");
const { constants } = require("../utils/constants");
class CityRepository {
	async createCity(name) {
		try {
			const city = await City.create({ name });
			return city;
		} catch (error) {
			throw { error };
		}
	}
	async deleteCity(cityId) {
		try {
			await City.destroy({
				where: {
					id: cityId,
				},
			});
			return true;
		} catch (error) {
			throw { error };
		}
	}
	async updateCity(cityId, updateData={}) {
		try {
			const city = await City.findByPk(cityId);
			city.name = updateData.name;
			await city.save();
			return city;
		} catch (error) {
			throw { error };
		}
	}
	async findCity(cityId) {
		try {
			return await City.findByPk(cityId);
		} catch (error) {
			throw { error };
		}
	}
	async findAllCities(filter) {
		try {
			if (filter.name) {
				const relatedCities = await City.findAll({
					where: {
						name: {
							[Op.endsWith]: filter.name,
						},
					},
					limit: constants.citySuggestionLimit,
				});
				return relatedCities;
			}
			const cities = await City.findAll();
			return cities;
		} catch (error) {
			throw { error };
		}
	}
}
module.exports = CityRepository;

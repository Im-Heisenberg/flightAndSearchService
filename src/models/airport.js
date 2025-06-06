"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Airport extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasOne(models.City, {
				foreignKey: "cityId", //foreign key in this table
				onDelete: "CASCADE",
			});
		}
	}
	Airport.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			cityId: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			address: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Airport",
		}
	);
	return Airport;
};

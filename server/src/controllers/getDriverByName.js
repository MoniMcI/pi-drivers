const axios = require("axios");
const { Op } = require('sequelize'); 
const { Driver, Team } = require('../db');


const getDriverByName = async (name) => {


    // Realiza la búsqueda en la base de datos
    const dbDrivers = await Driver.findAll({
      where: {
        forename: {
          [Op.iLike]: `%${name}%`
        }
      },
      include: Team,
    });

    // Realiza la búsqueda en la API externa
    const apiUrl = `http://localhost:5000/drivers?name.forename=${encodeURIComponent(name)}`;
    const apiResponse = await axios.get(apiUrl);

    const apiDrivers = apiResponse.data;

    // Combina los resultados de la base de datos y la API
    const drivers = [...dbDrivers, ...apiDrivers].slice(0,15);
    return drivers;
}

module.exports = getDriverByName;
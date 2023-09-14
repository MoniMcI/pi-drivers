const axios = require("axios");
const { Driver, Team } = require('../db');

module.exports = async (req, res)=>{

    try {
        // Hacer una solicitud GET a la API externa en localhost:5000/drivers
        const apiResponse = await axios.get("http://localhost:5000/drivers");
    
        // Obtener los datos de los conductores de la respuesta
        const apiDrivers = apiResponse.data.map(apiDriver => {
          const { forename, surname } = apiDriver.name;
          return {
            ...apiDriver,
            forename,
            surname
          };
        });

        // Obtener los conductores de la base de datos
        const dbDrivers = await Driver.findAll({
          include: Team,
        }
        );

        // Combinar los conductores de ambas fuentes en un solo arreglo
        const allDrivers = [...dbDrivers, ...apiDrivers];

        

        // Envía la lista de conductores combinados como respuesta
        res.json(allDrivers);
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la lista de conductores' });
      }

}


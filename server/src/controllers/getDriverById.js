const axios = require("axios");
const { Driver, Team } = require('../db');



const URL_BASE = 'http://localhost:5000/drivers/'

const getDriverById = async (req, res)=>{

    const {id} = req.params
    console.log(id);

    if (isNaN(id)) {

        const driver = await Driver.findByPk(id, { include: Team });
        console.log('Driver: ', driver)
        if (!driver) { //no hay pilotos en la DB con es id
            throw new Error(`Driver with ID ${id} not found in the database`);
        }
        const driverData = driver.toJSON(); // Convierte el modelo Sequelize a objeto JavaScript
        driverData.img = driverData.image; // Cambia el nombre del campo
        delete driverData.image; // Elimina el campo antiguo

        return res.status(200).json(driverData);        
 


    } else {

        try {
            const response = await axios(`${URL_BASE}${id}`)
            //console.log("response: ",response.data)
    
            const {  name,  nationality, image, description, dob, teams   } = response.data
            const { forename, surname } = name;
            const { url } = image;
            const img = url  
            const driver = { id, forename, surname, nationality, img, description, dob, teams}
            console.log("Driver: ", driver)
            return res.status(200).json(driver) 
        } catch (error) {
            res.status(500).json({message: error});
        }        

    }

}

module.exports = getDriverById;

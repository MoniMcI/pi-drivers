const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');

const PORT = 3001;


const { Driver, Team } = require('./src/db') // Asegúrate de importar tus modelos para crear el registro


conn.sync({ force: true })
.then( async () => {

  //---empieza codigo para crear un registro
  const newDriverData = {
    forename: 'Olaf Paul',
    surname: 'Mair',
    description: 'A talented austrian racing driver.',
    image: 'https://donolli.com.ar/olli.jpg',
    nationality: 'Austrian',
    birthDate: '1955-10-03',
  };

  // Crea el registro del conductor en la base de datos
  const driver1 = await Driver.create(newDriverData);

  const teamsToAdd = [
    { name: 'Mercedes' },
    { name: 'Ferrari '}
    // Agrega más equipos si es necesario
  ];
  

  // Crea equipos en paralelo
  const createdTeams = await Promise.all(
    teamsToAdd.map((teamData) => Team.create(teamData))
  );

  // Establece las relaciones entre el conductor y los equipos
  await driver1.addTeams(createdTeams);
    
    

    
//---fin codigo crear registro

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))





const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');

const PORT = process.env.PORT || 3001;


const { Driver, Team } = require('./src/db') 


conn.sync()    
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(error => console.error(error));





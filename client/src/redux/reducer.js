import { GET_ALL_DRIVERS, 
         GET_DRIVER_BY_NAME, 
         FILTER_DRIVERS_BY_TEAM, 
         GET_TEAMS, 
         FILTER_DRIVERS_BY_SOURCE,
         ORDER_DRIVERS,
         POST_DRIVERS,
         SET_CURRENT_PAGE,
         } from './actions/action_types';

let initialState = { 
    allDrivers:[], 
    driversCopy:[], 
    driversOrigin:[],
    teams: [],
    filteredDrivers: [],
    currentPage: 1,
};

function reducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                driversCopy: action.payload,
            }
        case GET_DRIVER_BY_NAME:
            return {
                ...state,
                allDrivers: action.payload,
                currentPage: 1,
            }   
        case GET_TEAMS:
            console.log("Datos de equipos recibidos:", action.payload);
            return {
                ...state,
                teams: action.payload,
            };     
                          

        case FILTER_DRIVERS_BY_TEAM:
            const selectedTeam = action.payload;
            console.log("actionpayload: ", action.payload);
          
            if (selectedTeam === "All Teams") {
              return {
                ...state,
                allDrivers: state.driversCopy,
                currentPage: 1,
              };
            } else {
           // Filtrar registros que tengan "teams" como string
           const filteredFromApi = state.driversCopy.filter((driver) => {
            if (typeof driver.teams === 'string' && driver.teams.includes(selectedTeam)) {
              return true;
            }
            return false;
          });
      
          // Filtrar registros que tengan "Teams" como una matriz de objetos
            // Filtra desde la base de datos
            const filteredFromDb = state.driversCopy.filter((driver) => {
                if (Array.isArray(driver.Teams)) {
                    
                  return driver.Teams.some((team) => team.name === selectedTeam);
                  
                }
                return false;
              });
      
          // Combinar los resultados de ambos filtros en una sola lista
          const combinedFilteredDrivers = [...filteredFromApi, ...filteredFromDb];

      
          return {
            ...state,
            allDrivers: combinedFilteredDrivers,
            currentPage: 1,
          };                
   
        }
          
////////////////////
            case SET_CURRENT_PAGE:
                return {
                ...state,
                currentPage: action.payload,
                };

            
        case FILTER_DRIVERS_BY_SOURCE:
            if (action.payload === "Api") {
                const allDriversApi = state.driversCopy.filter(
                    (driver) => typeof driver.id === "number"
                );
                
                return { ...state, allDrivers: allDriversApi,currentPage: 1, };
            }
            if (action.payload === "Base de Datos") {
                const allDriversBD = state.driversCopy.filter(
                    (driver) => typeof driver.id === "string"
                );
                if (allDriversBD.length === 0) {
                    return { ...state, allDrivers: [{ message: "No se encontraron Drivers en la DB" }]};
                } else {
                    return { ...state, allDrivers: allDriversBD, currentPage: 1, };
                }
            }
            if (action.payload === "All"){
                return {
                    ...state,
                    allDrivers: state.driversCopy,
                    currentPage: 1,
                };
            } 
            
        case POST_DRIVERS:
                return {
                  ...state,
                };    

        case ORDER_DRIVERS:

            const orderedDrivers = [...state.driversCopy];
 
            if (action.payload === "Ascending"){
                orderedDrivers.sort((a, b) => a.forename.localeCompare(b.forename))

            } else if (action.payload === "Descending") {

                orderedDrivers.sort((a, b) => b.forename.localeCompare(a.forename))

            } else if (action.payload === "Fecha Asc"){
                orderedDrivers.sort((a, b) => {
                    const dateA = new Date(a.dob);
                    const dateB = new Date(b.dob);
                    return dateA - dateB;
                  })                
             if (action.payload === "Fecha Desc") {
                orderedDrivers.sort((a, b) => {
                    const dateA = new Date(a.dob);
                    const dateB = new Date(b.dob);
                    return dateB - dateA;
                    })
                }
            }
            return {
                ...state,
                allDrivers: orderedDrivers,
                currentPage: 1,
            }
           
       

        default:
            return state
    }
}

export default reducer;
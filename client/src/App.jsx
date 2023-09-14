import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from './components/cards/Cards';
import LandingPage from './components/landing/LandingPage';
import Nav from './components/nav/nav';
import Detail from './components/detail/Detail';



function App() {

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [drivers, setDrivers] = useState([]); // Almacena los datos de los conductores

  useEffect(() => {
    // Realiza una solicitud GET a la API del backend (getAllDrivers)
    axios.get('http://localhost:3001/drivers')
      .then((response) => {
        setDrivers(response.data); // Almacena los datos en el estado
      })
      .catch((error) => {
        console.error('Error al obtener los conductores:', error);
      });
  }, []); // El segundo argumento es un arreglo vacío para asegurarse de que el efecto se ejecute solo una vez

  const onSearch = async (id) =>{
    if(!id) alert('Ingresa un Id')

    if(drivers.find(driver => driver.id === id)){
       alert( `Ya existe ese driver con ese id ${id}`);
       return;
    }

    try {

       const { data } = await axios(`http://localhost:3001/drivers/${id}`)
       setDrivers(oldDrivers => [...oldDrivers, data])
       
    } catch (error) {
       alert(error.response.data)
    }
 }

    return (
      <div className='App'>
        { pathname !=='/' && <Nav onSearch = {onSearch}/>}
         <Routes>
            <Route path="/" element={<LandingPage />} />       
            <Route path='/home' element={ <Cards drivers={drivers} /> } />
            <Route path='/detail/:id' element={ <Detail/> } />
         </Routes>
         
         
      </div>

  );


}

export default App

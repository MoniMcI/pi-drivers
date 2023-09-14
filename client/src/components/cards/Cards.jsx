import Card from '../card/Card';
import style from './Cards.module.css';

const contenedorStyles = {
   display: 'flex',
   justifyContent: 'center',
 };

export default function Cards({drivers}) {
  console.log('todos: ', drivers)
   return (
      <div style={contenedorStyles}>
      <div className={style.container}>
      { drivers.map((driver) => (
        <Card
          key={driver.id} // Asegúrate de usar una clave única para cada tarjeta
          id={driver.id}
          forename={driver.forename}
          surname={driver.surname}
          teams={driver.Teams || driver.teams}
          image={driver.image.url ? driver.image.url : driver.image}


        />
))}
      </div>
      </div>);
}


import style from "./FilterOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterDriversByTeam, filterDriversBySource, orderDrivers } from "../../redux/actions/actions";
import { useState } from "react";
import { getTeams } from "../../redux/actions/actions";
import { useEffect } from "react";

const FilterOrder = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);
  const [selectedTeams, setSelectedTeam] = useState(false);
  const teams = useSelector((state) => state.teams);
 
  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
 
  const handleFilter = (event) => {
    dispatch(filterDriversBySource(event.target.value));

    dispatch(setCurrentPage(1));
  };

  const handleFilterByTeams = (event) => {
    setSelectedTeam(event.target.value);
    dispatch(filterDriversByTeam(event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(orderDrivers(event.target.value));
    setAux(!aux);
  };

  return (

    <div className={style.container}>
      <div className={style.filterOrder}>
        
        <div className={style.ordering}>

          <p className={style.orden}>ORDERING</p>

          <select onChange={handleOrder} className={style.option}>
            <option value="Fecha Asc">Birthday Asc</option>
            <option value="Fecha Desc">Birthday Desc</option>
            <option value="Ascending">Ascendent A-Z</option>
            <option value="Descending">Descendente Z-A</option>
          </select>
        </div>
      <div className={style.filtering}>
      <p className={style.orden}>FILTERING</p>
        <div className={style.labels}>
          <label htmlFor="allDrivers" className={style.label}>
            {" "}
            ALL
            <input
              type="radio"
              name="filter"
              id="allDrivers"
              value="All"
              onChange={handleFilter}
            />
          </label>
          <label htmlFor="api" className={style.label}>
            {" "}
            <span className={style.radio}>API</span>
            <input
              type="radio"
              name="filter"
              id="api"
              value="Api"
              onChange={handleFilter}
            />
          </label>
          <label htmlFor="baseDeDatos" className={style.label}>
            {" "}
            DB
            <input
              type="radio"
              name="filter"
              id="baseDeDatos"
              value="Base de Datos"
              onChange={handleFilter}
            />
          </label>
        </div>

        <div>
          <span>By Team</span>
          <select onChange={handleFilterByTeams} className={style.option}>
            <option value="All Teams">All Teams</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>        

      </div>


      </div>
    </div>
  );
};

export default FilterOrder;

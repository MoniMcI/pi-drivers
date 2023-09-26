import axios from 'axios';
import { GET_ALL_DRIVERS, 
         GET_DRIVER_BY_NAME, 
         FILTER_DRIVERS_BY_TEAM,
         FILTER_DRIVERS_BY_SOURCE,
         GET_TEAMS,
         ORDER_DRIVERS,
         POST_DRIVERS,
         SET_CURRENT_PAGE,
  } from './action_types';

const URL_BASE = 'http://localhost:3001/drivers'

export const getAllDrivers =  () => {
    return async function(dispatch){
        const response = await axios(`${URL_BASE}`);
        return dispatch({
            type: GET_ALL_DRIVERS,
            payload: response.data
        })
    }
}

export function getDriverByName(name){
    return async function(dispatch){
        const response = await axios(`${URL_BASE}/?name=${name}`);
        return dispatch({
            type: GET_DRIVER_BY_NAME,
            payload: response.data
        })
    }
}

export const getTeams = () => {
    return async (dispatch) => {
      const { data } = await axios.get("http://localhost:3001/teams");
      dispatch({
        type: GET_TEAMS,
        payload: data,
      });
    };
  };

export const filterDriversByTeam = (team) => {
    return {
      type: FILTER_DRIVERS_BY_TEAM,
      payload: team,
    };
  };
  
  export const filterDriversBySource = (filter) => {
    return {
      type: FILTER_DRIVERS_BY_SOURCE,
      payload: filter,
    };
  };

 
  export const orderDrivers = (order) => {
    return {
      type: ORDER_DRIVERS,
      payload: order,
    };
  };

  export const createDrivers = (driver) => {
    return async (dispatch) => {
      const { data } = await axios.post(
        "http://localhost:3001/drivers",
        driver
      );
      return {
        type: POST_DRIVERS,
        payload: data,
      };
    };
  };

  export const setCurrentPage = (page) => {
    return {
      type: SET_CURRENT_PAGE,
      payload: page,
    };
  };





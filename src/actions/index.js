import axios from 'axios';

import { FETCH_FORECAST, FORECAST_ERROR } from './types';

const API_KEY = '49eb8be997bc6ed3ef917aba57b5b742';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}`;

export function fetchForecast(city) {
  const url = `${API_URL}&q=${city},nz&units=metric&cnt=5`;

  return (dispatch) => {
    axios.get(url)
      .then(response => {
        dispatch({ 
          type: FETCH_FORECAST,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch(forecastError(error.response.data.message));
      });
  };
}

export function forecastError(error) {
  return (dispatch) => {
    dispatch({
      type: FORECAST_ERROR,
      payload: error
    });
  };
}
import { FETCH_FORECAST, FORECAST_ERROR } from '../actions/types';

const INITIAL_STATE = { all: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return { ...state, error: '', all: action.payload };
    case FORECAST_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
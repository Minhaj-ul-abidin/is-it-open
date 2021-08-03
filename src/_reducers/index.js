import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from "./registration.reducer";
import { alert } from './alert.reducer';
import { restaurants } from "./restaurants.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  restaurants,
});

export default rootReducer;
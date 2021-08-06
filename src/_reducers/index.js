import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from "./registration.reducer";
import { alert } from './alert.reducer';
import { restaurants } from "./restaurants.reducer";
import { collections } from "./collection.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  restaurants,
  collections,
});

export default rootReducer;
import {combineReducers} from "redux";
import tickets from './tickets'
import filter from './filter'
import sortBy from './sort'
import currencies from './currencies'

export default combineReducers({
  tickets,
  filter,
  sortBy,
  currencies,
});

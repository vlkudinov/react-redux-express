import * as actions from '../actions';
import {handleActions} from 'redux-actions';

export default handleActions(
  {
    [actions.setFilter](state, {payload: {stop},}) {
      return state.indexOf(stop) === -1
        ? [...state, stop]
        : [...state.filter(v => v !== stop)];
    }
  }, []);

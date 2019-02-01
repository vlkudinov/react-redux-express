import * as actions from '../actions';
import {handleActions} from 'redux-actions';

export default handleActions(
  {[actions.getTickets](state, {payload: {tickets}}) {
      return tickets;
    }
  }, null);

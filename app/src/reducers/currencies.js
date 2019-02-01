import * as actions from '../actions';
import {handleActions} from 'redux-actions';

const initialCurrency = {
  list: [
    {
      type: 'RUB',
      exchange: 1,
      icon: '&#8381;',
    },
    {
      type: 'USD',
      exchange: 65,
      icon: '&#36;',
    },
    {
      type: 'EUR',
      exchange: 75,
      icon: '&#8364;',
    },
  ],
  active: {
    type: 'RUB',
    exchange: 1,
    icon: '&#8381;',
  },
};

export default handleActions(
  {
    [actions.setCurrency](state, {payload: {currency}}) {
      return {...state, active: currency};
    }
  }, initialCurrency);

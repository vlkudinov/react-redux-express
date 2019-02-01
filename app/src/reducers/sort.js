import * as actions from '../actions';
import { handleActions } from 'redux-actions';

export default handleActions(
  {
    [actions.setSorting](state, {payload: { value }}) {
      return value;
    }
  },'price'
);

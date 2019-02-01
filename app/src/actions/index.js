import { createAction } from 'redux-actions';
import * as webAPI from '../api';

export const getTickets = createAction('GET_TICKETS', webAPI.fetchTickets);
export const setSorting = createAction('SET_SORTING');
export const setCurrency = createAction('SET_CURRENCY');
export const setFilter = createAction('SET_FILTER');

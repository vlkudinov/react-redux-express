import {createSelector} from 'reselect'
import {compare} from '../tools';

const tickets = state => state.tickets;
const filter = state => state.filter;
const sortBy = state => state.sortBy;

const getSortedTickets = createSelector(
  [tickets, sortBy],
  (tickets, field) =>
    tickets && [...tickets.sort(compare(field))]
);
export const getVisibleTickets = createSelector(
  [getSortedTickets, filter],
  (tickets, filter) =>
    filter.length
      ? tickets.filter(ticket => filter.indexOf(ticket.stops) !== -1)
      : tickets
);
export const getStopsFromTickets = createSelector(
  [tickets],
  tickets =>
    tickets && [...new Set(tickets.map(tickets => tickets.stops))].sort()
);
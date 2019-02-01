import React from 'react';
import PropTypes from 'prop-types';
import TicketLink from './TicketLink';
import './Tickets.scss';

const TicketList = ({tickets, currency}) => (
  <ul className="tickets">
    {tickets.map((ticket, index) => (
      <TicketLink key={index} ticket={ticket} currency={currency}/>
    ))}
  </ul>
);

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired,
  currency: PropTypes.object.isRequired,
};

export default TicketList;

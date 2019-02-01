import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';

const TicketLink = ({ ticket, currency }) => {
  const price = Math.ceil(ticket.price / currency.exchange);
  const getDate = str => new Date(Date.parse(str)).toDateString();

  return (
    <li className="tickets__item">
      <div className="tickets__left">
        <div className="tickets__logo">
          <img src={logo} alt="" />
        </div>
        <div className="tickets__price">
          <button type="button" className="tickets__btn tickets-btn">
            <span className="tickets-btn__text">Buy</span>
            <span className="tickets-btn__price">
              for {price.toLocaleString('ru')}
              <span className="tickets-btn__icon" dangerouslySetInnerHTML={{ __html: currency.icon }} />
            </span>
          </button>
        </div>
      </div>
      <div className="tickets__right ">
        <div className="tickets__route route">
          <div className="route__origin">
            <div className="route__time">{ticket.departure_time}</div>
            <div className="route__city">{ticket.origin}, {ticket.origin_name}</div>
            <div className="route__date">{getDate(ticket.departure_date)}</div>
          </div>
          <div className="route__path">
            <div className="route__stops">
              {ticket.stops ? `${ticket.stops} ${ticket.stops > 1 ? 'stops' : 'stop'}` : `Non-stop`}
            </div>
            <div className="route__plane" />
          </div>
          <div className="route__destination">
            <div className="route__time">{ticket.arrival_time}</div>
            <div className="route__city">
              {ticket.destination_name}, {ticket.destination}
            </div>
            <div className="route__date">{getDate(ticket.arrival_date)}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

TicketLink.propTypes = {
  ticket: PropTypes.object.isRequired,
  currency: PropTypes.object.isRequired,
};

export default TicketLink;

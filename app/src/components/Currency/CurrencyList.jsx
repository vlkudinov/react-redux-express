import React from 'react';
import PropTypes from 'prop-types';
import CurrencyLink from './CurrencyLink';
import './Currency.scss';

const CurrencyList = ({ currencies, setCurrency }) => (
  <div className="currency sidebar__item">
    <h4 className="currency__title sidebar__title">Currency</h4>
    <ul className="currency__list">
      {currencies.list.map((currency, index) => (
        <CurrencyLink
          key={index}
          currency={currency.type}
          active={currencies.active.type === currency.type}
          setCurrency={() => setCurrency({ currency })}
        />
      ))}
    </ul>
  </div>
);

CurrencyList.propTypes = {
  currencies: PropTypes.object.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default CurrencyList;

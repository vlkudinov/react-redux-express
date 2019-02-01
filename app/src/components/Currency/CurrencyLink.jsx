import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const CurrencyLink = ({ currency, active, setCurrency }) => {
  const btnClass = cn({
    currency__btn: true,
    currency__btn_active: active,
  });
  return (
    <li className="currency__item">
      <button className={btnClass} type="button" onClick={setCurrency}>
        {currency}
      </button>
    </li>
  );
};

CurrencyLink.propTypes = {
  currency: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default CurrencyLink;

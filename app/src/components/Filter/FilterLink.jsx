import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const FilterLink = ({ stop, checked, setFilter }) => {
  const labelText = stop === 0 ? 'Non-stop' : `${stop} stop${stop > 1 ? 's' : ''}`;
  const inputClass = cn({
    filter__checkbox: true,
    filter__checkbox_checked: checked,
  });

  return (
    <li className="filter__item">
      <input id={stop} className={inputClass} type="checkbox" onChange={setFilter} />
      <label htmlFor={stop}>{labelText}</label>
    </li>
  );
};

FilterLink.propTypes = {
  stop: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterLink;

import React from 'react';
import PropTypes from 'prop-types';
import './Sorting.scss';


const Sorting = ({ setSortBy }) => (
  <div className="sorting sidebar__item">
    <h4 className="sorting__title sidebar__title">Sort by</h4>
    <select className="sorting__select" onChange={({ target: { value } }) => setSortBy({ value })}>
      <option value="price">Price</option>
      <option value="time">Time</option>
      <option value="stops">Stops</option>
    </select>
  </div>
);

Sorting.propTypes = {
  setSortBy: PropTypes.func.isRequired,
};

export default Sorting;

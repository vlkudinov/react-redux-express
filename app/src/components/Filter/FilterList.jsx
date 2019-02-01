import React from 'react';
import PropTypes from 'prop-types';
import FilterLink from './FilterLink';
import './Filter.scss';

const FilterList = ({ stops, filter, setFilter }) => (
  <div className="filter sidebar__item">
    <h4 className="filter__title sidebar__title">Filter</h4>
    <ul className="filter__list">
      {stops.map(stop => (
        <FilterLink
          key={stop}
          stop={stop}
          checked={filter.indexOf(stop) !== -1}
          setFilter={() => setFilter({ stop })}
        />
      ))}
    </ul>
  </div>
);

FilterList.propTypes = {
  stops: PropTypes.array.isRequired,
  filter: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterList;

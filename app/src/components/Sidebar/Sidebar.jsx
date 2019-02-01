import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

const Sidebar = ({ children }) => <div className="sidebar">{children}</div>;

Sidebar.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Sidebar;

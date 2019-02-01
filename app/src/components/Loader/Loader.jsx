import React from 'react';
import earth from './earth.svg';
import './Loader.scss';

const Loader = () => (
  <div className="loader">
    <img src={earth} alt="" />
  </div>
);

export default Loader;

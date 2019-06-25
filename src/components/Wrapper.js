import React from 'react';
import Hero from '../components/Hero';
import Sidebar from './Sidebar';
import Subscribe from './Subscribe';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Hero />
      <Sidebar />
      <Subscribe />
    </div>
  );
};

export default Wrapper;

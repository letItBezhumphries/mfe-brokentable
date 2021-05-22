import React from 'react';
import { Route } from 'react-router-dom';
import PhotoBanner from './components/photoBanner/PhotoBanner';
import './App.scss';

const BannerApp = () => {
  return (
    <div className="main">
      <Route exact path="/restaurants/:id" component={PhotoBanner} />
    </div>
  );
};

export default BannerApp;

import React from 'react';
import { Route } from 'react-router-dom';
import PhotosSection from './components/photosSection/PhotosSection';
import './App.scss';

const App = () => {
  return (
    <div className="main">
      <Route exact path="/restaurants/:id" component={PhotosSection} />
    </div>
  );
};

export default App;

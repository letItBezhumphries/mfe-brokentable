import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';

const mountPhotoGallery = (elem) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    elem
  );
};

if (process.env.NODE_ENV === 'development') {
  const standalonePhotoGallery = document.querySelector('#Photogallery');

  if (standalonePhotoGallery) {
    mountPhotoGallery(standalonePhotoGallery);
  }
}

export { mountPhotoGallery };

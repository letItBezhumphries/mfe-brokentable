import React from 'react';
import ReactDOM from 'react-dom';
import BannerApp from './bannerApp';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const mountPhotoBanner = (elem) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <BannerApp />
      </Router>
    </Provider>,
    elem
  );
};

if (process.env.NODE_ENV === 'development') {
  const standalonePhotoBanner = document.querySelector('#PhotoBanner');

  if (standalonePhotoBanner) {
    mountPhotoBanner(standalonePhotoBanner);
  }
}

export { mountPhotoBanner };

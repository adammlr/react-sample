import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import { angularPostListItem } from './post/post.list.item';
import { lazyInjector } from './app/angularInjector';

import './index.scss';

angular
  .module('Demo', [])
  .component('angularPostListItem', angularPostListItem)
  .run([
    '$injector',
    function(_$injector) {
      lazyInjector.$injector = _$injector;
    }
  ]);

angular.bootstrap(document.createElement('div'), ['Demo']);
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './common/components/app';


import actionType from 'utils/redux/actionTypeMiddleware';
import rootReducer from './common/reducers';
import { createStore, compose, applyMiddleware } from 'redux';

import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

const initialState = {};
const rootRef = document.querySelector('.container');

const store = compose( applyMiddleware( actionType, thunk))
(createStore)(rootReducer, initialState);


if (module.hot) {
  module.hot.accept(
    './common/reducers',
    () => {
      const nextReducer = require('./common/reducers');
      store.replaceReducer(nextReducer);
    }
  );
}

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      < Router history={ history } routes={ routes } />
    </Provider>
  </AppContainer>
,rootRef );

if (module.hot) {
        module.hot.accept('./common/components/app', () => {
          // If you use Webpack 2 in ES modules mode, you can
          // use <App /> here rather than require() a <NextApp />.
          const NextApp = require('./common/components/app').default;
          ReactDOM.render(
            <AppContainer>
              <Provider store={store}>
                <NextApp history={history} routes={ routes }/>
              </Provider>
            </AppContainer>,
              rootRef );
        });
      }

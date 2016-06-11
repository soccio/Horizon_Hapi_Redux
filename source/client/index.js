import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/App';

import actionType from 'utils/redux/actionTypeMiddleware';
import rootReducer from './reducers';
import { createStore, compose, applyMiddleware } from 'redux';

import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

// if using react-router you need to remove this import and pass App through the router.
// import App from './components/app';
// import reducers from './reducers';
const initialState = {};
const rootRef = document.querySelector('.container');

const store = compose( applyMiddleware( actionType, thunk))
(createStore)(rootReducer, initialState);

if (module.hot) {
  module.hot.accept(
    './reducers',
    () => {
      const nextReducer = require('./reducers');
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
        module.hot.accept('./components/App', () => {
          // If you use Webpack 2 in ES modules mode, you can
          // use <App /> here rather than require() a <NextApp />.
          const NextApp = require('./components/App').default;
          ReactDOM.render(
            <AppContainer>
              <Provider store={store}>
                <NextApp history={history} routes={ routes }/>
              </Provider>
            </AppContainer>,
              rootRef );
        });
      }

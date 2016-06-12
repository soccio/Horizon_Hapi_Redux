import { AppContainer } from 'react-hot-loader';
import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from 'react-router';
import configureStore from "./store.js";
import { Provider } from 'react-redux';
import routes from "./routes";
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;
const history = syncHistoryWithStore(browserHistory, store);


const reactRoot = window.document.querySelector('.container');


ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      < Router history={ history } routes={ routes } />
    </Provider>
  </AppContainer>
,reactRoot );

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

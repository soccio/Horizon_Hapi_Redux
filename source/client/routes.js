import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import MyTodos from './components/mytodos';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={MyTodos}/>
  </Route>
  );

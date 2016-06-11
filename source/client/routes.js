import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './common/components/app';
import MyTodos from './common/components/mytodos';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={MyTodos}/>
  </Route>
  );

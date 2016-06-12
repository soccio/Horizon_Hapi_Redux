import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import MyTodos from './components/mytodos';

/**
 * The React Routes for both the server and the client.
 */
module.exports = (
		<Route path="/" component={App} >
	    <IndexRoute component={MyTodos}/>
	  </Route>
);

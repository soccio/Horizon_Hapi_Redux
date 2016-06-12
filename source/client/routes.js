import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './common/components/app';
import MyTodos from './common/components/mytodos';

/**
 * The React Routes for both the server and the client.
 */
module.exports = (
		<Route path="/" component={App} >
	    <IndexRoute component={MyTodos}/>
	  </Route>
);

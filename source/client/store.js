import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './common/reducers';
import actionType from '../utils/redux/actionTypeMiddleware';


export default function (initialState) {
	const finalCreateStore = compose(
		applyMiddleware(actionType,thunk),
		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
	)(createStore);

	const store = finalCreateStore(rootReducer, initialState);

	if (module.hot) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./common/reducers', () => {
	      	const {reducer: nextReducer} = require('./common/reducers');
	      	store.replaceReducer(nextRootReducer);
	    });
	}

	return store;
}

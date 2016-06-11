import TodoReducer from './todo_reducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  todos: TodoReducer,
  routing: routerReducer
});

export default rootReducer;

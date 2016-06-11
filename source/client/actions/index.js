import Horizon from '@horizon/client';
import _ from 'lodash';

import { FETCH_POSTS } from './types';

const hz = Horizon();
const todos = hz('todo');

hz.connect();

export function fetchPosts(){
  return (dispatch) => {
    todos.watch().subscribe(allTodos => {

      dispatch({
        type: FETCH_POSTS,
        payload:  allTodos,
      });
    });
  };
}


export function addTodo(post) {
  return dispatch => todos.store({ text: post});
}

export function deletePost(id) {

  return dispatch => todos.remove(id);
}

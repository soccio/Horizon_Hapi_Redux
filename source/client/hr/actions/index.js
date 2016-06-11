import Horizon from '@horizon/client';
import _ from 'lodash';

import { FETCH_POSTS } from './types';


// table names are stored in the collection database, if you erase a table,
// you must also remove the name in the collections database.


const hz = Horizon({secure:false});
const messages = hz("todos");

hz.connect();

export function fetchPosts(){
  return (dispatch) => {
    messages.watch().subscribe(allMessages => {
      dispatch({
        type: FETCH_POSTS,
        payload:  allMessages,
      });
    });
  };
}


export function addTodo(post) {
  console.log("this is the post " + post);
  return dispatch => messages.store({ text: post});
}

export function deletePost(id) {

  return dispatch => messages.remove(id);
}

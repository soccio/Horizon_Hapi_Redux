import { FETCH_POSTS} from '../actions/types';

const INITIAL_STATES = { all: []};


export default function(state = INITIAL_STATES, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload};
  }

  return state;
}

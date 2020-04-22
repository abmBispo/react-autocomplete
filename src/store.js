import {applyMiddleware, createStore} from 'redux';
import {promiseMiddleware} from './middleware';

const defaultState = {
  posts: [],
};

const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case 'SEARCH_POSTS_BY_QUERY':
      console.log(action.payload);
      return {...state, posts: action.payload};
  }
  return state;
};

const middleware = applyMiddleware(promiseMiddleware);
const store = createStore(reducer, middleware);
export default store;

import { REQUEST_APPS, RECEIVE_APPS } from './types';
const initalState = {
  query: '',
  isFetching: false,
  data: [],
  error: ''
}

export const apps = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query
      })
    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.status === 'success' ? action.payload : initalState.data,
        error: action.status === 'error' ? action.payload : initalState.error
      })
    default:
      return state;
  }
}
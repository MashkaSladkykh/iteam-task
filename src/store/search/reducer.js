import { REQUEST_APPS, RECEIVE_APPS, FAVOURITE_ADDED, FAVOURITE_REMOVED } from './types';
const initialState = {
  query: '',
  isFetching: false,
  data: [],
  error: '',
  favApps:[],
}

export const apps = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query
      });

    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.status === 'success' ? action.payload : initialState.data,
        error: action.status === 'error' ? action.payload : initialState.error
      });

    case FAVOURITE_ADDED:
      return {
        ...state,
        favApps: [action.payload.index]
      };

    case FAVOURITE_REMOVED:
      return {
        ...state,
        favApps: state.favApps.filter(app => action.payload !== app.appId),
      };
      
    default:
      return state;
  }
}
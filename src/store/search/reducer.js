import { REQUEST_APPS, RECEIVE_APPS, SORT_APPS_BY_PRICE, CHECK_APP } from './types';
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
      })

    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.status === 'success' ? action.payload : initialState.data,
        error: action.status === 'error' ? action.payload : initialState.error
      })

    case SORT_APPS_BY_PRICE: 
      return(Object.assign({}, state, {
        data: initialState.data.sort((a, b) => a.price.localeCompare(b.price)),
    }))
    
    case CHECK_APP:
      return(Object.assign({}, state, {
        favApps: [...state.apps.favApps, action.payload]
      }))
      
    default:
      return state;
  }
}
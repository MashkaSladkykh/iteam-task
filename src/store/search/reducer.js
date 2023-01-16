import { REQUEST_APPS, RECEIVE_APPS, FAVOURITE_ADDED, FAVOURITE_REMOVED, SET_SORT_PARAMS } from './types';

const SORT_ASC = 'asc';
const SORT_DESC = 'desc';

const defaultSortKey = 'price';
const defaultSortOrder = SORT_ASC;

const initialState = {
  query: '',
  isFetching: false,
  data: [],
  error: '',
  favApps:[],
  sortKey: defaultSortKey,
  sortOrder: defaultSortOrder
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

    case SET_SORT_PARAMS:
      let sortKey = action.payload.sortKey || defaultSortKey;
      if(sortKey === state.sortKey) {
          state.sortOrder = state.sortOrder === SORT_ASC ? SORT_DESC : SORT_ASC;
      }
      return {
        data: state.data.sort( (a, b) => { 
            if( a[sortKey] < b[sortKey] ) return state.sortOrder === SORT_ASC ? -1 : 1;
            if( a[sortKey] > b[sortKey] ) return state.sortOrder === SORT_ASC ? 1: -1;
            return 0;
          }),
          sortKey: sortKey,
          sortOrder: state.sortOrder
      };
    
    default:
      return state;
  }
}
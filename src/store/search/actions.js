import { useEffect } from 'react';

import { REQUEST_APPS, RECEIVE_APPS, FAVOURITE_ADDED, FAVOURITE_REMOVED, SET_SORT_PARAMS} from './types';
import { generateApiSearchUrl, options } from '../../pages/utils';

export const requestApps = (query) => ({
  type: REQUEST_APPS,
  query
})

export const receiveApps = ({status, payload }) => ({
  type: RECEIVE_APPS,
  status,
  payload
})

export const getApps = (query) => {
  return function (dispatch) {
    dispatch(requestApps(query));
    fetch(generateApiSearchUrl(`${query}/page/1`), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveApps({
          status:'success',
          payload:data
        }))
      })
      .catch(err => {
        dispatch(receiveApps({
          status:'error',
          payload: err
        }))
        }
    )
  }
}

export const addFavourite = index => {
  return {
    type: FAVOURITE_ADDED,
    payload: {
      index: index
    }
  };
};

export const removeFavourite = index => {
  return {
      type: FAVOURITE_REMOVED,
      payload: {
       index: index
      }
  };
};

export const setSortParams = (key) => {
  return {
      type: SET_SORT_PARAMS,
      payload: {
        sortKey: key
      }
  };
};

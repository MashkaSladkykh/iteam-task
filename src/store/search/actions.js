import { REQUEST_APPS, RECEIVE_APPS, SORT_APPS_BY_PRICE, CHECK_APP} from './types';
import { generateApiSearchUrl, options } from '../../pages/utils';
import { useEffect } from 'react';

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
    // fetch(generateApiSearchUrl(`${query}/page/1`), options)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(receiveApps({
    //       status:'success',
    //       payload:data
    //     }))
    //   })
    //   .catch(err => {
    //     dispatch(receiveApps({
    //       status:'error',
    //       payload: err
    //     }))
    //     }
    // )
  }
}

export const sortAppsByPrice = ({price, payload }) => ({
  type: SORT_APPS_BY_PRICE,
  price,
  payload
})

export const checkApp = (payload) => ({
  type: CHECK_APP, 
  payload
})
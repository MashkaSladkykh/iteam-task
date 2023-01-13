import { useEffect } from 'react';
import { REQUEST_APPS, RECEIVE_APPS} from './types';
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
    useEffect(() => {
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
          })
    }, []);
  }
}
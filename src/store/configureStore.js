import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
export default store;
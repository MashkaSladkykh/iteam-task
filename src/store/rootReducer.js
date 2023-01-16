import { combineReducers } from 'redux';

import { apps} from './search/reducer';

const rootReducer = combineReducers({
  apps,
});

export default rootReducer;
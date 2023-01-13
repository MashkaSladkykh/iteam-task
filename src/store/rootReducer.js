import { combineReducers } from 'redux';

import { games } from './games/reducer';
import { apps} from './search/reducer';

const rootReducer = combineReducers({
  games,
  apps,
});

export default rootReducer;
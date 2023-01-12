import { Provider } from 'react-redux';

import store from './store/configureStore';
import './scss/index.scss';
import GameApp from './routes';

const App = () => (
  <Provider store={store}>
    <GameApp/>
  </Provider>
);

export default App;
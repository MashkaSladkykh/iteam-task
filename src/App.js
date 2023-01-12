import { Provider } from 'react-redux';

import store from './store/configureStore';
import './scss/index.scss';

const App = () => (
  <Provider store={store}>
    
  </Provider>
);

export default App;
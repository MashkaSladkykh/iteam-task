import { Route, Routes } from 'react-router-dom';
import Games from '../pages/Main';

const GameApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Games />} />
      <Route
        path='*'
        element={
          <div>ERROR</div>
        }
      />
    </Routes>
  );
};

export default GameApp;
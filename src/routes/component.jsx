import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/components/Main';
import Details from '../pages/components/Details';

const GameApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path=':appId' element={<Details />} />
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
import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/components/Main';
import Details from '../pages/components/Details';
import FavoriteList from '../pages/components/FavoriteList';

const GameApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path=':appId' element={<Details />} />
      <Route path='favList' element={<FavoriteList/>}/>
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
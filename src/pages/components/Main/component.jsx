import { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


import Header from '../Header';

import { selectGames } from '../../../store/games/selectors';
import { setGames} from '../../../store/games/actions';
import { generateApiSearchUrl } from '../../utils';
import { options } from '../../utils';
import { mockData } from '../../data'; //then replace mockData!!!!!!!!
import CardItem from './CardItem/component';


const Games = ({ gamesList, setGames }) => {
//   useEffect(() => {
//     fetch(generateApiSearchUrl('Counter/page/1'), options)
//       .then((res) => res.json())
//       .then((data) => {
//         setGames(data);
//         console.log(data)
//       })
//       .catch(err => console.log(err))
//   }, []);

    console.log(mockData);
        
  return (
   <>
    <Header/>
    {gamesList.length === 0 && (
            <div>Empty list</div>
          )}
          {gamesList.map(app => (
            <div key={app.appId} >
              <CardItem
              app={app}
              />
            </div>
          
        ))}
   
   </>
  );
};

const mapStateToProps = (state) => ({
  gamesList: selectGames(state),
});

const mapDispatchToProps = {
  setGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
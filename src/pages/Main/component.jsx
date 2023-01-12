import { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectGames } from '../../store/games/selectors';
import { setGames} from '../../store/games/actions';
import { generateApiSearchUrl } from '../utils';
import { options } from '../utils';
import { REACT_APP_API_KEY } from '../constants';
import { mockData } from '../data';

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

    console.log(mockData)
  return (
   <>
    {mockData.length === 0 && (
            <div>Empty list</div>
          )}
          {mockData.map(app => (
            <div key={app.appId} >
              <NavLink to={`appId=${app.appId}`}>
              <img src={app.imgUrl} alt={app.title}/>
              </NavLink>
              <p >{app.price}</p>
              <NavLink to={`appId=${app.appId}`}>
              <div>{app.title}</div>
              </NavLink>
              <div>{app.released}</div>
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
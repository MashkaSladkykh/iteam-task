import {connect} from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { addFavourite, removeFavourite } from '../../../store/search/actions';
import { selectFav } from '../../../store/search/selectors';

const FavoriteApp = ({id, addFavourite, removeFavourite}) => {
    const apps = JSON.parse(localStorage.reduxState).apps.data;

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleChange = e => {
        const res = apps.find(app => id === app.appId)
        if(e.target.checked) {     
            addFavourite(res)
        } 
        if(!e.target.checked) {
            removeFavourite(res)
        }
    }

    return(
        <Checkbox {...label} 
        icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />}
        onChange={handleChange}
        id={id}
        />
    )
}

const mapStateToProps = state => ({
    favApps: selectFav(state)
  })
  
  const mapDispatchToProps = dispatch => {
    return {
        addFavourite: index => {
        dispatch(addFavourite(index));
        },
        removeFavourite: index => {
        dispatch(removeFavourite(index));
        }
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(FavoriteApp);
  
import {connect} from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { checkApp } from '../../../store/search/actions';
import { selectFav } from '../../../store/search/selectors';

const FavoriteApp = ({id, checkApp, selectFav}) => {
    const apps = JSON.parse(localStorage.reduxState).apps.data;

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
   
    

    const handleChange = e => {
        const res = apps.find(app => id === app.appId)
        console.log(res)
        if(e.target.checked) {     
            checkApp(res)
        } 
        if(!e.target.checked && selectFav.includes(res)) {
            selectFav.filter(app => app != e.target)
        }
        console.log(e.target)
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
  
  const mapDispatchToProps = {
    checkApp,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(FavoriteApp);
  
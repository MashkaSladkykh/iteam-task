import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';

import logo from '../../../images/logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <a href="https://store.steampowered.com/" className='header_logo'>
                <img src={logo} alt="logo" />
            </a>
            <NavLink to={'favList'} className='header_fav'>         
                <IconButton>
                    <FavoriteBorder  />
                </IconButton>
            </NavLink>           
        </div>
    )
};

export default Header;
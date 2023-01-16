import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';

import logo from '../../../images/logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <a href="https://store.steampowered.com/">
                <img src={logo} alt="logo" />
            </a>
            <NavLink to={'favList'}>         
                <IconButton>
                    <FavoriteBorder  />
                </IconButton>
            </NavLink>           
        </div>
    )
};

export default Header;
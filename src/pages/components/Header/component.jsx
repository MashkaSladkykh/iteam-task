import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';

import logo from '../../../images/logo.svg';

const Header = () => {
    const handleClick = (e) => {
        e.preventDefault();
        // redirect to list of favorite
        console.log('redirect to list of favorite')

    }
    return (
        <>
             <a href="https://store.steampowered.com/">
                <img src={logo} alt="logo" />
            </a>
            <NavLink to={'favList'}>         
                <IconButton>
                    <FavoriteBorder  />
                </IconButton>
            </NavLink>
            
        </>
    )
};

export default Header;
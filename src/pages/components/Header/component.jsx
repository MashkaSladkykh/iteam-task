import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

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
                          
                <IconButton onClick={handleClick}>
                    <FavoriteBorder  />
                </IconButton>
            
        </>
    )
};

export default Header;
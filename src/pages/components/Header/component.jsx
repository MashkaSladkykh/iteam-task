import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


import logo from '../../../images/logo.svg';
import Searching from './Search';


const Header = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
             <a href="https://store.steampowered.com/">
                <img src={logo} alt="logo" />
            </a>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Searching/> 
        </>
    )

};

export default Header;
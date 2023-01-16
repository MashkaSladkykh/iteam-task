import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Back = () => {
    return (
        <NavLink to={'/'}>
            <IconButton>
                <ArrowBackIcon/>
                Back
            </IconButton>
        </NavLink>
    )
}

export default Back;
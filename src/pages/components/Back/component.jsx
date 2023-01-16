import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Back = () => {
    return (
        <NavLink to={'/'} className='back'>
            <IconButton className='back_btn'>
                <ArrowBackIcon/>
                Back
            </IconButton>
        </NavLink>
    )
}

export default Back;
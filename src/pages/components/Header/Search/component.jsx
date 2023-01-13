import { NavLink } from 'react-router-dom';
import { InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';


const Searching = () => {
    const searchedValue = e=>console.log(e.target.value);
    return (
        <>
            <InputBase
            placeholder={'Search...'}
            startAdornment={<Search />}
            onChange={searchedValue}
            />
        </>
    )
};

export default Searching;
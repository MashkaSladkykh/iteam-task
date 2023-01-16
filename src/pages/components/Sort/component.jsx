import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Sort = () => {
    const [sort, setSort] = useState('');
  
    const handleChange = (event) => {
      setSort(event.target.value);
    };
  
    return (
        <>
            <InputLabel id="demo-select-small">Sort</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={sort}
                label="Sort"
                onChange={handleChange}
            >
            <MenuItem value={'price'}>Price</MenuItem>
            <MenuItem value={'released'}>Release date</MenuItem>
            </Select>
        </>

    );
  }

  export default Sort;
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import CardItem from './CardItem/component';
import Info from '../Search/Info';

const Cards = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
    const apps = useSelector(state => state.apps.data);
    const query = useSelector(state => state.apps.query);

  return (
   <>
    {apps.length > 0 ?
    <Info
    query={query}
    totalItems={apps.length}
    /> :
    <>
      <h2>Please, enter your search query</h2>
      <p>Here will be the results</p>
    </>}
    
    {apps
      .slice(page, page + 10)
      .map(app => {
        return (
          <CardItem
          key={app.appId}
          app={app}
          />
        );
      })
    }
    {apps.length > 0 ? 
      <Stack spacing={2}>
        <Pagination
          shape='rounded'
          size='large'
          className='pagination'
          count={10}
          page={page}
          onChange={handleChange}
        />
      </Stack> : null}
   </>
  );
};

export default Cards;
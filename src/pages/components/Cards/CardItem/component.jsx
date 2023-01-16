import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import FavoriteApp from '../../Favorite';

const CardItem = ({ app }) => {
  let {
    appId,
    title,
    url,
    imgUrl,
    released,
    reviewSummary,
    price
  } = app;
  
  return (
    <div className='card-container'>
      <Card sx={{ maxWidth: 345 }} className='card'>
        <NavLink to={`appId=${appId}`}>
          <CardMedia
            sx={{ height: 140 }}
            image={imgUrl}
            title={title}
            className='card_img'
          />
        </NavLink>
        <CardContent className='card_content'>
          <NavLink to={`appId=${appId}`} className='card_title'>
            <Typography gutterBottom variant="h5" component="div" >
              {title}
          </Typography>
          </NavLink>
          <Typography variant="body2" className='card_released'>
            {released}
          </Typography>
          <div className='card_flex'>
            <span className='card_price'>{price}</span>
            <FavoriteApp
              id={appId}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardItem;
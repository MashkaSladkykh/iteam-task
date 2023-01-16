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
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <NavLink to={`appId=${appId}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={imgUrl}
          title={title}
        />
      </NavLink>
      <CardContent>
        <NavLink to={`appId=${appId}`}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        </NavLink>
        <Typography variant="body2" color="text.secondary">
          {price} date of release {released}
        </Typography>
        <FavoriteApp
        id={appId}/>
      </CardContent>
    </Card>
    </div>
  )
}

export default CardItem;
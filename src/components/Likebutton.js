import React, { useState, useEffect, useRef } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import "./likebutton.css"

export default function LikeButton() {
  const [countLike, setCountLike] = useState(0);

  const handleClick = () => {
    setCountLike(countLike + 1);
  }

  return (
    <div className='likeButton'>
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        name="checkedH" onClick={handleClick}/>}
        label=""
      />
      <div className='countLike'>
        {countLike} likes
      </div>
    </div>
  )
}

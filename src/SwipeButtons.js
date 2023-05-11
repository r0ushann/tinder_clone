import React from 'react';
import "./Swipebuttons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import { Fab, Icon, IconButton } from '@material-ui/core';



function SwipeButtons(){
    
  return (

    <div className="swipeButtons">

       <IconButton className='repeatButton'>
            <ReplayIcon fontSize='large' />
        </IconButton> 

        <IconButton className='closeButton'>
            <CloseIcon fontSize='large' />
        </IconButton>
        
        <IconButton className='starButton' >
            <StarRateIcon fontSize='large' />
        </IconButton>

        <IconButton className='FavoriteButton'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>

        <IconButton className='FlashButton'>
            <FlashOnIcon fontSize='large' />
        </IconButton>

    </div>
  )
}

export default SwipeButtons
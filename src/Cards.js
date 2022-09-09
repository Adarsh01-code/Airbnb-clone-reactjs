import React from 'react'
import './Cards.css'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { UilHeart } from '@iconscout/react-unicons'


function Cards({src , title , description , price , text ,value,color }) {
  return (
    <div className='main'>
    <div className='card'>
      <img src={src} />
      
      </div>

      <div className='card_info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h4>{text}</h4>
        <h3>{price}</h3>
        
        <div className='star'>
        <StarIcon fontSize='small' />
        <h4>{value}</h4>
        
        
        </div>
        <UilHeart color="#FF5A5F" className='heart'/>
      </div>
    
    </div>
  )
}

export default Cards

import React from 'react'
import './SearchResult.css'
import StarIcon from '@mui/icons-material/Star';
import { UilHeart } from '@iconscout/react-unicons'


function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    

}) {
  return (
    <div className='searchResult'>
      <img src={img} alt="" />
      <UilHeart color="#FF5A5F" className="searchResult_heart" />

      <div className='searchResult_info'>

               <div className='searchResult_infoTop'>
               <p> {location}</p>
               <h3>{title}</h3>
               <p> ______________________________</p>
               <p> {description} </p>

               </div>

               <div className='searchResult_infoBottom'>
                     <div className='searchResult_stars'>
                     <StarIcon fontSize='small' className="searchResult_star" />
                     <p> <strong>{star}</strong> </p>

                     </div>

                     <div className='searchResults_price'>
                     
                     <p>{price}</p>

                     </div>

               </div>

      </div>
    </div>
  )
}

export default SearchResult

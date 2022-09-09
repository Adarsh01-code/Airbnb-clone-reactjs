import React from 'react'
import './Showmap.css'
import { UilMap } from '@iconscout/react-unicons'
import { useNavigate } from 'react-router-dom'


function Showmap() {
    let navigate = useNavigate();
    function handleclick(){
        navigate('/search');
    }
    
  return (
      <div className="showmap" onClick={handleclick}>
          
          <p>Show map</p>
          <p className='showmap_icon'><UilMap color='white' size="22px" /></p>
      </div>
      
  )
}

export default Showmap

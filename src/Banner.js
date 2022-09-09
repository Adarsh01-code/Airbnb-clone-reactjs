import { Button } from '@material-ui/core';
import React  from 'react'
import { useState } from 'react';
import './Banner.css'
import Search from './Search';
import {useNavigate} from "react-router-dom";







function Banner() {
    const navigate = useNavigate();

    const [showSearch, setShowSearch] =useState(false);
  return (
    <div className='banner'>
    
      
    {/* <div className='banner_search'>
            {showSearch && <Search />}
   
            <Button onClick={()=> setShowSearch(!showSearch)}
            className='banner_searchButton'  varient ='outlined'>
             {showSearch ? "Hide" : "Search Dates"} </Button>
           

    </div> */}

    
    </div>
  )
}

export default Banner

import React from 'react'
import './Header.css'
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import Search from './Search';
import {useNavigate} from "react-router-dom";


import { UilSearch } from '@iconscout/react-unicons'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BlurOnIcon from '@mui/icons-material/BlurOnOutlined';
import PoolIcon from '@mui/icons-material/PoolOutlined';
import SportsGolfIcon from '@mui/icons-material/SportsGolfOutlined';
import BeachAccessIcon from '@mui/icons-material/BeachAccessOutlined';
import CottageIcon from '@mui/icons-material/CottageOutlined';
import HouseboatIcon from '@mui/icons-material/HouseboatOutlined';
import ParkIcon from '@mui/icons-material/ParkOutlined';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiingOutlined';
import BrunchDiningIcon from '@mui/icons-material/BrunchDiningOutlined';
import LunchDiningIcon from '@mui/icons-material/LunchDiningOutlined';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxiOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalanceOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenterOutlined';
import LocationCityIcon from '@mui/icons-material/LocationCityOutlined';
import ElectricBikeIcon from '@mui/icons-material/ElectricBikeOutlined';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeakOutlined';
import CabinIcon from '@mui/icons-material/CabinOutlined';

function Header(props) {
  const navigate = useNavigate();

    const [showSearch, setShowSearch] =useState(false);
  return (
   
    <div className="header_main">

    <div className='header'>
    <Link to='/'>

    <img className='header_icon' src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />

    </Link>
  
   
      <div onClick={()=> setShowSearch(!showSearch)} className='header_centre'>
    
      <p className='header_centre_lefttext'>Anywhere</p>
      <p className='header_centre_bar'>|</p>
      <p className='header_centre_middletext'>Any week</p>
      <p className='header_centre_bar'>|</p>
      <p className='header_centre_righttext'>Add Guests</p>
      <input type="text" />
      {showSearch && <Search />}
      <UilSearch color='white' onClick={()=> setShowSearch(!showSearch)} size='18px' className='icon' />
      

      </div>

      <div className='header_right'>
      <div className='header_right0'>
      <p>Become a host</p>
      <LanguageIcon className="header_right0_icon" fontSize='medium'/>
      </div>
      <div className='header_right1'>
      <MenuIcon fontSize='small' className='menu'/>
      <AccountCircleIcon fontSize='large' className='account'/>
      </div>
      

      </div>
    
      </div>
      <div className='down_header'>
        <div >
        <KeyboardArrowLeftIcon className="down_header_info_leftarrow"/>
        
        </div>
        
        <div className='down_header_info'>
        <AcUnitIcon fontSize='small' color='action'/>
        <p>Arctic</p>
        </div>
        <div className='down_header_info'>
        <PoolIcon fontSize='small'/>
        <p>Pool</p>
        </div>
        <div className='down_header_info'>
        <SportsGolfIcon fontSize='small' />
        <p>Golf</p>
        </div>
        <div className='down_header_info'>
        <BeachAccessIcon fontSize='small'/>
        <p>Beach</p>
        </div>
        <div className='down_header_info'>
        <CottageIcon fontSize='small'/>
        <p>Cottage</p>
        </div>
        <div className='down_header_info'>
        <FitnessCenterIcon fontSize='small'/>
        <p>Gym</p>
        </div>
        <div className='down_header_info'>
        <HouseboatIcon fontSize='small'/>
        <p>OK</p>
        </div>
        <div className='down_header_info'>
        <ParkIcon fontSize='small'  />
        <p>Forest</p>
        </div>
        <div className='down_header_info'>
        <DownhillSkiingIcon fontSize='small'/>
        <p>Skiing</p>
        </div>
        <div className='down_header_info'>
        <LocationCityIcon fontSize='small' />
        <p>Skyline</p>
        </div>
        <div className='down_header_info'>
        <LunchDiningIcon fontSize='small'/>
        <p>Food</p>
        </div>
        <div className='down_header_info'>
        <LocalTaxiIcon fontSize='small'/>
        <p>Cab</p>
        </div>
        <div className='down_header_info'>
        <AirplanemodeActiveIcon fontSize='small'/>
        <p>Airport</p>
        </div>
        <div className='down_header_info'>
        <AccountBalanceIcon fontSize='small'/>
        <p>Law</p>
        </div>
        <div className='down_header_info'>
        <CabinIcon fontSize='small'/>
        <p>Cabin</p>
        </div>
        <div className='down_header_info'>
        <CenterFocusWeakIcon fontSize='small'/>
        <p>Photo</p>
        </div>
        <div className='down_header_info'>
        <ElectricBikeIcon fontSize='small'/>
        <p>Rent</p>
        </div>
       
        
        <div className='down_header_info'>
        <BrunchDiningIcon fontSize='small'/>
        <p>Dine</p>
        </div>
        
        <div >
        <KeyboardArrowRightIcon className='down_header_info_rightarrow'/>
        
        </div>
        <div className='down_header_info1'>
          <BlurOnIcon className='bluricon'/>
          <p>Filter</p>
        </div>
        
        
      </div>
      </div>

  )
}

export default Header

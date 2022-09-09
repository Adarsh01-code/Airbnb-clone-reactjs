import React from 'react'
import './Footer.css'
import LanguageIcon from '@material-ui/icons/LanguageOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function Footer() {
  return (
    <div className='footer'>
                <p className='para_left'>

                <p>@ 2022 Airbnb , Inc</p> 
                <p>.</p>
                <p>Privacy </p> 
                <p>.</p>
                <p> Terms </p> 
                <p>.</p>
                <p> Sitemap </p> 
                <p>.</p>
                <p> Company details </p> 
                <p>.</p>
                <p> Destinations  </p> 
                   
                </p>

                
                <p className='para_right'>
                 
                 <p className='para_right_1'> <LanguageIcon fontSize='small'/> </p>
                 <p> English (IN) </p>
                 <p>$  USD </p> 
                 <p>Support & Resources </p>
                 <p><KeyboardArrowUpIcon  fontSize='medium' /></p>
                 
                </p>


                

                
      
    </div>
  )
}

export default Footer

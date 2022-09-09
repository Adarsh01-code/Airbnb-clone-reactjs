import React , {useState} from 'react'
import './Search.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range";
import PeopleIcon from '@material-ui/icons/People';
import { useNavigate } from "react-router-dom";

// Date Picker Component

function Search() {

    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    

    const selectionRange ={
        startDate:startDate,
        endDate: endDate,
        key:"selection",
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    let navigate = useNavigate();
    function handleClick() {
        navigate('/search');
      }

  return (
    <div className='search'>

<DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

<h2>
    Number of Guests
    <PeopleIcon />
    
    
</h2>
<input min={0} defaultValue={2} type="number" />

 <button onClick={handleClick} >Search Airbnb</button> 

  
    
    </div>
  )
}

export default Search

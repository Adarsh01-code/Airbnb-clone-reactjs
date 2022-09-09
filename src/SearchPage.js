import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
      <p>
        19 stays . 26 August to 30 August . 2 Guest
      </p>
      <h1> Stays Nearby </h1>
         <Button varient='outlined'> Flexible Cancellation Policy </Button>
         <Button varient='outlined'> Type of Flexibility </Button>
         <Button varient='outlined'> Price </Button>
         <Button varient='outlined'> Rooms and Beds </Button>
         <Button varient='outlined'> More Filters </Button>
      </div>
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/bc2665fb-b16a-40de-9074-79803f593b0b.jpg?im_w=720"
        location = "Private House stay"
        title ="London ,UK"
        description = "8 Guest . 6 Bed . 6 Bathroom . 2 Pools"
        star ="4.73"
        price ="$230  night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/13bcf329-9cae-46e0-9595-7658b359b733.jpg?im_w=720"
        location = "House Rent"
        title ="New Delhi ,India"
        description = "6 Guest . 6 Bed . 5 Bathroom . 1 Pool"
        star ="4.13"
        price ="$130  night"
       
      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/5ba59478-0416-4fac-8661-6c976e9f262b.jpg?im_w=720"
        location = "Luxury Mansion"
        title ="Las Vegas ,USA"
        description = "10 Guest . 8 Bed . 6 Bathroom . 1 Pool"
        star ="5.73"
        price ="$830  night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/2839adc4-e4ca-44b4-af64-7508ac323d1f.jpg?im_w=720"
        location = "Private Stay "
        title ="Kerela ,India"
        description = "6 Guest . 4 Bed . 3 Bathroom "
        star ="4.83"
        price ="$199  night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/d727cf6e-4787-4b38-a86f-0cd8d91d02b2.png?im_w=720"
        location = "Luxury Resort"
        title ="Maldives"
        description = "2 Guest . 1 Bed . 1 Bathroom "
        star ="4.29"
        price ="$319  night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/miso/Hosting-602613275257815261/original/d84877a2-f8ca-41b1-a76e-cab07acb244e.jpeg?im_w=720"
        location = "Cave Stay"
        title ="Petra District ,Jordon"
        description = "2 Guest . 1 Bed . 1 Bathroom "
        star ="4.73"
        price ="$120 night"
       

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/4c5ef058-7473-4099-a17c-c9733800df2e.jpg?im_w=720"
        location = "Beautiful View Stay"
        title ="Athens ,Greece"
        description = "2 Guest . 1 Bed . 1 Bathroom "
        star ="4.26"
        price ="$119  night"

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/44594322-7e7d-43bd-a535-11b7e81f0d3a.jpg?im_w=720"
        location = "2 BHK House rent"
        title ="Mumbai ,India"
        description = " 2 Bed . 2 Bathroom . 1 kitchen"
        star ="4.73"
        price ="$188 night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/miso/Hosting-655652314832385733/original/4d9efd82-2ce7-421f-8076-212a5eab1c81.jpeg?im_w=720"
        location = "Luxury Villa for rent"
        title ="Kerela ,India"
        description = "  6 Bed . 4 Bathroom . 1 kitchen . 1 Pool"
        star ="3.23"
        price ="$299  night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/7efd9203-fa1a-431e-adbe-d52de73f1d16.jpg?im_w=720"
        location = "Top stay in Castle"
        title ="Luxembourg ,Europe"
        description = "2 Guest . 1 Bed . 1 Bathroom "
        star ="4.93"
        price ="$249 night"

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/0cb43934-9556-4bbf-854d-cf52e77d507b.jpg?im_w=720"
        location = "3 BHK house rent"
        title ="Stay at this place for chicks"
        description = " 3 Bed . 2 Bathroom . 1 Kitchen "
        star ="3.53"
        price ="$199 night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/4b3caa77-9b6a-41e1-b261-f90358becad8.jpg?im_w=720"
        location = "Private Resort "
        title ="Goa ,India"
        description = "8 Guest . 6 Bed . 4 Bathroom . 1 Kitchen . 1 Pool"
        star ="4.73"
        price ="$299  night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/miso/Hosting-46228714/original/746d82a5-9356-419f-a9be-e81d7f0d6837.jpeg?im_w=720"
        location = "Farmhouse"
        title ="Mumbai ,India"
        description = " 4 Bed . 2 Bathroom . 1 Kitchen . 1 Pool"
        star ="3.97"
        price ="$249  night"

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/7f39e714-772d-4032-82db-680bdd14ada4.jpg?im_w=720"
        location = "Beachfront Stay"
        title ="Bangkok ,Thailand"
        description = "2 Guest . 2 Bed . 1 Bathroom "
        star ="4.73"
        price ="$149  night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720"
        location = "Private Island Stay"
        title ="London ,UK"
        description = " 8 Bed . 6 Bathroom . 1 Kitchen"
        star ="5.0"
        price ="$999  night"

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720"
        location = "Windmill night stay"
        title ="Denmark ,Germany"
        description = "3 Guest . 2 Bed . 1 Bathroom "
        star ="5.0"
        price ="$169 night"
        

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/3648aed7-f383-4b74-ab5d-f444e20a85f2.jpg?im_w=720"
        location = "Island Stay"
        title ="Lakshadweep ,India"
        description = "2 Guest . 1 Bed . 1 Bathroom "
        star ="3.23"
        price ="$30  night"
        total ="$899 / night"

      />
      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/610236d1-a9e3-40cf-86a6-65616e8e6b80.jpg?im_w=720"
        location = "Private House"
        title ="Ohio ,USA"
        description = " 6 Guest . 4 Bed . 4 Bathroom . 1 Pool"
        star ="4.33"
        price ="$210  night"
        

      />

      <SearchResult 
        img = "https://a0.muscache.com/im/pictures/be5ec43d-245a-4c09-9bb7-a5e1b8eb56b3.jpg?im_w=720"
        location = "Private Forest Stay "
        title ="Shimla ,India"
        description = " 2 Guest . 1 Bed . 1 Bathroom "
        star ="5.0"
        price ="$269  night"

      />
    </div>
    
  )
}

export default SearchPage

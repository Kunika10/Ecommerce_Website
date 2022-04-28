import React from 'react'
import Bannerslider from './Bannerslider'
import Homesection from './Homesection';
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div className='home_sec'>
    <Helmet>
            <title>Valeska</title>
            <meta name="description" content="Lorem ipsum dolor sit amet" />
        </Helmet>
         <Bannerslider/>
         <Homesection/>
    </div>
  )
}

export default Home;


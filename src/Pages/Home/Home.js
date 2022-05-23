import React from 'react';
import About from './About';
import Bannar from './Bannar';
import Expart from './Expart';
import Review from './Review';
import Services from './Services';
import Tolls from './Tolls';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Expart></Expart>
            <Tolls></Tolls>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;
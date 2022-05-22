import React from 'react';
import About from './About';
import Bannar from './Bannar';
import Expart from './Expart';
import Tolls from './Tolls';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Expart></Expart>
            <Tolls></Tolls>
        </div>
    );
};

export default Home;
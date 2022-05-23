import React, { useEffect, useState } from 'react';
import background from '../../image/background.jpg'
import Reviews from './Reviews';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=" my-12">
            <div className="text-center">
                <h2 className=" text-3xl font-bold text-orange-500">Testimonials</h2>
                <h1 className="text-5xl font-bold m-2 text-black text-center">WHAT ARE CLIENTS SAY</h1>
                <p className="text-gray-600">Get the latest motorbike reviews<br /> online at Motorcycle News. MCN has 1000s of reviews<br /> by our expert test team, as well<br /> as owners, including spec</p>
            </div>
            
            
        </div>
    );
};

export default Review;
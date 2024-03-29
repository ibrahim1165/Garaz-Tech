import React, { useEffect, useState, } from 'react';
import Reviews from './Reviews'

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://garaz-tech.onrender.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-12">
            <div className="text-center">
                <h2 className=" text-3xl font-bold text-orange-500">Testimonials</h2>
                <h1 className="text-5xl font-bold m-2 text-black text-center">WHAT ARE CLIENTS SAY</h1>
                <p className="text-gray-600">Get the latest motorbike reviews<br /> online at Motorcycle News. MCN has 1000s of reviews<br /> by our expert test team, as well<br /> as owners, including spec</p>
          </div>
          <div className="grid grid-cold-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto px-12 my-4">
              {
                  reviews.map(review=><Reviews
                  key={review._id}
                  review={review}
                  
                  ></Reviews>)
              }
          </div>
        </div>
    );
};

export default Review;
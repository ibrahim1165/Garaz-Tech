import React from 'react';
import Start from './Start';

const Reviews = ({ review }) => {
    const { name, img, description} = review
    return (
        <div>
        <div class="card lg:w-96 shadow-xl m-2 mt-8 ">
          <div class="card-body">
            
            <p>{description}</p>
          </div>
          <div className="items-center">
          <div class="avatar p-5 flex">
            <div class="w-12 h-12 rounded-full">
              <img src={img} alt="" />
            </div>
            <div className="px-2">
            <p class="card-title">{name}</p>
            <p>
             <Start></Start>
            </p>
            </div>
          </div> 
          </div>
          
        </div>
        </div>

    );
};

export default Reviews;
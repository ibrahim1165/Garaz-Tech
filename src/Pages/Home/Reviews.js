import React from 'react';

const Reviews = ({ review }) => {
    const { name, img, description } = review
    return (
        <div>
            <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6" class="rounded-box" />
        </div>
    );
};

export default Reviews;
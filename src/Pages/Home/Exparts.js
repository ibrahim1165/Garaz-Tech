import React from 'react';

const Exparts = ({ expart }) => {
    const { name, img, founder } = expart;
    return (
        <div>
            <div class="card card-compact w-3/4 bg-base-100">
                <div>
                <figure>
                <img src={img} alt="expart" /></figure>
                </div>
                <div className="mt-[-70px] bg-black text-white w-3/4 h-16 text-center">
                    <h2 class="card-title text-center">{name}</h2>
                    <p className="text-center"><span>{founder}</span></p>             
                </div>
            </div>
        </div>
    );
};

export default Exparts;
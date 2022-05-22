import React from 'react';

const Exparts = ({ expart }) => {
    const { name, img, founder } = expart;
    return (
        <div>
            <div class="card card-compact w-3/4 bg-base-100">
                <div>
                <figure>
                <img className="w-full" src={img} alt="expart" /></figure>
                </div>
                <div className="mt-[-70px] bg-black text-white w-3/4 h-16 text-cente px-">
                    <h2 class="card-title text-cente">{name}</h2>
                    <p className="text-cente"><span>{founder}</span></p>             
                </div>
            </div>
        </div>
    );
};

export default Exparts;
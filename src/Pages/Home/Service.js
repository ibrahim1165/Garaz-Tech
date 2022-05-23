import React from 'react';

const Service = ({ service }) => {
    const { name, price, description,quantity, img } = service;
    return (
        <div>
            <div class="card card-compact w-96 bg-white shadow-lg">
                <figure><img className="" src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Service: {name}</h2>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Description: <span className="text-sm text-gray-500">{description}</span></p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-warning btn-outline">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
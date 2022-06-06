import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, description,availablequantity, img,_id} = service;
    return (
        <div className="mx-auto">
            <div class="card card-compact lg:max-w-lg bg-white shadow-lg">
                <figure><img className="mx-auto" src={img} alt="Service" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Service: {name}</h2>
                    <p>Price: ${price}</p>
                    <p>availableQuantity: {availablequantity}</p>
                    <p>Description: <span className="text-sm text-gray-500">{description}</span></p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-warning btn-outline">
                            <Link to={`/update/${_id}`}>Purchase</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UserService from '../Hooks/UserService';

const Update = () => {
    const { id } = useParams()
    const [service] = UserService(id)
    return (
        <div>
            <div class="hero min-h-screen my-12">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={service.img} alt="" />
                    <div className="px-6">
                        <h1 class="text-5xl font-bold py-2 lg:py-0">Service: {service.name}</h1>
                        <p class="">Price: ${service.price}</p>
                        <p class="">availableQuantity: {service.availablequantity}</p>
                        <p class="">MinimumQuantity: {service.minimumquantity}</p>
                        <p class="py-6 me-24">Description:{service.description}</p>
                        <button class="btn btn-outline btn-primary">
                            <Link to={`/order/${id}`}>Order Now</Link>
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
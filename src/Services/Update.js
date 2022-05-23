import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    const [user, setUser] = useState(id)
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`
        fetch(url).then(res => res.json()).then(data => setUser(data))
    }, [])
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={user.img} alt="" />
                    <div className="px-6">
                        <h1 class="text-5xl font-bold">Service: {user.name}</h1>
                        <p class="">Price: ${user.price}</p>
                        <p class="">availableQuantity: {user.availablequantity}</p>
                        <p class="">MinimumQuantity: {user.minimumquantity}</p>
                        <p class="py-6 me-24">Description:{user.description}</p>
                        <button class="btn btn-outline btn-primary">
                            <Link to="/order">Order Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
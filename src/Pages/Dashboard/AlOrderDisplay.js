import React from 'react';

const AlOrderDisplay = ({ order }) => {
    const { address, email, id, phone, quantity, service } = order
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Service: {service}</h2>
                    <p>Email: {email}</p>
                    <p>Id: {id}</p>
                    <p>Phone: {phone}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Adress: {address}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default AlOrderDisplay;
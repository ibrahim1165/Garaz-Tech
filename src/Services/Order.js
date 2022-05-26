import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import backGround from '../image/Header.jpg'
import UserService from '../Hooks/UserService';


const Order = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth);
    const [service] = UserService(id)
    const handleOrder = (event) => {
        event.preventDefault();

        const quantity = event.target.quantity?.value;
        if(service.minimumquantity > quantity){
          toast.error(`Please Minimum products order : ${service.minimumquantity}`);
        }
         if (service.availablequantity <quantity){
      
          toast.error(`Available Stock Products  : ${service.availablequantity}`);
      
        }
        else{
            const quantity=parseInt (service.availablequantity-quantity)

            const order = {
                email: user.email,
                service: service.name,
                id: id,
                address: event.target.address?.value,
                phone: event.target.phone?.value,
                quantity:quantity
            }
            fetch('http://localhost:5000/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast(`Your Order Completed to ${service.name}`)
                    }
                    
                    event.target.reset();
                })
        }
    }
    return (
        <form onSubmit={handleOrder}>
            <div style={{
                background: `url(${backGround})`,
                backgroundSize: "cover"
            }} className="hero min-h-screen  text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <h1 className="text-center text-4xl font-bold text-orange-400 mt-4">Please Conform Your Order </h1>
                        <div className="card-body w-96 mb-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" value={user?.displayName} placeholder="name" className="input input-bordered text-black" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" value={user?.email} placeholder="email" className="input input-bordered text-black" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Service</span>
                                </label>
                                <input type="text" value={service?.name} name="service" placeholder="service" className="input input-bordered text-black" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">In Stock: {service.availablequantity}</span>
                                </label>
                                <input type="text" name="quantity" placeholder="quantity" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="address" className="input input-bordered text-black" autoComplete='off' required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Phone Number</span>
                                </label>
                                <input type="text" name="phone" placeholder="number" className="input input-bordered text-black" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary">Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Order;
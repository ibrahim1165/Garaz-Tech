import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import UserService from '../Hooks/UserService';


const Order = () => {
    const {id} = useParams()
    const [user] = useAuthState(auth);
    const [service] = UserService(id)
    const handleOrder =event=>{
        event.preventDefault();
        const order ={
            email:user.email,
            service:service.name,
            id:id,
            address:event.target.address?.value,
            phone:event.target.phone?.value,
            quantity:event.target.quantity?.value
        }
        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                toast('Your Order Completed')
            }
            event.target.reset();
        })
    }
    return (
       <form onSubmit={handleOrder}>
            <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div class="card-body w-96">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" value={user?.displayName} placeholder="name" class="input input-bordered" required  readOnly/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" value={user?.email} placeholder="email" class="input input-bordered" required  readOnly/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Service</span>
                            </label>
                            <input type="text" value={service?.name}  name="service"  placeholder="service" class="input input-bordered" required   readOnly />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Quentity</span>
                            </label>
                            <input type="text" name="quantity" placeholder="quantity" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input type="text"  name='address' placeholder="address" class="input input-bordered" autoComplete='off' required />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone Number</span>
                            </label>
                            <input type="text" name="phone" placeholder="number" class="input input-bordered" required />

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </form>
    );
};

export default Order;
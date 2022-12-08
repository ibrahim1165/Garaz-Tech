import React, { useEffect, useState } from 'react';
import AlOrderDisplay from './AlOrderDisplay';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const url =`https://assaingment-12-servicer.up.railway.app/order`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)})
    },[])

    return (
        <div>
              <div>
            <h2>All Order {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Quantity</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                   orders.map((order,index)=><AlOrderDisplay
                   key={order._id}
                   order={order}
                   index={index}
                   
                   ></AlOrderDisplay>)
               }


                    </tbody>
                </table>
            </div>
        </div>
           
               
           
        </div>
    );
};

export default AllOrder;
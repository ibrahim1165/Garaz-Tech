import React, { useEffect, useState } from 'react';
import AlOrderDisplay from './AlOrderDisplay';

const AllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const url =`http://localhost:5000/order`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setOrders(data)})
    },[])

    return (
        <div>
           <h1 className="text-center text-2xl text-primary mt-4">All Order</h1> 


           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-8 mx-auto">
               {
                   orders.map(order=><AlOrderDisplay
                   key={order._id}
                   order={order}
                   
                   ></AlOrderDisplay>)
               }
           </div>
        </div>
    );
};

export default AllOrder;
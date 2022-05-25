import React, { useEffect, useState } from 'react';
import Item from './Item';

const ManageItem = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
            <div className=" text-center">
            <h1 className="text-4xl m-4 text-orange-500">
                Our Services</h1>
                <p className="text-5xl font-bold ">WE PROVIDE BEST CUSTOM <br />MOTORCYCLE</p>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-2 gap-8 mt-8 my-12">
                {
                    services.map(service =><Item
                    key={service.id}
                    service={service}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default ManageItem;
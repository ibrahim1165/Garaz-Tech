import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('https://garaz-tech.onrender.com/service')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
            <div className=" text-center mx-auto">
            <h1 className="text-4xl m-4 text-orange-500">
                Our Services</h1>
                <p className="text-5xl font-bold ">WE PROVIDE BEST CUSTOM<br />MOTORCYCLE</p>
                <p className="text-sm m-2">A proper Service Schedule <br />for different bikes is important. Find the most apt bike Service<br /> and Maintenance schedules for your two wheeler.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 m-8">
                {
                    services.slice(0,6).map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
            <div className="text-center my-8">
            <button class="btn btn-outline btn-primary">
                <Link to="/service">More Service</Link>
            </button>
            </div>
        </div>
    );
};

export default Services;
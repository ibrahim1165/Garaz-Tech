import React from 'react';
import backGround from '../../image/background.jpg'

const Services = () => {
    return (
        <div className="" style={{
            background: `url(${backGround})`,
            backgroundSize: "cover"
        }}>
            <div className="p-20">
            <h1 className="text-2xl text-orange-400">
                Our Services</h1>
                <p className="text-5xl font-bold text-white">WE PROVIDE BEST CUSTOM<br />MOTORCYCLE</p>
                <p className="text-sm text-white">A proper Service Schedule <br />for different bikes is important. Find the most apt bike Service<br /> and Maintenance schedules for your two wheeler.</p>
            </div>

        </div>
    );
};

export default Services;
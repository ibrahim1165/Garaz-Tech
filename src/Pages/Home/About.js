import React from 'react';
import bikeCover from "../../image/bikecover.png"

const About = () => {
    return (
        <div>
            <div class="hero min-h-screen px-20">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={bikeCover}  alt="" />
                    <div>
                        <p className="text-2xl font-bold text-orange-300">About Us</p>
                        <h1 class="text-5xl font-bold">WE OVER 20 YEARS EXPERIENCE</h1>
                        <p class="py-6">We are offering all kinds of motorcycle servicing. Also, we provide different parts and other accessories.Later on, many bike owners start getting service done from local ... rely on the mechanic's expertise in suggesting and replacing the parts.
                        </p>
                        <button class="btn btn-outline btn-primary">About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
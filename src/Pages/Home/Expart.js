import React from 'react';
import expart1 from '../../image/expart-1.jpeg';
import expart2 from '../../image/expart-2.jpg';
import expart3 from '../../image/expart-3.jpeg';
import Exparts from './Exparts';

const Expart = () => {
    const exparts=[
        {
            _id:1,
            img:expart1,
            name:'Billy Chapman',
            founder:'Founder'
        },
        {
            _id:2,
            img:expart2,
            name:'Eddy Cornish',
            founder:'Mechanic'
        },
        {
            _id:3,
            img:expart3,
            name:'Gibson Hart',
            founder:'Mechanic'

        }
    ]
    return (
        <div className="my-14 mx-auto container">
            <div className="text-center">
                <h2 className="text-3xl my-2 text-orange-400 font-bold">Our Team</h2>
                <h1 className="text-5xl font-bold text-black">MEET OUR EXPERT TEAM</h1>
                <p className="text-sm text-gray-600 my-2">Find here Bike Spare Parts,<br /> Bike Parts wholesaler & Wholesale Dealers. Get contact <br />details & address of companies engaged in wholesale trade,</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 mx-20 sm:mx-auto gap-2 lg:px-16 my-8">
            {
                exparts.map(expart=><Exparts
               key={expart._id}
               expart={expart}
                ></Exparts>)
            }
           </div>
        </div>
    );
};

export default Expart;
import React from 'react';
import hader from "../../image/Header.jpg"

const Bannar = () => {
    return (
        <div>
        <div className="hero lg:min-h-screen" style={{
            background: `url(${hader})`,
            backgroundSize: "cover"
        }}>
             <div className=""></div>
  <div className="hero-content text-neutral-content">
    <div className=" lg:pr-96 sm:pr-0">
      <h1 className="mb-5 text-7xl font-bold">ALWAYS BE <br /> ORIGINAL</h1>
      <p className="mb-5 mt-5">We Can Offer you complete range of Original<br /> and Vendor Spare parts for Motorcyles BAJAJ Pulsar, <br />Boxer, Avenger, Discover all Models</p>
      <button className="btn btn-outline btn-primary lg:btn-lg">CONTACT US</button>
    </div>
  </div>
</div>
        </div>
       
    );
};

export default Bannar;
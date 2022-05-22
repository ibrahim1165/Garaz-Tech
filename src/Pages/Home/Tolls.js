import React from 'react';

const Tolls = () => {
    return (
        <div className="text-center my-20 ">
            <div className="stats  bg-black text-white w-3/4 md:grid-cols-3">
                <div className="stat">
                    <div className="stat-figure bg-white">

                    </div>
                    <div className="stat-title">Service</div>
                    <div className="stat-value">100K</div>
                    <div className="stat-desc">Jan 1st - May 1st</div>
                </div>

                <div className="stat">
                <div className="stat-title">
                    Customer
                </div>
                    <div className="stat-value">200 +</div>
                    <div className="stat-desc">↗︎ Local Customer</div>
                </div>
                <div className="stat inline-block">
                    <div className="stat-figure">
                    </div>
                    <div className="stat-title">
                        Best Service
                    </div>
                    <div className="stat-value">99%</div>
                    <div className="stat-desc">↗︎ 4000 (42%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure">

                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">50+</div>
                    <div className="stat-desc">↗︎Happy Customer 15 (22%)</div>
                </div>

            </div>
        </div>
    );
};

export default Tolls;
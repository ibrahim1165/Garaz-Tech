import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import user from '../../icon/user.png';
import motor from '../../icon/motorcycle.png';
import customer from '../../icon/customer.png';
import best from '../../icon/best.png';

const Tolls = () => {
    return (
        <div className="text-center my-20 ">
            <div class="stats  bg-black text-white w-3/4 ">
                <div class="stat">
                    <div class="stat-figure bg-white">

                    </div>
                    <div class="stat-title">Service</div>
                    <div class="stat-value">100K</div>
                    <div class="stat-desc">Jan 1st - May 1st</div>
                </div>

                <div class="stat">
                <div class="stat-title">
                    Customer
                </div>
                    <div class="stat-value">200 +</div>
                    <div class="stat-desc">↗︎ Local Customer</div>
                </div>
                <div class="stat inline-block">
                    <div class="stat-figure">
                    </div>
                    <div class="stat-title">
                        Best Service
                    </div>
                    <div class="stat-value">99%</div>
                    <div class="stat-desc">↗︎ 4000 (42%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure">

                    </div>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value">50+</div>
                    <div class="stat-desc">↗︎ 15 (22%)</div>
                </div>

            </div>
        </div>
    );
};

export default Tolls;
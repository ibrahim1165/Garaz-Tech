import React from 'react';
import ibrahim from '../../image/ibrahim.jpg'

const MyPortfolio = () => {
    return (
        <div>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img className="w-72" src={ibrahim} alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">MD: Ibrahim</h1>
                        <p className="text-2xl">Education:<small> BBA 1st Year of management</small></p>
                        <p><small className="text-2xl text-orange-500">Skill</small>:  HTML5,Css3,React,javascript,Mongodb,bootstrap,tailwindCss</p>
                        <p>Language: Bangla , English</p>
                        <p>mdrafi15429@gmail.com</p>
                        <div>
                        <p className="underline text-2xl font-bold">WebsiteLink</p>
                        <a href="https://laptop-warehouse-f81ef.web.app/">https://laptop-warehouse-f81ef.web.app/</a><br />
                        <a href="https://mobile-services-e72f0.web.app/about">https://mobile-services-e72f0.web.app/about</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
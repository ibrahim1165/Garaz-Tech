import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../image/background.jpg'

const NotFound = () => {
    return (
        <div className="hero lg:min-h-screen" style={{
            background: `url(${background})`,
            backgroundSize: "cover"
        }}>
            <div className="text-center">
                <h1 className="text-7xl font-bold text-orange-700">404</h1>
                <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
                <p className="text-sm text-white mt-2">A motorbike mechanic<br /> made me think about an important factor <br />of the customer experience in digital products.</p>
                <button class="btn btn-outline btn-warning my-4">
                    <Link to="/">Back To Home</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;
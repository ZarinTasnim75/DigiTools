import React from 'react';

const Status = () => {
    return (
        <div className="w-full bg-gradient-to-r from-blue-700 to-purple-500 text-white py-6">

            <div className="max-w-6xl mx-auto px-4">

                <div className="stats stats-vertical md:stats-horizontal w-full text-center divide-y md:divide-y-0 md:divide-x-3 divide-white">
                    <div className="stat">
                        <div className="stat-value text-3xl md:text-4xl">50K+</div>
                        <div className="stat-desc text-gray-200 text-xl">Active Users</div>
                    </div>

                    <div className="stat">
                        <div className="stat-value text-3xl md:text-4xl">200+</div>
                        <div className="stat-desc text-gray-200 text-xl">Premium Tools</div>
                    </div>

                    <div className="stat">
                        <div className="stat-value text-3xl md:text-4xl">4.9</div>
                        <div className="stat-desc text-gray-200 text-xl">Rating</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Status;
import React from 'react';

const Stamp = () => {
    return (
        <div className='text-white bg-gradient-to-r from-blue-700 to-purple-500 p-20'>
            <p className='text-center text-2xl font-semibold'>Ready To Transform Your Workflow?</p>
            <p className='text-xs text-center mt-3'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>

            <div className='flex justify-center gap-4 '>
                <button className="btn bg-white text-purple-700 rounded-4xl w-fit mt-6 ">
                    Explore Products
                </button>
                <button className="btn bg-transparent text-white rounded-4xl w-fit mt-6 ">
                     View Pricing
                </button>
            </div>

            <p className='text-xs mt-3 text-center'>14-day free trial • No credit card required • Cancel anytime</p>

        </div>
    );
};

export default Stamp;
import React from 'react';
import profile from './user.png';
import box from './package.png';
import rocket from './rocket.png';


const Features = () => {
    return (
        <div className=' bg-gray-50'>
            <div className='flex flex-col text-center p-20 md:p-25'>
                <p className='text-4xl font-semibold'>Get Started In 3 Steps</p>
                <p className='text-gray-400 mt-2 text-xs'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1  gap-5 p-10 md:pb-25 md:grid-cols-3 '>
                <div className='flex flex-col gap-3 p-2 rounded-xl bg-white'>
                    <p className='text-white ml-auto bg-gradient-to-r from-blue-700 to-purple-500 w-fit rounded-full text-xs p-1'>01</p>
                    <img src={profile} alt="" className='w-12 p-2 m-auto bg-purple-100 rounded-4xl' />
                    <p className='text-center font-semibold'>Create Account</p>
                    <p className='text-center text-gray-500 text-xs pb-10'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='flex flex-col gap-3 p-2 rounded-xl bg-white'>
                    <p className='text-white ml-auto bg-gradient-to-r from-blue-700 to-purple-500 w-fit rounded-2xl text-xs p-1'>02</p>
                    <img src={box} alt="" className='w-12 p-2 m-auto bg-purple-100 rounded-4xl' />
                    <p className='text-center font-semibold'>Choose Products</p>
                    <p className='text-center text-gray-500 text-xs pb-10'>Browse our catalog and select the tools
                        that fit your needs.</p>
                </div>
                <div className='flex flex-col gap-3 p-2 rounded-xl bg-white'>
                    <p className='text-white ml-auto bg-gradient-to-r from-blue-700 to-purple-500 w-fit rounded-2xl text-xs p-1'>03</p>
                    <img src={rocket} alt="" className='w-12 p-2 m-auto bg-purple-100 rounded-4xl' />
                    <p className='text-center font-semibold'>Start Creating</p>
                    <p className='text-center text-gray-500 text-xs pb-10'>Download and start using your premium
                        tools immediately.</p>
                </div>

            </div>

        </div>
    );
};

export default Features;
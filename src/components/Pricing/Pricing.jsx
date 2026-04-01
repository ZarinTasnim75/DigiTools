import React from 'react';

const Pricing = () => {
    return (
        <div className='p-15 md:p-20'>
            <div>
                <p className='text-4xl text-center font-bold mb-3'>Simple, Transparent Pricing</p>
                <p className='text-xs text-gray-500 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid grid-cols-1 pb-20 lg:grid-cols-3 gap-5 '>

                <div className="card bg-gray-50 shadow-sm w-full h-full mt-20">
                    <div className="card-body flex flex-col">
                        <div className="flex flex-col text-left">

                            <h2 className="text-2xl font-semibold mb-2">Starter</h2>
                            <p className='text-gray-500 mb-3'>Perfect for getting started<br></br>
                                <span className="text-3xl font-semibold text-black">$0</span>/Month</p>
                        </div>
                        <ul className="mt-2 flex flex-col  gap-1 text-left text-gray-500">
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic Templates</span>
                            </li>
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-auto pt-6">
                            <button className="btn bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-4xl w-full">
                                Get Started Free
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card relative bg-gradient-to-r from-blue-700 to-purple-600 shadow-sm w-full h-full mt-20 ">
                     <span className="badge absolute -top-3 left-0 right-0 mx-auto badge-xs p-2.5 font-semibold text-center bg-amber-100 text-red-700" >Most Popular</span>
                    <div className="card-body flex flex-col text-white">
                       
                        <div className="flex flex-col text-left">

                            <h2 className="text-2xl font-semibold mb-1">Pro</h2>
                            <p className=' mb-1'>Best for professionals</p><br></br>
                               <p> <span className="text-3xl font-semibold pt-5">$29</span>/Month</p>
                        </div>

                        <ul className="mt-2 flex flex-col  gap-1 text-left  text-white">
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>

                         <div className="mt-auto pt-6">
                            <button className="btn bg-white text-purple-700 rounded-4xl w-full font-bold">
                                Start Pro Trial
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card bg-gray-50 shadow-sm w-full h-full mt-20">
                    <div className="card-body flex flex-col">
                        <div className="flex flex-col text-left">

                            <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
                            <p className='text-gray-600 mb-3'>For teams and businesses<br></br>
                                <span className="text-3xl font-semibold text-black">$99</span>/Month</p>
                        </div>
                        <ul className="mt-2 flex flex-col  gap-1 text-left ">
                            <li className='text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> </svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li className='text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> </svg>
                                <span>Team collaboration</span>
                            </li>
                            <li className='text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> </svg>
                                <span>Custom integrations</span>
                            </li>
                            <li className='text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> </svg>
                                <span>Dedicated support</span>
                            </li>
                            <li className='text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> </svg>
                                <span>SLA guarantee</span>
                            </li>
                              <li className='text-gray-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /> </svg>
                                <span>Custom branding</span>
                            </li>

                        </ul>
                         <div className="mt-auto pt-6">
                            <button className="btn bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-4xl w-full">
                               Contact Sales
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;
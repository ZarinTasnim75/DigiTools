import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-blue-950 p-15 grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='gap-3'>
                <p className=' text-white font-bold text-xl'>DigiTools</p>
                <p className='text-gray-200 text-xs mt-3'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>

            <div className='flex flex-row gap-10'>
                <ul className='flex flex-col'>
                    <p className='font-bold mb-2  text-white'>Product</p>
                    <a href="#" className='font-light text-xs mb-2 hover:underline text-gray-100'>Features</a>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Pricing</a>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Templates</a>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Intergrations</a>
                </ul>

                <ul className='flex flex-col'>
                    <p className='font-bold mb-2  text-white'>Company</p>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>About</a>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Blog</a>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Careers</a>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Press</a>
                </ul>

                <ul className='flex flex-col'>
                    <p className='font-bold mb-2  text-white'>Resources</p>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Documentation</a>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Help Center</a>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Community</a>
                    <a href="#" className='font-light text-xs mb-2 hover:underline  text-gray-100'>Contact</a>
                </ul>



            </div>
            <div>
                <p className='font-bold mb-2  text-white'>Social Links</p>
                <div className='flex gap-5' >
                    <a href="https://instagram.com" target="_blank" >
                        <FaInstagram className="text-black bg-white h-12 w-12 p-2 rounded-full " />
                    </a>
                    <a href="https://facebook.com" target="_blank" >
                        <FaFacebook className="text-black bg-white h-12 w-12 p-2 rounded-full " />
                    </a>
                    <a href="https://X.com" target="_blank" >
                        <FaX className="text-black bg-white h-12 w-12 p-2 rounded-full " />
                    </a>
                </div>
            </div>


        </div>
    );
};

export default Footer;
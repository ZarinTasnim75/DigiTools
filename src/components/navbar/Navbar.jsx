import React from 'react';
import cart from './shopping-cart.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-xsm px-15">
            <div className="navbar-start">

                <h4 className='text-purple-600 font-bold text-2xl'>DigiTools</h4>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <img src={cart} alt="" />
                <a href="">Login</a>
                <button className="btn bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-4xl">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Navbar;
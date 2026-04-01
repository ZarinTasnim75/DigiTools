import React from 'react';

const CartPage = ({ cartItems }) => {
    if (cartItems.length === 0) {
        return <p className="mt-10 text-gray-500">Your cart is empty!</p>;
    }

    let total = 0
    cartItems.forEach(item => {
        total += item.price;
    });

    return (
        
        <div className="mt-10 text-left max-w-2xl mx-auto border border-gray-300 p-7 rounded-xl">
            
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            <div className="flex flex-col gap-4">
                {cartItems.map(item => (
                    <div key={item.id} className="card bg-base-200 p-4 flex flex-row items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-fit h-fit" />
                        <div className="flex flex-col">
                            <h3 className="font-semibold ">{item.name}</h3>
                            <span className='text-sm text-gray-600'>${item.price}</span>
                        </div>
                        
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-between">
                <p className=' text text-gray-600'> Total:</p>
                <p className="text-xl font-bold "> ${total}</p>
            </div>
            <button className="btn bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-4xl mt-4 px-10 w-full">
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CartPage;
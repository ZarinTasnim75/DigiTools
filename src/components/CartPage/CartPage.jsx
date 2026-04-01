import React from 'react';

const CartPage = ({ cartItems }) => {
    if (cartItems.length === 0) {
        return <p className="mt-10 text-gray-500">Your cart is empty.</p>;
    }

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="mt-10 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            <div className="flex flex-col gap-4">
                {cartItems.map(item => (
                    <div key={item.id} className="card bg-base-100 shadow-sm p-4 flex flex-row items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <p className="text-gray-500 text-sm">{item.description}</p>
                        </div>
                        <span className="font-bold text-lg">${item.price}/{item.period}</span>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-right">
                <p className="text-xl font-bold">Total: ${total}/Mo</p>
                <button className="btn bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-4xl mt-4 px-10">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
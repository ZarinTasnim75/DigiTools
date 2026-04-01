import React, { use, useState } from 'react';
import ProductCard from '../productCard/ProductCard';
import CartPage from '../CartPage/CartPage';

const ProductOptions = ({ productPromise }) => {

    const productData = use(productPromise);
    const [cartItems, setCartItems] = useState([]);
    const [currentPage, setCurrentPage] = useState('products');

    const handleAddToCart = (product) => {
        setCartItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) return prev; 
            return [...prev, product];
        });
        setCurrentPage('cart');
    };

    const handlePageSwitch = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='text-center m-20'>
            <h1 className='font-semibold text-4xl'>Premium Digital Tools</h1>
            <p className='text-gray-500 mt-4'>Choose from our curated collection of premium digital products designed
                to boost your productivity and creativity.</p>

            <div className='mt-8 border border-gray-200 inline-flex  rounded-4xl'>
                <button
                    onClick={() => handlePageSwitch('products')}
                    className={`btn rounded-4xl ${currentPage === 'products'
                        ? 'bg-gradient-to-r from-blue-700 to-purple-500 text-white'
                        : 'bg-white border-white'}`}>
                    Products
                </button>
                <button
                    onClick={() => handlePageSwitch('cart')}
                    className={`btn rounded-4xl ${currentPage === 'cart'
                        ? 'bg-gradient-to-r from-blue-700 to-purple-500 text-white'
                        : 'bg-white border-white'}`}>
                    Cart ({cartItems.length})
                </button>
            </div>
            {currentPage === 'products' && (
                <div className='grid grid-cols-1 gap-5 mt-5 lg:grid-cols-3'>
                    {productData.map(product => (
                        <ProductCard  key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}></ProductCard>
                           
                        
                    ))}
                </div>
            )}

            {currentPage === 'cart' && (<CartPage cartItems={cartItems}></CartPage>)}
        </div>
    );
};

export default ProductOptions;
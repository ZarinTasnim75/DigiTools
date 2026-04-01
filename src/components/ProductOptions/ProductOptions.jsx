import React,{use} from 'react';
import ProductCard from '../productCard/ProductCard';

const ProductOptions = ({productPromise}) => {

const productData = use(productPromise);

    return (
        <div className='text-center m-20 '>
            <h1 className='font-semibold text-4xl'>Premium Digital Tools</h1>
            <p className='text-gray-500 mt-4'>Choose from our curated collection of premium digital products designed
                to boost your productivity and creativity.</p>

            <div className='mt-8 border border-gray-200 inline-flex  rounded-4xl'>
                <button className="btn bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-4xl">
                    Products
                </button>
                <button className="btn bg-white border-white rounded-4xl">Cart (2)</button>
            </div>

            <div className='grid grid-cols-1  gap-5 mt-5 lg:grid-cols-3 '>
                {
                    productData.map( product => <ProductCard key={product.id} product ={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductOptions;
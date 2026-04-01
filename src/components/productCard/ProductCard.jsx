import React from 'react';

   const tagStylee = {
    Popular: "bg-purple-100 text-purple-600",
    New: "bg-green-100 text-green-600",
    "Best Seller": "bg-amber-100 text-amber-600",
   };


const ProductCard = ({ product }) => {
    console.log(product)
   
    const tagStyle = tagStylee[product.tag] ;

    return (
        <div className="card bg-base-100 shadow-sm w-full h-full">
            <div className="card-body">
                <span className={`badge badge-xs p-2 font-semibold ml-auto ${tagStyle}`}>{product.tag}</span>
                <div className="flex flex-col text-left">
                    <img src={product.image} alt="" className='w-fit' />
                    <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
                    <p className='text-gray-600 mb-3'>{product.description}<br></br>
                        <span className="text-xl font-bold text-black">${product.price}</span>/{product.period}</p>
                </div>
                <ul className="mt-2 flex flex-col gap-1 text-left ">
                    {product.features.map((feature, index) => (
                        <li key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <button className="btn bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-4xl w-full">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
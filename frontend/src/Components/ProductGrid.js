import React from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Star } from '@material-ui/icons';
import {newArrivals} from "./data.js";

// const slicedArray = newArrivals.slice(0, 3);

const ProductGrid = () => {
  return (
    <div className="container py-8">
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Element title="Latest" product={newArrivals} />
            <Element title="Top Rated" product={newArrivals} />
            <Element title="Best Selling" product={newArrivals} />
        </div>
    </div>
  )
}

const Element = (props) => {
   const { title, product } = props;
    return (
        <div className='col-span-1 space-y-3 divide-y-2'>
                <div className='flex items-center justify-between'>
                    <h1 className="text-gray-900 text-lg font-medium">{title}</h1>
                    <button className='flex items-center text-primary'>
                        <p className='font-semibold text-base pr-2'>See More</p>
                        <span><ArrowCircleRightIcon /></span>
                    </button>
                </div>
                <div className='space-y-2 pt-8'>
                {
                    product.slice(0, 3).map((item, index) => (
                    <div className='flex items-center justify-start gap-4 cursor-pointer' key={index}>
                                    <div className='w-28 h-24 bg-gray-100 flex items-center justify-center'>
                                    <img src={item.url} className="w-3/4 h-3/4 object-contain" alt="product" />
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-md font-medium text-gray-900 hover:text-primary'>{item.name}</h1>
                                        <div className='flex items-center'>
                                        <p className="text-lg text-primary font-medium flex items-center pr-2"><span className='pr-1'><img className="w-4" src="/assets/tk.png" alt="BDT" /></span> {item.price}</p>
                                        <p className="text-base text-gray-400 font-medium flex items-center line-through"><span className='pr-1'><img className="w-4 text-primary" src="/assets/tk.png" alt="BDT" /></span> {item.price}</p>
                                        </div>
                                        <div className="flex items-center">
                                        <div className="text-yellow-500 gap-1">
                                        <Star style={{fontSize: "15px"}} />
                                        <Star style={{fontSize: "15px"}} />
                                        <Star style={{fontSize: "15px"}} />
                                        <Star style={{fontSize: "15px"}} />
                                        <Star style={{fontSize: "15px"}} />
                                        </div>
                                        <h1 className="text-sm text-gray-800 font-medium pl-4">(130)</h1>
                                        </div>
                                    </div>    
                    </div>
                    ))
                }
                </div>
            </div>
    )
}

export default ProductGrid;
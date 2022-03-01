import React from 'react';

const Category = () => {

  return (
    <div className='container'>
        {/* Category Desktop Starts */}
    <div className="bg-gray-100 h-32 px-8 py-2 hidden md:flex items-center justify-between">
        <div className="py-2 w-28 hover:bg-gray-200 hover:cursor-pointer">
        <img src="/assets/category-images/fruitsvegetables.png" alt="fruits" className="w-16 object-contain mx-auto" />
        <h1 className="text-gray-900 text-sm font-semibold text-center pt-2">Fruits and Veges</h1>
        </div>
        <div className="py-2 w-28 hover:bg-gray-200 hover:cursor-pointer">
        <img src="/assets/category-images/meatfish.png" alt="fruits" className="w-16 object-contain mx-auto" />
        <h1 className="text-gray-900 text-sm font-semibold text-center pt-2">Meat and Fish</h1>
        </div>
        <div className="py-2 w-28 hover:bg-gray-200 hover:cursor-pointer">
        <img src="/assets/category-images/beverage.png" alt="fruits" className="w-16 object-contain mx-auto" />
        <h1 className="text-gray-900 text-sm font-semibold text-center pt-2">Beverage</h1>
        </div>
        <div className="py-2 w-28 hover:bg-gray-200 hover:cursor-pointer">
        <img src="/assets/category-images/kitchenappliances.png" alt="fruits" className="w-16 object-contain mx-auto" />
        <h1 className="text-gray-900 text-sm font-semibold text-center pt-2">Kitchen Appliance</h1>
        </div>
        <div className="py-2 w-28 hover:bg-gray-200 hover:cursor-pointer">
        <img src="/assets/category-images/masala.png" alt="fruits" className="w-16 object-contain mx-auto" />
        <h1 className="text-gray-900 text-sm font-semibold text-center pt-2">Cooking</h1>
        </div>
        <div className="py-2 w-28 hover:bg-gray-200 hover:cursor-pointer">
        <img src="/assets/category-images/beauty.png" alt="fruits" className="w-16 object-contain mx-auto" />
        <h1 className="text-gray-900 text-sm font-semibold text-center pt-2">Beauty Care</h1>
        </div>
        <div className="py-2 w-28 hover:bg-gray-200 hover:cursor-pointer">
        <img src="/assets/category-images/health.png" alt="fruits" className="w-16 object-contain mx-auto" />
        <h1 className="text-gray-900 text-sm font-semibold text-center pt-2">Health Care</h1>
        </div>
        <div className="py-2 w-28 hover:bg-gray-200 hover:cursor-pointer">
        <img src="/assets/category-images/package.png" alt="fruits" className="w-16 object-contain mx-auto" />
        <h1 className="text-gray-900 text-sm font-semibold text-center pt-2">Family Packages</h1>
        </div>
    </div>
    {/* Category Desktop Ends */}
    
    </div>
  )
}

export default Category;
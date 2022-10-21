import ProductCard from "./ProductCard";

function ShopingCar() {
  return (
    <div>
      <div className='p-4'>
        <div className='flex justify-between items-center text-gray-400 font-light my-1 px-4'>
          <span>Current Order</span>
          <span>Table</span>
        </div>
        <div className='flex justify-between items-center text-lg text-gray-900 font-bold my-1 px-4'>
          <span>#907653</span>
          <span>T1</span>
        </div>
        {/* Order Status End */}

        {/* Pills */}
        <div className='flex py-4 gap-4 text-sm px-4'>
          <button className='bg-[#ec7905] px-4 py-1 text-white rounded-full'>Dine In</button>
          <button className='bg-gray-200 px-4 py-1 text-gray-400 rounded-full'>Take it Away</button>
        </div>
        {/* Pills END */}

        {/* Products */}
        <div className='h-[400px] xl:h-[610px] md:portrait:min-h-[700px] hover:overflow-y-auto overflow-x-hidden '>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* Product card End */}
      </div>
      <div className='absolute bottom-10 lg:bottom-0 w-full m-auto bg-white drop-shadow-2xl  rounded-b-2xl'>
        <div className='p-4'>
          <div className='flex justify-between mb-2'>
            <span className='text-gray-400'>Items(7)</span> <span className='font-bold text-gray-800'>$28.67</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span className='text-gray-400'>Tax(10%)</span> <span className='font-bold text-gray-800'>$2.86</span>
          </div>
          <hr className='border-dashed border-gray-300' />
          <div className='flex justify-between pt-2  mb-4'>
            <span className='text-gray-400'>Total</span> <span className='font-bold text-gray-800'>$31,53</span>
          </div>

          <button className='bg-[#ec7905] py-2 w-full text-center text-white font-medium rounded-2xl '>Print Bills</button>
        </div>
      </div>
    </div>
  );
}

export default ShopingCar;

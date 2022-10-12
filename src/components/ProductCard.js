import Image from "next/image";
import { FaEdit, FaMinus, FaPlus } from "react-icons/fa";
function ProductCard() {
  return (
    <>
      <div className='grid grid-col-5 grid-rows-2 p-4'>
        <div className='row-end-2 bg-[#fff2e5] w-16 h-16 rounded-2xl '>
          <Image src='/jugo.png' width={64} height={64} alt='Orange Juice'></Image>
        </div>

        <div className='col-start-2 col-span-3 row-span-2 flex flex-col justify-between'>
          <div className='mb-2'>
            <h3 className='text-gray-900 font-bold text-xl'>Orange Juice</h3>
            <p className='text-gray-900'>
              <span className='text-gray-400'>Note: </span>Less Ice
            </p>
            <p className='font-bold text-gray-900 text-lg'>$2,87</p>
          </div>
          <div className='flex justify-between'>
            <div className='flex '>
              <button className='bg-gray-200 text-gray-500 rounded-full text-lg text-bold w-8 h-8 flex justify-center items-center'>
                <FaMinus className='text-xs'></FaMinus>
              </button>
              <span className='font-bold text-lg px-4 '>4</span>
              <button className='bg-gray-200 text-gray-500 rounded-full text-lg w-8 h-8 flex justify-center items-center '>
                <FaPlus className='text-xs'></FaPlus>
              </button>
            </div>
            <div className='bg-gray-200 text-gray-500 rounded-full text-lg py-2 px-3'>
              <FaEdit></FaEdit>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default ProductCard;

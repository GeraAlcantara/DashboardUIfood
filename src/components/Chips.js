import Image from "next/image";
function Chips() {
  return (
    <div className='flex flex-wrap md:flex-nowrap justify-evenly md:justify-between items-center w-full lg:w-[65%] '>
      <button className='bg-[#fef0e1] mb-2 md:mb-0 flex items-center justify-around min-w-[110px] px-4 py-1 rounded-full text-[#ec7905] '>
        <Image src='/pizza.png' width='32' height='32' alt='pizza'></Image>
        <span className='text-[#ec7905] font-bold ml-2'>Pizza</span>
      </button>
      <button className='bg-[#ebebeb] mb-2 md:mb-0 flex items-center justify-around min-w-[110px] px-4 py-1 rounded-full  text-[#9a9a9a]'>
        <Image src='/burger.png' width='32' height='32' alt='pizza'></Image>
        <span className='font-medium ml-2'>Burger</span>
      </button>
      <button className='bg-[#ebebeb] mb-2 md:mb-0 flex items-center justify-around min-w-[110px] px-4 py-1 rounded-full  text-[#9a9a9a]'>
        <Image src='/rise.png' width='32' height='32' alt='pizza'></Image>
        <span className='font-medium ml-2'>Rice</span>
      </button>
      <button className='bg-[#ebebeb] mb-2 md:mb-0 flex items-center justify-around min-w-[110px] px-4 py-1 rounded-full  text-[#9a9a9a]'>
        <Image src='/icecream.png' width='32' height='32' alt='pizza'></Image>
        <span className='font-medium ml-2'>Snacks</span>
      </button>
      <button className='bg-[#ebebeb] mb-2 md:mb-0 flex items-center justify-around min-w-[110px] px-4 py-1 rounded-full  text-[#9a9a9a]'>
        <Image src='/milk.png' width='32' height='32' alt='pizza'></Image>
        <span className='font-medium ml-2'>Drinks</span>
      </button>
    </div>
  );
}

export default Chips;

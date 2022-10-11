import Image from "next/image";

function Card() {
  return (
    <div className='flex flex-col items-center text-center p-4  rounded-xl bg-white mt-20 max-w-[90%] w-full mx-auto '>
      <div className='shadow-xl rounded-full -mt-20 w-40 h-40'>
        <Image objectFit='cover' src='/salad.png' width={600} height={600} alt='Fruit Salad'></Image>
      </div>
      <div className=' text-lg py-4'>
        <h2 className='font-bold text-2xl'>Fruit Salad</h2>
        <p className='text-[#ec7905] font-bold text-xl'>$4,87</p>
        <p>
          18 Salads <span className='text-gray-400'>Avalible</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Card;

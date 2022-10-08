import Head from "next/head";
import Image from "next/image";
import { FaShoppingCart, FaHome, FaBell } from "react-icons/fa";
import { ImPacman } from "react-icons/im";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <nav className='flex flex-col w-[150px] fixed h-screen py-10 justify-between'>
          <div className='flex justify-center'>
            {/* icono 1 */}
            <div className='p-2 text-[#132251] bg-[#fef8f2] w-[62px] h-[62px] text-2xl flex flex-col gap-1 justify-center items-center'>
              <ImPacman></ImPacman>
              <div className='h-[2px] w-3/4 bg-[#ec7905]'></div>
            </div>
          </div>
          {/* iconos app 8 */}

          <div className='flex flex-wrap justify-center'>
            <div className='text-2xl flex flex-col items-center '>
              <FaHome></FaHome>
              <span className='text-sm'>Home</span>
            </div>
          </div>

          {/* profile Avatar */}
          <div className='flex items-center flex-col'>
            <Image src='/avatar1.png' width='46' height='46' alt='Jaguar ek caricatura' className='rounded-full'></Image>
            <span>Profile</span>
          </div>
        </nav>
      </main>
    </div>
  );
}
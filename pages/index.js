import Head from "next/head";
import { useState } from "react";
import { FaGithubSquare, FaGratipay, FaAlignRight, FaTimes } from "react-icons/fa";
import Card from "../src/components/Card";
import Chips from "../src/components/Chips";
import Search from "../src/components/Search";
import SideBar from "../src/components/SideBar";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='min-h-screen w-full'>
      <Head>
        <title>TheSALADE</title>
        <meta name='description' content='Dashboard UI for salads restaurant Orders' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* NAV Start */}
      <SideBar showMenu={showMenu}></SideBar>
      {/* Mobile Menu */}
      <nav className='bg-[#ec7905] flex items-center justify-around lg:hidden w-full text-white fixed bottom-0 left-0 py-2 px-8 text-4xl rounded-t-2xl z-20'>
        <button className='p-1'>
          <FaGithubSquare></FaGithubSquare>
        </button>{" "}
        <button>
          <FaGratipay className='p-1'></FaGratipay>
        </button>
        <button onClick={toogleMenu}>{showMenu ? <FaTimes></FaTimes> : <FaAlignRight className='p-1'></FaAlignRight>}</button>
      </nav>
      {/* Mobile Menu END*/}
      {/* NAV end */}

      {/* Content */}
      <div className='grid grid-cols-8 px-6 lg:pl-28 bg-[#fafafa] relative'>
        <main className='col-span-full lg:col-span-6 lg:ml-6'>
          <Search></Search>
          <Chips></Chips>
          <header className='flex justify-between items-center py-6 md:py-10 lg:mx-4'>
            <h1 className='font-bold text-xl text-gray-800 '>Choose Salad</h1>
            <span className='text-gray-400'>10 Salads Results</span>
          </header>

          {/* cards Salads  */}
          <div className='grid grid-cols-1 md:grid-cols-3 justify-around'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </main>

        {/* Shoping Cart */}
        <aside className='hidden lg:block lg:col-span-2 h-full top-0 right-0  px-8 '>
          <div className='bg-white my-auto h-[calc(100% - 64px)] w-full relative rounded-2xl'>
            <div className='px-4 py-8'>
              {/* Order Status */}
              <div className='flex justify-between items-center text-gray-400 font-light my-1'>
                <span>Current Order</span>
                <span>Table</span>
              </div>
              <div className='flex justify-between items-center text-lg text-gray-900 font-bold my-1'>
                <span>#907653</span>
                <span>T1</span>
              </div>
              {/* Order Status End */}

              {/* Pills */}
              <div className='flex py-8 gap-4 text-sm'>
                <button className='bg-[#ec7905] px-4 py-1 text-white rounded-full'>Dine In</button>
                <button className='bg-gray-200 px-4 py-1 text-gray-400 rounded-full'>Take it Away</button>
              </div>
              {/* Pills END */}

              {/* Product */}
              <div className='grid grid-col-5 grid-rows-2'>
                <div className='row-end-2 bg-red-600 '>
                  <h1>foto</h1>
                </div>
                <div className='col-start-2 col-span-3  row-span-2 flex flex-col justify-between'>
                  <div className='bg-blue-700'>
                    <h1>name</h1>
                    <p>Notas</p>
                    <p>Price</p>
                  </div>
                  <div className='bg-orange-600 flex justify-between'>
                    <div className='flex '>
                      <button className='bg-gray-200 text-gray-500 rounded-full text-lg text-bold w-8 h-8'>
                        <span className='font-bold text-lg '>-</span>
                      </button>
                      <span className='font-bold text-lg px-4 '>4</span>
                      <button className='bg-gray-200 text-gray-500 rounded-full text-lg w-8 h-8 '>
                        <span className='font-bold text-lg 4 '>+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

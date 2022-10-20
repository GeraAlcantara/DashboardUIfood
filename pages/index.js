import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaGithubSquare, FaGratipay, FaAlignRight, FaTimes, FaEdit, FaMinus, FaPlus } from "react-icons/fa";
import Card from "../src/components/Card";
import Chips from "../src/components/Chips";
import ProductCard from "../src/components/ProductCard";
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

      {/* Content */}
      <div className='grid grid-cols-8 px-6 lg:pl-28 bg-[#fafafa]'>
        <main className='col-span-full lg:col-span-6 lg:ml-6'>
          <Search></Search>
          <Chips></Chips>
          <header className='flex justify-between items-center py-6 md:py-10 lg:mx-4'>
            <h1 className='font-bold text-xl text-gray-800 '>Choose Salad</h1>
            <span className='text-gray-400'>10 Salads Results</span>
          </header>

          {/* cards Salads  */}
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-around '>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </main>

        {/* Shoping Cart */}
        <aside className='hidden lg:col-span-2 lg:relative lg:flex justify-center items-center h-screen transition-all left-0 top-0 absolute w-full '>
          <div className='top-2 md:right-1 xl:right-4 w-full xl:w-fit xl:fixed mx-4 h-screen lg:h-[calc(100vh - 54px)] bg-white rounded-2xl py-4 '>
            {/* Order Status */}
            <div className=''>
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
              <div className='h-[400px] xl:h-[610px] hover:overflow-y-auto overflow-x-hidden '>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
              {/* Product card End */}

              <div className='absolute bottom-10 w-full bg-white  rounded-b-2xl px-4 pt-2'>
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
        </aside>
      </div>
    </div>
  );
}

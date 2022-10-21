import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaGithubSquare, FaGratipay, FaAlignRight, FaTimes, FaShoppingCart } from "react-icons/fa";
import Card from "../src/components/Card";
import Chips from "../src/components/Chips";

import Search from "../src/components/Search";
import ShopingCar from "../src/components/ShopingCar";
import SideBar from "../src/components/SideBar";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [showShopingCar, setshowShopingCar] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
    if (showShopingCar) {
      setshowShopingCar(!showShopingCar);
    }
  };
  const toggleShopingCar = () => {
    setshowShopingCar(!showShopingCar);
    if (showMenu) {
      setShowMenu(!showMenu);
    }
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
        </button>
        <button onClick={toggleShopingCar}>{showShopingCar ? <FaTimes></FaTimes> : <FaShoppingCart className='p-1'> </FaShoppingCart>}</button>
        <button onClick={toogleMenu}>{showMenu ? <FaTimes></FaTimes> : <FaAlignRight className='p-1'></FaAlignRight>}</button>
      </nav>
      {/* Mobile Menu END*/}

      {/* Content */}
      <div className='grid grid-cols-8  lg:pl-28 bg-[#fafafa]'>
        <main className='col-span-full lg:col-span-5 xl:col-span-6 p-4 lg:px-6'>
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
        <aside className='lg:col-span-2 flex relative col-start-1 row-start-auto lg:col-start-auto'>
          <div
            className={` transition-all top-0 w-full fixed lg:w-[330px] xl:w-[370px] lg:right-0 h-[calc(100vh-40px)] lg:h-screen bg-white  ${
              showShopingCar ? "right-0 " : "-right-full"
            } `}
          >
            <ShopingCar></ShopingCar>
          </div>
        </aside>
      </div>
    </div>
  );
}
/* hidden lg:col-span-2 lg:relative lg:flex justify-center items-center h-screen transition-all left-0 top-0 absolute w-full */

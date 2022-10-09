import Image from "next/image";
import { ImPacman } from "react-icons/im";
import { Navitems } from "../data/data";

function SideBar(props) {
  const { showMenu } = props;
  return (
    <nav
      className={`transition-all ease-out duration-500 flex lg:left-0 flex-col w-28 fixed h-full py-6 md:py-10 justify-between z-50 bg-[#fafafa] top-0 ${
        showMenu ? "left-0" : "-left-full"
      } `}
    >
      <div className='flex justify-center'>
        {/* icono 1 */}
        <div className='p-2 text-[#132251] bg-[#f7e3d0] w-[62px] h-[62px] text-2xl flex flex-col gap-1 justify-center items-center rounded-xl'>
          <ImPacman></ImPacman>
          <div className='h-[2px] w-3/4 bg-[#ec7905]'></div>
        </div>
      </div>
      {/* iconos app 8 */}
      <div className='flex flex-col gap-8 justify-center items-center text-gray-500 '>
        {Navitems.map(({ name, Icon, idx }) => (
          <div key={name + idx} className='text-2xl flex flex-col items-center '>
            <Icon></Icon>
            <span className='text-sm'>{name}</span>
          </div>
        ))}
      </div>
      {/* profile Avatar */}
      <div className='flex items-center flex-col'>
        <Image src='/avatar1.png' width='46' height='46' alt='Jaguar ek caricatura' className='rounded-full'></Image>
        <span>Profile</span>
      </div>
    </nav>
  );
}

export default SideBar;

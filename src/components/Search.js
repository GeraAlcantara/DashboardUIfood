import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <div className='flex flex-col md:flex-row justify-between w-full lg:w-3/4 py-6 md:py-10 items-center'>
      <div className='bg-white py-2 pr-3 rounded-lg flex justify-between items-center w-full md:w-2/4 mb-4 md:m-0'>
        <input placeholder='Search category or menu' type='text' className=' ml-4 w-[90%] focus:outline-slate-100' />
        <FaSearch className='text-gray-500'></FaSearch>
      </div>
      <div>
        <b className='text-[#ec7905] '> 5 items out of stock</b>
      </div>
    </div>
  );
}

export default Search;

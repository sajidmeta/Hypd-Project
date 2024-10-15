import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className='pt-10'>
    <nav className="bg-pink-50  py-5 px-6 rounded-full flex items-center justify-between ">
      {/* Logo */}
      <div className='flex gap-10'>
      <img src="/asset/Logo.svg" alt="" />
       {/* Links */}
      <div className="flex space-x-8 items-center">
        <div className="flex space-x-10">
            <div className='flex gap-2 items-center '>
          <Link href="#" className="hover:text-orange-500 font-semibold">
            App
          </Link>
          <IoIosArrowDown />
          </div>
          <div className='flex gap-2 items-center '>
          <Link href="#" className="hover:text-orange-500 font-semibold">
          Templates
          </Link>
          <IoIosArrowDown />
          </div>
          <div className='flex gap-2 items-center '>
          <Link href="#" className="hover:text-orange-500 font-semibold">
           Learn
          </Link>
          <IoIosArrowDown />
          </div>
          <Link href="#" className="hover:text-orange-500 font-semibold">
            Browse Giveaways
          </Link>
          <Link href="#" className="hover:text-orange-500 font-semibold">
            Pricing
          </Link>
        </div>
      </div>
     </div>
     
     
       {/* Login and Signup */}
       <div className="flex space-x-8">
          <Link href="#" className="hover:text-orange-500 font-semibold">
            Login
          </Link>
          <Link href="#">
            <span className="px-4 py-2 shadow-lg rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white hover:opacity-90">
              Sign Up
            </span>
          </Link>
        </div>
    </nav>
    </div>
  );
};

export default Navbar;

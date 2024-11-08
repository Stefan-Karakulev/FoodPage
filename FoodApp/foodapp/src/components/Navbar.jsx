import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 '>
                    Best <span className='font-bold'>Eats</span>
                </h1>
                {/* hidde them below 1024px,p-1 e za da go zgoleme unatre */}
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
            {/* search */}

            {/* so flex gi stavame vo redica */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400[x] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                {/* so bg-transparent gi populnuvame praznite mesta da e siva boja */}
                <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search Foods' />
            </div>
            {/* cart button,hide it below 768px */}
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20} className='mr-4' />Cart
            </button>

            {/* Mobile Menu,we set it black bg with opacity80 and z index 10 and top and left for it to cover the full screen  */}
            {/* overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""}

            {/* side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}><AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 cursor-pointer' />
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className="mr-4" />Orders</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={25} className="mr-4" />Favourites</li>
                        <li className='text-xl py-4 flex'><FaWallet size={25} className="mr-4" />Wallet</li>
                        <li className='text-xl py-4 flex'><MdHelp size={25} className="mr-4" />Help</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={25} className="mr-4" />Promotions</li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className="mr-4" />Best Ones</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={25} className="mr-4" />Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar
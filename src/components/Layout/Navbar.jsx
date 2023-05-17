import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from 'react-router-dom';
import Icon from '../Common/Icon';
import Button from '../Common/Button';

const Navbar = () => {
    const navElements = [
        { name: 'Buy Crypto', to: '/' },
        { name: 'Trends', to: '/' },
        { name: 'Trade', to: '/' },
        { name: 'NFT', to: '/' }];
    return (
        <nav >
            <div className='mx-auto flex items-center  h-10 py-10' >
                <div className='flex-0' >
                    <div className='w-7 h-9'> <Icon name='logo' /> </div>
                </div>

                <div className="sm:hidden lg:flex xl:flex 2xl:flex">
                    <div className='flex flex-1 justify-center space-x-12 '>
                        {navElements.map((item) => {
                            return (
                                <NavLink to={item.to}> {item.name} </NavLink>
                            )
                        })}
                    </div>
                </div>

                <div className='flex-0'>
                    <NavLink to='' className='mr-4'>Login</NavLink>
                    <NavLink to=''> <Button value='Register' /> </NavLink>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;

// function Nav() {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <div>
//             <nav className="bg-gray-800">
//                 <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-16 bg-red-100">
//                         <div className="flex items-center">
//                             <nav className='mx-auto flex items-center  h-10 py-10'>
//                                 <div className='flex-0' >
//                                     <div className='w-7 h-9'> <Icon name='logo' /> </div>
//                                 </div>

//                                 <div className='flex-1 justify-center space-x-12 '>
//                                     {navElements.map((item) => {
//                                         return (
//                                             <NavLink to={item.to}> {item.name} </NavLink>
//                                         )
//                                     })}
//                                 </div>

//                                 <div className='flex-0'>
//                                     <NavLink to='' className='mr-4'>Login</NavLink>
//                                     <NavLink to=''> <Button value='Register' /> </NavLink>

//                                 </div>
//                             </nav>

//                             <div className="-mr-2 flex md:hidden">
//                                 <button
//                                     onClick={() => setIsOpen(!isOpen)}
//                                     type="button"
//                                     className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                                     aria-controls="mobile-menu"
//                                     aria-expanded="false"
//                                 >
//                                     <span className="sr-only">Open main menu</span>
//                                     {!isOpen ? (
//                                         <svg
//                                             className="block h-6 w-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M4 6h16M4 12h16M4 18h16"
//                                             />
//                                         </svg>
//                                     ) : (
//                                         <svg
//                                             className="block h-6 w-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                             aria-hidden="true"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M6 18L18 6M6 6l12 12"
//                                             />
//                                         </svg>
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     <Transition
//                         show={isOpen}
//                         enter="transition ease-out duration-100 transform"
//                         enterFrom="opacity-0 scale-95"
//                         enterTo="opacity-100 scale-100"
//                         leave="transition ease-in duration-75 transform"
//                         leaveFrom="opacity-100 scale-100"
//                         leaveTo="opacity-0 scale-95"
//                     >
//                         {(ref) => (
//                             <div className="md:hidden" id="mobile-menu">
//                                 <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                                     <a
//                                         href="#"
//                                         className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
//                                     >
//                                         Dashboard
//                                     </a>

//                                     <a
//                                         href="#"
//                                         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                     >
//                                         Team
//                                     </a>

//                                     <a
//                                         href="#"
//                                         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                     >
//                                         Projects
//                                     </a>

//                                     <a
//                                         href="#"
//                                         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                     >
//                                         Calendar
//                                     </a>

//                                     <a
//                                         href="#"
//                                         className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                                     >
//                                         Reports
//                                     </a>
//                                 </div>
//                             </div>
//                         )}
//                     </Transition>
//                 </div>
//             </nav>



//         </div>
//     );
// }

// export default Nav;
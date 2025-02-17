'use client'
import { FaCalendarAlt, FaUsers, FaWallet, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white"
            >
                <FaBars className="w-6 h-6" />
            </button>

            <div className={`
        h-[calc(100vh)] bg-blue-600 flex flex-col items-center p-4
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:w-28 sm:w-12
        ${isMobileMenuOpen ? 'w-32 translate-x-0' : 'w-32 -translate-x-full'}
      `}>
                {/* Logo */}
                <div className="bg-transparent mb-4 overflow-hidden text-white text-3xl flex flex-col items-center">
                    <span className='py-4'>P</span>
                </div>

                {/* User Profile */}
                <div className="flex flex-col items-center w-full">
                    <div className="w-28 sm:w-32 md:w-36 lg:w-28 h-[1px] bg-gray-200 mb-6"></div>
                    <div className="p-5 md:w-16 md:h-16 rounded-full bg-white overflow-hidden shadow-sm">
                        <img
                            src="/logo.jpg"
                            alt="User Profile"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                        />
                    </div>
                    <div className="w-28 sm:w-32 md:w-36 lg:w-28 h-[0.5px] bg-gray-200 mt-6"></div>
                </div>

                {/* Navigation Icons */}
                <nav className="flex flex-col gap-6 mt-4">
                    <button className="p-3 hover:bg-blue-500 rounded-lg transition-colors">
                        <FaCalendarAlt className="w-6 h-6 text-white" />
                    </button>
                    <button className="p-3 hover:bg-blue-500 rounded-lg transition-colors">
                        <FaUsers className="w-6 h-6 text-white" />
                    </button>
                    <button className="p-3 hover:bg-blue-500 rounded-lg transition-colors">
                        <FaWallet className="w-6 h-6 text-white" />
                    </button>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
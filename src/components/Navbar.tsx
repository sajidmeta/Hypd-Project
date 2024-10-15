"use client";
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [notificationVisible, setNotificationVisible] = useState(true);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white py-4 lg:w-[90%] m-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-10 cursor-pointer">
            <img src="/asset/Logo.svg" alt="" />

            {/* Navigation Links (Visible only on larger screens) */}
            <div className="lg:block hidden">
            <div className=" flex space-x-8 font-bold">
              <a href="#" className="text-gray-600 hover:text-black">
                Profile
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Create A Community
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Leaderboard
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Rewards
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Rank Kols
              </a>
            </div>
            </div>
          </div>


          {/* Icons (Hidden on tablet/mobile) */}
          <div className=" flex  items-center space-x-4">
            {/* Setting icon */}
            <FiSettings className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer" />
            {/* Notification Icon */}
            <button className="text-gray-600 hover:text-black cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V8a6 6 0 10-12 0v6c0 .554-.225 1.055-.595 1.595L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            {/* User Avatar */}
            <img
              src="/asset/User.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />

            {/* Menu Button (Visible only on tablet/mobile) */}
            <div className="md:hidden">
            <button className="text-gray-600 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>


          </div>
          
          


        </div>
      </nav>

      {/* Notification Bar */}
      {notificationVisible && (
        <div className="lg:block hidden">
        <div className="bg-gray-50 border-t border-b  border-gray-300 py-3 flex items-center justify-between px-24 ">
          <div className="flex items-center space-x-2">
            <img src="/asset/Featured icon.svg" alt="" />
            <span className="text-gray-600 text-sm">
              <span className="font-bold">Notification are here to update</span>
              <span className="text-[#475467]">
                {" "}
                Lorem ipsum dolor sit amet{" "}
              </span>
              <a href="#" className=" underline">
                consectetur
              </a>
              .
            </span>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setNotificationVisible(false)}
              className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-200"
            >
              Dismiss
            </button>

            <button className="bg-gradient-to-r from-[#FF4E50] to-[#F9D423] text-white text-sm px-4 py-2 rounded-md">
              View changes
            </button>

            <button
              onClick={() => setNotificationVisible(false)}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              <RxCross2 className="w-6 h-6" />
            </button>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

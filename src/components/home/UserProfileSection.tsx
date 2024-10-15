"use client"
import React from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserProfileSection = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



  return (
    <div className='lg:w-[90%] m-auto'>
      <div className=" flex justify-between mt-6 items-center px-4 ">
        <h1 className="font-semibold text-3xl">User Profiles</h1>

        <button className="py-2 px-4 bg-[#FFB604] rounded-md shadow text-white font-semibold sm:block hidden">
          View All Users
        </button>
        </div>
        <p className="mt-4 text-xl text-[#475467] px-4">We’re always on the lookout for passionate, dynamic, and talented individuals.</p>
     
        <button className="py-2 px-4 border mt-4 border-neutral-400 text-[#344054] rounded-md  font-semibold sm:hidden block w-[92%] m-auto">
          View All Users
        </button>

      {/* <div className="my-16 flex gap-7"> */}

      <Slider { ...settings } className='my-12' >

        <div className='px-4'>
          <div className="w-full  relative ">
            <img src="/asset/card1.png" alt="" />
            <div className="absolute bottom-0 flex flex-col gap-4  w-full bg-[#FFFFFF]/5 backdrop-blur-md p-8 text-white">

              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">
                 Alisa Hester
                </h3>
                <MdArrowOutward className="h-6 w-6 " />
              </div>
             
             <div className="flex flex-col gap-1">
              <h1 className="text-lg font-semibold">Founder & CEO</h1>
              <p >Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
             </div>

             <div className="flex gap-3 items-center">
             <FaTwitter className="w-6 h-6" />
             <FaLinkedin className="w-6 h-6" />
             <TbWorld  className="w-7 h-7"/>
             </div>
              

            </div>
          </div>
          </div>
         
         <div className='px-4'>
          <div className="w-full  relative ">
            <img src="/asset/card 2.png" alt="" />
            <div className="absolute bottom-0 flex flex-col gap-4  w-full bg-[#FFFFFF]/5 backdrop-blur-md p-8 text-white">

              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">
                Rich Wilson
                </h3>
                <MdArrowOutward className="h-6 w-6 " />
              </div>
             
             <div className="flex flex-col gap-1">
              <h1 className="text-lg font-semibold">Engineering Manager</h1>
              <p >Lead engineering teams at Figma, Pitch, and Protocol Labs.</p>
             </div>

             <div className="flex gap-3 items-center">
             <FaTwitter className="w-6 h-6" />
             <FaLinkedin className="w-6 h-6" />
             <TbWorld  className="w-7 h-7"/>
             </div>
              

            </div>
          </div>
          </div>
            
        <div className='px-4'>
          <div className="w-full  relative ">
            <img src="/asset/card3.png" alt="" />
            <div className="absolute bottom-0 flex flex-col gap-4  w-full bg-[#FFFFFF]/5 backdrop-blur-md p-8 text-white">

              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">
                Annie Stanley
                </h3>
                <MdArrowOutward className="h-6 w-6 " />
              </div>
             
             <div className="flex flex-col gap-1">
              <h1 className="text-lg font-semibold">Product Manager</h1>
              <p >Product Manager Former PM for Airtable, Medium, Ghost, and Lumi.</p>
             </div>

             <div className="flex gap-3 items-center">
             <FaTwitter className="w-6 h-6" />
             <FaLinkedin className="w-6 h-6" />
             <TbWorld  className="w-7 h-7"/>
             </div>
              

            </div>
          </div>
          </div>

          </Slider>

          <div className='flex gap-4 mx-4'>
             <img src="/asset/left-cursor.svg" alt="" className='cursor-pointer' />
             <img src="/asset/right-arrow.svg" alt="" className='cursor-pointer'/>
          </div>

      {/* </div> */}
      </div>
  )
}

export default UserProfileSection

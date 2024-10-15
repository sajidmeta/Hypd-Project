"use client"
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

const cards = [
    {
      id: 1,
      image: "/asset/Competition Image.png",
      category: "Design",
      title: "Competitions 1",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      id: 2,
      image: "/asset/Competition Image.png",
      category: "Design",
      title: "Competitions 2",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      id: 3,
      image: "/asset/Competition Image.png",
      category: "Design",
      title: "Competitions 3",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      id: 1,
      image: "/asset/Competition Image.png",
      category: "Design",
      title: "Competitions 4",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      id: 2,
      image: "/asset/Competition Image.png",
      category: "Design",
      title: "Competitions 5",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      id: 3,
      image: "/asset/Competition Image.png",
      category: "Design",
      title: "Competitions 6",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
  ];

const page = () => {
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const teams = [
        { id: 1, name: 'Design', color: 'bg-yellow-200' },
        { id: 2, name: 'Product', color: 'bg-blue-200' },
        { id: 3, name: 'Marketing', color: 'bg-purple-200' },
        { id: 4, name: 'Management', color: 'bg-red-200' },
        { id: 5, name: 'Sales', color: 'bg-green-200' },
        { id: 6, name: 'Product', color: 'bg-blue-200' },
        { id: 7, name: 'Operations', color: 'bg-blue-200' },
      ];

      const roles = [
        'Backend Developer',
        'Frontend Developer',
        'Fullstack Developer',
        'Product Designer',
        'Product Manager',
        'QA Engineer',
        'UX Copywriter',
        'UX Designer',
      ];

      const filteredRoles = roles.filter((role) =>
        role.toLowerCase().includes(searchTerm.toLowerCase())
      );
  


  return (
    <div>
      <Navbar />

      <div className="main flex gap-4">
        <div className="w-1/5 bg-red-100 ">
         
        <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <p className="text-gray-500 mb-4">Apply filters to table data.</p>

      {/* Saved Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="saved-filter" className="sr-only">
          Select saved filter
        </label>
        <select
          id="saved-filter"
          className="w-full border border-gray-300 rounded-md py-2 px-3 bg-white"
        >
          <option value="">Select saved filter</option>
          <option value="filter1">Filter 1</option>
          <option value="filter2">Filter 2</option>
        </select>
      </div>

      {/* Teams Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Teams</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="team-1" className="mr-2" />
            <label htmlFor="team-1" className="px-2 py-1 text-sm rounded-lg bg-yellow-200">
              Design
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="team-2" className="mr-2" />
            <label htmlFor="team-2" className="px-2 py-1 text-sm rounded-lg bg-blue-200">
              Product
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="team-3" className="mr-2" />
            <label htmlFor="team-3" className="px-2 py-1 text-sm rounded-lg bg-purple-200">
              Marketing
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="team-4" className="mr-2" />
            <label htmlFor="team-4" className="px-2 py-1 text-sm rounded-lg bg-red-200">
              Management
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="team-5" className="mr-2" />
            <label htmlFor="team-5" className="px-2 py-1 text-sm rounded-lg bg-green-200">
              Sales
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="team-6" className="mr-2" />
            <label htmlFor="team-6" className="px-2 py-1 text-sm rounded-lg bg-blue-200">
              Operations
            </label>
          </div>
        </div>
      </div>

      {/* Role Section */}
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Role</h4>
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="role-1" className="mr-2" />
            <label htmlFor="role-1" className="text-sm">Backend Developer</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="role-2" className="mr-2" />
            <label htmlFor="role-2" className="text-sm">Frontend Developer</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="role-3" className="mr-2" />
            <label htmlFor="role-3" className="text-sm">Fullstack Developer</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="role-4" className="mr-2" />
            <label htmlFor="role-4" className="text-sm">Product Designer</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="role-5" className="mr-2" />
            <label htmlFor="role-5" className="text-sm">Product Manager</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="role-6" className="mr-2" />
            <label htmlFor="role-6" className="text-sm">QA Engineer</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="role-7" className="mr-2" />
            <label htmlFor="role-7" className="text-sm">UX Copywriter</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="role-8" className="mr-2" />
            <label htmlFor="role-8" className="text-sm">UX Designer</label>
          </div>
        </div>
        <button className="text-purple-600 text-sm font-semibold mt-2">
          Show 10 more
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button className="text-gray-600 bg-gray-100 px-4 py-2 rounded-md">
          Cancel
        </button>
        <button className="text-white bg-yellow-400 px-4 py-2 rounded-md">
          Save filter
        </button>
        <button className="text-white bg-orange-500 px-4 py-2 rounded-md">
          Apply
        </button>
      </div>
    </div>



        </div>

        <div className="w-[75%]">

          <div className="relative w-full   ">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="px-7 py-2 border border-gray-300  rounded-md focus:outline-none w-full"
            />
            <LuSearch className="absolute top-3 left-1.5 h-5 w-5 text-[#667085]" />
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 my-8">
        {cards.map((card) => (
          <div key={card.id} className="">
            <div className="flex flex-col gap-2">
              <img
                src={card.image}
                alt={card.title}
                className=" w-full h-72 object-cover rounded-xl"
              />
              <p className="text-sm text-purple-600 font-semibold mt-4">
                {card.category}
              </p>
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold text-gray-800 ">
                  {card.title}
                </h2>
                <MdArrowOutward className="h-6 w-6" />
              </div>
              <p className="text-gray-600 ">{card.description}</p>
            </div>
          </div>
        ))}
      </div>



        </div>
        

      </div>
    </div>
  );
};

export default page;

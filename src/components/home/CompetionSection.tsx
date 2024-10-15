// import React from 'react'

// const CompetionSection = () => {
//   return (
//     <div className='lg:w-[90%] m-auto'>

//     </div>
//   )
// }

// export default CompetionSection

// pages/index.js

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
const CompetionSection = () => {
  // Dummy data
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

  return (
    <div className="w-[90%] m-auto my-16 ">
      <h1 className="text-3xl text-center font-semibold">Competitions</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 my-10">
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
              <p className="text-gray-600 text-lg">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-gradient-to-r from-[#FF4E50] to-[#F9D423] text-white text-sm px-4 py-2 rounded-md flex gap-2 items-center">
          View all
          <GoArrowUpRight className="h-5 w-5" />
        </button>
      </div>

    </div>
  );
};

export default CompetionSection;

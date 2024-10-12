import Categories from "@/components/home/Categories";
import UserProfileSection from "@/components/home/UserProfileSection";
import Navbar from "@/components/Navbar";
import React from "react";



const page = () => {
  return (
    <div>
      <Navbar/>
      
      <UserProfileSection/>
      <Categories/>
 
    </div>
  );
};

export default page;

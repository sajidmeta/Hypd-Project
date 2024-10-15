import Categories from "@/components/home/Categories";
import CompetionSection from "@/components/home/CompetionSection";
import UserProfileSection from "@/components/home/UserProfileSection";
import Navbar from "@/components/Navbar";
import React from "react";



const page = () => {
  return (
    <div>
      <Navbar/>
      <UserProfileSection/>
      <Categories/>
      <CompetionSection/>
    </div>
  );
};

export default page;

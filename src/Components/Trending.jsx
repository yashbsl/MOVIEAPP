import React from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";

const Trending = () => {
  const navigate = useNavigate();
  return (
    <div className="p-[3%] w-screen h-screen">
      <div className="w-full flex items-center  ">
        <h1 className="w-[20%] text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <Topnav className />
        <Dropdown title="Category" options={["movie", "tv", "all"]} func=" " />
        <div className="w-[2%]"></div>
        <Dropdown title="Duration" options={["week", "day"]} func=" " />
      </div>
    </div>
  );
};

export default Trending;

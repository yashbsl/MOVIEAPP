import React from "react";
import { Link } from "react-router-dom";

function Topnav() {
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
      <i class="text-2xl text-zinc-400 ri-search-2-line"></i>
      <input
        className="text-zinc-200 outline-none border-none w-[50%] mx-10 p-2 text-xl bg-transparent"
        type="text"
        placeholder="search anything"
      />
      <i class="text-2xl text-zinc-400 ri-close-fill"></i>
      <div className=" absolute w-[50%] h-[50vh] bg-red-100 top-[90%]">
        <Link>
        <img src="" alt="" />
        <span> Hello everyone</span>
        </Link>
      </div>
    </div>
  );
}

export default Topnav;

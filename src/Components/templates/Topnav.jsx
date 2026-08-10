import React, { useState } from "react";
import { Link } from "react-router-dom";

function Topnav() {
  const [query, setquery] = useState("")

  console.log(query);
  
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
      <i class="text-2xl text-zinc-400 ri-search-2-line"></i>
      <input
      onChange={(e)=>setquery(e.target.value)}
      value={query}
        className="text-zinc-200 outline-none border-none w-[50%] mx-10 p-2 text-xl bg-transparent"
        type="text"
        placeholder="search anything"
      /> 
      {query.length>0 &&  <i onClick={()=>setquery("")} className="text-2xl text-zinc-400 ri-close-fill"></i>  }
      <div className=" absolute w-[50%] h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
        <Link className="hover:text-black hover:bg-zinc-300 duration-500 font-semibold text-zinc-600 w-[100%] p-8 flex justify-start items-center border-b border-zinc-100">
        <img src="" alt="" />
        <span> Hello everyone</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-500 font-semibold text-zinc-600 w-[100%] p-8 flex justify-start items-center border-b border-zinc-100">
        <img src="" alt="" />
        <span> Hello everyone</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-500 font-semibold text-zinc-600 w-[100%] p-8 flex justify-start items-center border-b border-zinc-100">
        <img src="" alt="" />
        <span> Hello everyone</span>
        </Link>
        <Link className="hover:text-black hover:bg-zinc-300 duration-500 font-semibold text-zinc-600 w-[100%] p-8 flex justify-start items-center border-b border-zinc-100">
        <img src="" alt="" />
        <span> Hello everyone</span>
        </Link>
      </div>
    </div>
  );
}

export default Topnav;

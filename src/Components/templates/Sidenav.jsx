import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from '../../utils/axios'

function Sidenav() {

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">

      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        DB
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">

        <h1 className="text-white font-semibold text-xl mt-10 mb-3">
          New Feeds
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="ri-bard-fill mr-2"></i>
          Popular
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="ri-tv-fill mr-2"></i>
          Tv Shows
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="ri-team-fill mr-2"></i>
          People
        </Link>

      </nav>

      <hr className="border-none h-[0.3%] mt-5 mb-5 bg-zinc-400" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">

        <h1 className="text-white font-semibold text-xl mb-3">
          Website Information
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="ri-info-card-fill mr-2"></i>
          About Us
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="ri-contacts-fill mr-2"></i>
          Contact Us
        </Link>

      </nav>

    </div>
  );
}

export default Sidenav;
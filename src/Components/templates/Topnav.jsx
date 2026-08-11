import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from  "/noimages.jpeg"

function Topnav() {
  const [query, setquery] = useState("");

  const [searches, setsearches] = useState([]);
  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);

  return (
    <div className="w-[70%] h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i className="text-2xl text-zinc-400 ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="text-zinc-200 outline-none border-none w-[50%] mx-10 p-2 text-xl bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-2xl text-zinc-400 ri-close-fill"
        ></i>
      )}
      <div className=" absolute w-[60%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-500 font-semibold text-zinc-600 w-[100%] p-8 flex justify-start items-center border-b border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover-rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;

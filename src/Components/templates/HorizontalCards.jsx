import React from "react";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data }) => {
  return (
    <div>
      <div className="w-[100%] mb-5 p-5 flex h-[40vh] overflow-y-hidden overflow-x-auto">
        {data.map((d, i) => (
          <div
            key={i}
            className="relative group min-w-[15%] h-full mr-5 overflow-hidden rounded-md cursor-pointer"
          >
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`}
              alt=""
            />

            <div className="absolute inset-0 bg-black/80 p-3 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-xl font-black text-white">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="mt-2 text-sm text-white">
                {d.overview?.slice(0, 100)}...
                <span className="text-blue-400"> more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;

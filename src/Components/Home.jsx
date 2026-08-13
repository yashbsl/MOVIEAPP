import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import { data } from "react-router-dom";

function Home() {
  document.title = "MovieApp | Home";
  const [wallpaper, setwallpaper] = useState(null);
  const [Trending, setTrending] = useState(null)

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata = data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error:", error);
    }
  };

    const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };  
  useEffect(() => { 
    !wallpaper && GetHeaderWallpaper();
    !Trending && GetTrending();
  }, []);
  // console.log(Trending);

  return wallpaper && Trending ? (
    <>
      <Sidenav />

      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCards data={Trending}/>
      </div>
    </>
  ): <h1>Loading</h1>
}

export default Home;

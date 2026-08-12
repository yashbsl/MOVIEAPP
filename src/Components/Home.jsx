import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";

function Home() {
  document.title = "MovieApp | Home";
  const [wallpaper, setwallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata = data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => { 
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return wallpaper? (
    <>
      <Sidenav />

      <div className="w-[80%] h-full">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ): <h1>Loading</h1>
}

export default Home;

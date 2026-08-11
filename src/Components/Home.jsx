import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";

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
  console.log(wallpaper);

  useEffect(() => { 
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return (
    <>
      <Sidenav />

      <div className="w-[80%] h-full">
        <Topnav />
      </div>
    </>
  );
}

export default Home;

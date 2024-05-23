import React from "react";
// import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
// import { TiMicrophone } from "react-icons/ti";
// import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
// import { IoAppsSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex justify-between item-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50 ">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

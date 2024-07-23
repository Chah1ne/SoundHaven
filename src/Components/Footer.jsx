import {Link} from "react-router-dom";
import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white">
      <div className="wrapper flex flex-col gap-20 pb-10">
        <div className="mobile-footer flex pt-10 justify-between">
          <div className="description flex flex-col gap-[2rem] basis-[50%]">
            <h2 className="text-[35px]">SoundHaven</h2>
            <p className="text-gray-400">
            SoundHaven is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.
            </p>
          </div>
        </div>
        <div className="copyright flex justify-between">
          <p className="text-gray-400">Copyright 2021. All Rights Reserved.</p>
          <div className="icons flex gap-5 text-2xl transition-[all 0.3s]">
            <BsTwitter className="hover:text-blue-400 cursor-pointer" /> 
            <BsInstagram className="hover:text-red-400 cursor-pointer" /> 
            <BsFacebook className="hover:text-blue-400 cursor-pointer" /> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

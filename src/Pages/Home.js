import React from "react";
import About from "../Components/About"
import Footer from "../Components/Footer"
import { Link } from "react-router-dom";
import Category from "../Components/Category"; 
import zx9 from "../assets/home/desktop/image-speaker-zx9.png"; 
import yx1 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";

export default function Home() {
  return (
    <>
    
    <div className="Main">
      <div className="hero-section h-screen text-white">
        <div className="wrapper">
          <div className="hero-product-info translate-y-44 flex flex-col gap-8">
            <h3 className="text-gray-400 border-l-rose-50 tracking-[1rem] text-[1.2rem]">
              New product
            </h3>
            <h1>XX99 Mark II Headphones</h1>
            <p className="text-gray-400 w-[27rem]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link to="/headphones/3">
              <button>See product</button>
            </Link>
          </div>
        </div>
      </div>
      <Category />
      <div className="featured-products wrapper p-4">
        <div className="zx9-speaker flex px-8 overflow-hidden mb-12 pt-[5rem]">
          <img alt="" src={zx9} className="mb-[-1rem]" width={500} height={500} />
          <div className="flex flex-col justify-center basis-[130%]">
            <div className="info w-[60%] m-auto flex flex-col gap-4">
              <h1 className="text-white">ZX9 Speaker</h1>
              <p className="text-white">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link to="/speakers/1">
                <button className="bg-black">See product</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="zx7-speaker flex items-center">
          <div className="info p-5 flex flex-col gap-6">
            <h1 className="text-5xl font-normal">ZX7 Speaker</h1>
            <Link to="/speakers/2">
              <button className="button2">See product</button>
            </Link>
          </div>
        </div>
        <div className="yx1-earphone flex gap-10 mt-10 mb-10">
          <div className="image basis-[50%]">
            <img alt="" src={yx1} className="rounded w-full" />
          </div>
          <div className="info flex flex-col justify-center gap-6 basis-[50%] bg-[#f1f1f1] rounded w-full">
            <h1 className="text-5xl font-normal mx-10">YX1 Earphones</h1>
            <Link to="/earphones/6">
              <button className="button2 mx-10">See product</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
    <About />
    
    </>
  );
}

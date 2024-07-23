import React from "react";
import aboutImg from "../assets/shared/desktop/image-best-gear.jpg";

const About = () => {
  return (
    <div className="wrapper">
      <div className="about flex gap-[10%]">
        <div className="info basis-[50%] flex flex-col gap-10 justify-center">
          <h1 className="uppercase">
            Bringing you the <span className="text-orange-400">best</span> audio gear
          </h1>
          <p className="opacity-[0.7]">
            Located at Tunis - Tunisia, SoundHaven is the premier store for high-end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make SoundHaven the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="image mb-10">
          <img alt="" src={aboutImg} className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default About;

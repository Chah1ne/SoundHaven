import React from "react";
import { Link } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";

import headphoneImg from "../assets/cart/image-xx99-mark-two-headphones.jpg";
import earphoneImg from "../assets/cart/image-yx1-earphones.jpg";
import speakerImg from "../assets/cart/image-zx7-speaker.jpg";

const Category = () => {
  return (
    <div className="wrapper">
      <div className="categories flex justify-evenly mt-6rem mb-6rem mx-[-20px]">
        <div className="card">
          <img
            alt="Headphones"
            src={headphoneImg}
            width={"50%"}
            height={"50%"}
          />
          <h2>Headphones</h2>
          <Link to="/products/headphones" className="flex items-center gap-1">
            <p className="text-gray-400">Shop</p>
            <BiRightArrow className="text-gray-400" />
          </Link>
        </div>
        <div className="card">
          <img
            alt="Earphones"
            src={earphoneImg}
            width={"50%"}
            height={"50%"}
          />
          <h2>Earphones</h2>
          <Link to="/products/earphones" className="flex items-center gap-1">
            <p className="text-gray-400">Shop</p>
            <BiRightArrow className="text-gray-400" />
          </Link>
        </div>
        <div className="card">
          <img
            alt="Speakers"
            src={speakerImg}
            width={"50%"}
            height={"50%"}
          />
          <h2>Speakers</h2>
          <Link to="/products/speakers" className="flex items-center gap-1">
            <p className="text-gray-400">Shop</p>
            <BiRightArrow className="text-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;

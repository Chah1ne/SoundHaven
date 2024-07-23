import {Link} from "react-router-dom";
import React from "react";

const ProductCard = ({ name, image, desc, path }) => {
  return (
    <div className="item-card flex gap-[10%] mb-10">
      <div className="images basis-[40%]">
        <img src={image} alt={name} />
      </div>
      <div className="info basis-[60%] flex items-center">
        <div className="hero-product-info flex flex-col gap-8">
          <h1>{name}</h1>
          <p className="text-gray-400 w-[27rem]">{desc}</p>
          <Link to={`/${path}`}>
            <button>see product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };

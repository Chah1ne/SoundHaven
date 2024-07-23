import React, { useEffect, useState } from "react";
import Data from "../Database/data.json";
import { ProductCard } from "./ProductCard";
import { useParams } from "react-router";

const Display = () => {
  const { type } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (type === "headphones") {
      setData(Data.headphones);
    } else if (type === "speakers") {
      setData(Data.speakers);
    } else if (type == "earphones") {
      setData(Data.earphones);
    }
  }, [type]);

  return (
    <>
      <div className="headphones h-[40vh] bg-[#191919] text-white mb-20">
        <h1 className="uppercase text-center pt-[20vh]">{type}</h1>
      </div>
      <div className="wrapper">
        <div>
          {data.map((value) => (
            <ProductCard
              key={value.id}
              name={value.name}
              image={value.image}
              desc={value.desc}
              path={`${type}/${value.id}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Display;

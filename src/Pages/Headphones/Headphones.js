import React, { useEffect, useState } from "react";
import Product from "../../Components/Product";
import { useParams } from "react-router";
import Data from "../../Database/data.json";

const Headphones = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    if (id) {
      Data.headphones.some((value) => {
        if (value.id == id) setData(value);
      });
      console.log(data);
    }
  }, [id]);

  return <>{data && <Product data={data} type={"headphones"} />}</>;
};

export default Headphones;

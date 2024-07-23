import React, { useEffect, useState } from "react";
import Data from "../../Database/data.json"
import { useParams } from "react-router";
import Product from "../../Components/Product";

const Earphones = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    if (id) {
      Data.earphones.some((value) => {
        if (value.id == id) setData(value);
      });
    }
  }, [id]);

  return <>{data && <Product data={data} type={"earphones"} />}</>;
};

export default Earphones;

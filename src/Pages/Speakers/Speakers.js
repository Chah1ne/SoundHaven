import React, { useEffect, useState } from "react";
import Data from "../../Database/data.json"
import { useParams } from "react-router";
import Product from "../../Components/Product";

const Speakers = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      Data.speakers.some((value) => {
        if (value.id == id) setData(value);
      });
    }
  }, [id]);

  return <>{data && <Product data={data} type={"speakers"} />}</>;
};

export default Speakers;

import React from "react";
import { useGetProductByIdQuery } from "./app/service/dummyData";

const SpecificProduct = () => {
  const response = useGetProductByIdQuery(5);
  console.log(response);
  return <div>SpecificProduct</div>;
};

export default SpecificProduct;

import React from "react";
import { useGetAllProductsQuery } from "./app/service/dummyData";

const ShowAllProducts = () => {
  const response = useGetAllProductsQuery();
  const { isError, isLoading, data } = response;
  if (isError) <h2>Server Error</h2>;

  console.log(response);
  return (
    <div>
      {data?.products.map((item) => (
        <>
          <h3 key={item.id}>{item.title}</h3>
          <p>{item.description}</p>
        </>
      ))}
    </div>
  );
};

export default ShowAllProducts;

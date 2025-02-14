import React from "react";
import { useUpdateProductMutation } from "./app/service/dummyData";

const UpdateProduct = () => {
  const [updateProduct, { data, isError }] = useUpdateProductMutation();
  console.log(useUpdateProductMutation())

  if (isError) <h1>Error</h1>;

  const handleUpdate = async () => {
    try {
      const updatedProductData = {
        title: "Updated producttttt",
      };
      await updateProduct({ id: 2, newUpdateProduct: updatedProductData })
    } catch (error) {}
  };
  return (
    <div>
      <h1>UpdateProduct</h1> <h3>{data?.title}</h3>
      <button onClick={handleUpdate}>Update Data</button>
    </div>
  );
};

export default UpdateProduct;

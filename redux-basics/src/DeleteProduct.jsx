import React from "react";
import { useDeleteProductMutation } from "./app/service/dummyData";

const DeleteProduct = () => {
  console.log(useDeleteProductMutation());
  const [deleteProduct, { isError, data }] = useDeleteProductMutation();

  const handleDelete = async () => {
    await deleteProduct(1);
  };
  return (
    <div>
      <h2>DeleteProduct</h2>
      {data && <h3>{data?.title} got deleted</h3>}

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteProduct;

import React from "react";
import { useAddNewProductsMutation } from "./app/service/dummyData";

const AddNewProduct = () => {
  const res = useAddNewProductsMutation();
  console.log(res);
  const [addNewProduct, {data, isError, isLoading}] = res;
  const handleAddProduct = async () => {
    try {
        const newProduct = {
            id:1, 
            title: "New products from us", 
            description: "this is a random descripton that is being added and no worries"
        }
        await addNewProduct(newProduct)
    } catch (error) {
        
    }
  };
  return (
    <div>
      <h1>AddNewProduct</h1>
      <h2>{data?.id}</h2>
      <h2>{data?.title}</h2>
      <h2>{data?.description}</h2>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddNewProduct;

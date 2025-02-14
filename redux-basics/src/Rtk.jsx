import React from "react";
import ShowAllProducts from "./ShowAllProducts";
import SpecificProduct from "./SpecificProduct";
import AddNewProduct from "./AddNewProduct";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

const Rtk = () => {
  return (
    <>
      <h1>Rtk Query </h1>
      <div>
        {/* <ShowAllProducts/> */}
        {/* <SpecificProduct /> */}
        {/* <AddNewProduct /> */}
        {/* <UpdateProduct/> */}
        <DeleteProduct/>
      </div>
    </>
  );
};

export default Rtk;

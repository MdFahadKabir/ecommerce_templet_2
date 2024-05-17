import React from "react";
import ProductDetails from "../../_component/ProductDetails";

const page = ({ params }) => {
  return (
    <div>
      <ProductDetails product_id={params.slug}></ProductDetails>
    </div>
  );
};

export default page;

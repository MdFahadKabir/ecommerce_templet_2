import React from "react";
import Image from "next/image";

const CategoryCard = ({ product }) => {
  return (
    <div>
      <div className="max-w-xs w-32 lg:w-64 mx-auto ">
        <Image
          className="object-cover lg:h-[250px] lg:w-[700px] p-4"
          src={product.image}
          width={500}
          height={500}
          alt="Product image"
        />
        <div className="p-2 text-center">
          <p className="mb-3  font-bold">{product.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
"use client"

import Image from "next/image";
import { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
    
    const [mainImage, setMainImage] = useState(productMedia[0])

  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      <Image
        src={mainImage}
        alt="product"
        width={500}
        height={500}
        className="w-96 h-96 rounded-lg shadow-xl object-cover"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="product"
            height={200}
            width={200}
            className={`h-20 w-20 rounded-lg object-cover cursor-pointer ${mainImage === image ? "border-2 border-blue-500" : ""}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

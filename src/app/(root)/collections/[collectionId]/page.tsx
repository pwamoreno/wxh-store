import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/action";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const CollectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={CollectionDetails.image}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2 ">{CollectionDetails.title}</p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">{CollectionDetails.description}</p>
      <div className="flex flex-wrap gap-16 mx-auto ">
        {CollectionDetails.products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic"

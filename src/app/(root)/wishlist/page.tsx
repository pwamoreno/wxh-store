"use client";

import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { getProductDetails } from "@/lib/actions/action";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [wishlist, setWishlist] = useState<ProductType[] | null>(null);

  const getUser = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setSignedInUser(data);
      setLoading(false);
    } catch (error) {
      console.log("[users_GET]", error);
    }
  };

  useEffect(() => {
    if(user){
        getUser()
    }
  }, [user])

//   console.log(signedInUser)

const getWishlistProducts = async() => {
    setLoading(true)

    if(!signedInUser) return;

    const wishlistProduct = await Promise.all(signedInUser.wishlist.map(async(productId) => {
        const res = await getProductDetails(productId)
        
        return res
    }))

    setWishlist(wishlistProduct)
    setLoading(false)
}

useEffect(() => {
    if(signedInUser){
        getWishlistProducts()
    }
}, [signedInUser])

const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser)
}

  return loading ? <Loader /> : (
   <div className="px-10 py-5">
    <p className="text-heading3-bold my-10">Your Wishlist</p>
    {wishlist?.length === 0 && (
        <p>No items in your wishlist</p>
    )}

    <div className="flex flex-wrap justify-center gap-16">
        {wishlist?.map((product) => (
            <ProductCard key={product._id} product={product} updateSignedInUser={updateSignedInUser}/>
        ))}
    </div>
   </div>
);
};

export default Wishlist;

export const dynamic = "force-dynamic"
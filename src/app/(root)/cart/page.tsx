"use client";

import { useUser } from "@clerk/nextjs";
import useCart from "@/lib/hooks/useCart";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const cart = useCart();
  const { user } = useUser();

  // console.log(user)

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };
  /**
   * The way to access the email value from clerk is this:
   * user?.emailAddresses[0].emailAddress
   * You can log it to see the current user email
   * console.log(user?.emailAddresses[0].emailAddress)
   */

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("/sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({
            cartItems: cart.cartItems,
            customer,
          }),
        });
        const data = await res.json();
        window.location.href = data.data.authorization_url
        // window.location.href = data.url;
        // console.log(data.data.authorization_url);
      }
    } catch (error) {
      console.log("[checkout_POST]", error);
    }
  };

  function addCommasToNumbers(number: number) {
    //convert number to string
    let numString = number.toString();

    //use regex to add commas to the string representation of the number
    numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numString;
  }

  return (
    <div className="flex gap-20 py-16 px-10 justify-center max-lg:flex-col">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Shopping Cart</p>
        <hr className="my-6" />

        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold">No items in cart</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div
                key={cartItem.item._id}
                className="flex w-full max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-6 py-5 justify-between items-center max-sm:items-start"
              >
                <div className="flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    alt="product"
                    width={100}
                    height={100}
                    className="rounded-lg w-32 h-32 object-cover"
                  />

                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    {cartItem.color && (
                      <p className="text-small-medium">{cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-small-medium">{cartItem.size}</p>
                    )}
                    {cartItem.item.price && (
                      <p className="text-small-medium">
                        {addCommasToNumbers(cartItem.item.price)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-blue-400 cursor-pointer"
                    onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-blue-400 cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                </div>

                <Trash
                  className="hover:text-red-400 cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
        <p className="text-heading4-bold pb-4">
          Summary{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? `items` : `item`
          })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold">
          <span>Total: </span>
          <span>₦{addCommasToNumbers(totalRounded)}</span>
        </div>
        <button
          className="border rounded-lg text-body-bold bg-transparent py-3 w-full hover:bg-black hover:text-white"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

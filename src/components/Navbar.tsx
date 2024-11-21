"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter();
  const { user } = useUser();

  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [query, setQuery] = useState("");

  const cart = useCart();

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="/">
        <Image src="/logomark-black.svg" alt="logo" width={50} height={25} />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link href="/" className={`hover:text-blue-400 ${pathname === "/" && "text-blue-400"}`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:text-blue-400 ${pathname === "/about" && "text-blue-400"}`}
        >
          About
        </Link>
        <Link
          href={user ? "/shop" : "/sign-in"}
          className={`hover:text-blue-400 ${pathname === "/shop" && "text-blue-400"}`}
        >
          Shop
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`hover:text-blue-400 ${pathname === "/wishlist" && "text-blue-400"}`}
        >
          Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-blue-400 ${pathname === "/orders" && "text-blue-400"}`}
        >
          Orders
        </Link>
      </div>

      <div className=" flex gap-3 border border-green-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px]"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button disabled={query === ""} onClick={() => router.push(`/search/${query}`)}>
          <Search className="cursor-pointer h-4 w-4 hover:text-blue-400" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropDownMenu(!dropDownMenu)}
        />

        {dropDownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href={user ? "/shop" : "/sign-in"}
              className="hover:text-blue-400"
            >
              Shop
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-blue-400"
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-blue-400"
            >
              Orders
            </Link>
            {/* <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
            </Link> */}
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

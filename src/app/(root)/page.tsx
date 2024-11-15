import Brands from "@/components/Brands";
import HomeDetails from "@/components/HomeDetails";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedOut>
        {/* <SignInButton /> */}
        <HomeDetails />
        <Brands />
      </SignedOut>
      <SignedIn>
        <HomeDetails />
        <Brands />
      </SignedIn>
    </>
  );
}

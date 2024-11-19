import About from "@/components/About";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import HomeDetails from "@/components/HomeDetails";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedOut>
        {/* <SignInButton /> */}
        <HomeDetails />
        <About />
        <Brands />
        <Footer />
      </SignedOut>
      <SignedIn>
        <HomeDetails />
        <About />
        <Brands />
        <Footer />
      </SignedIn>
    </>
  );
}

export const dynamic = "force-dynamic";

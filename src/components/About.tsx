import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="py-10">
      <div className="flex items-center justify-center max-sm:flex-col">
        <div className="flex flex-col items-center justify-center">
          <p className="px-10 py-6 lg:max-w-[600px] md:max-w-[600px] sm:max-w-[500px] max-sm:px-2">
            Wanni and Handi Danbaki, collectively known as WannixHandi, are a
            powerhouse DJ duo from Kaduna, Nigeria. Born on December 10, 1996,
            in Lagos State, the twins have made an indelible mark in the
            entertainment industry, becoming celebrated figures in music,
            television, and digital media. With their electrifying DJ
            performances, seamless transitions, and infectious energy,
            they&#39;ve captured the hearts of audiences both locally and
            globally.
          </p>
          <Link href="/about" className="border border-black p-3 rounded-lg hover:bg-black hover:text-white">Read More</Link>
        </div>
        <Image
          src="/wxh6.JPG"
          alt="wannixhandi"
          width={350}
          height={150}
          className="rounded-lg md:max-w-[60%] max-sm:max-w-[80%] md:pt-5 max-sm:pt-4"
        />
      </div>
    </div>
  );
};

export default About;

"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Brands = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;

    function scrollAnimation() {
      if (!scroll) return;

      const innerScroll = scroll.querySelector(".loop-scroll");

      if (!innerScroll) return;

      if (innerScroll.getAttribute("data-cloned") === "true") return;

      const innerScrollChildren = Array.from(innerScroll.children);

      innerScrollChildren.forEach((item) => {
        const duplicateddLogos = item.cloneNode(true) as HTMLElement;
        // duplicateddLogos.setAttribute("aria-hidden", true)

        innerScroll.appendChild(duplicateddLogos);
      });

      innerScroll.setAttribute("data-cloned", "true");
    }

    scrollAnimation();
  }, []);

  return (
    <div className="pt-8">
      <h1 className="text-heading2-bold text-center pb-5">
        Brands we have worked with
      </h1>
      <div className="flex items-center justify-center">
        <div
          ref={scrollRef}
          className="scroll flex flex-wrap items-center max-w-[1200px] py-4"
        >
          <div className="flex flex-wrap gap-4 space-x-16 loop-scroll animate-loop-scroll">
            <Image
              src="/Budweiser.svg"
              alt="Budweiser"
              width={100}
              height={100}
            />
            <Image
              src="/Desperados.svg"
              alt="Desperados"
              width={100}
              height={100}
            />
            <Image
              src="/Femme-Fest.svg"
              alt="Femme-Fest"
              width={100}
              height={100}
            />
            <Image
              src="/Guinness.svg"
              alt="Guinness"
              width={100}
              height={100}
            />
            <Image
              src="/Heineken.svg"
              alt="Heineken"
              width={100}
              height={100}
            />
            <Image src="/Martell.svg" alt="Martell" width={100} height={100} />
            <Image src="/Spotify.svg" alt="Spotify" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-8">
        <div className="max-w-screen-md md:w-2xl">
          <p className="px-10">
            Wanni x Handi have rapidly established themselves as influential
            figures in the global music and entertainment industry, renowned for
            their unique sound and electrifying performances. Their exceptional
            talent and dynamic stage presence have captured the attention of
            leading brands, resulting in high-profile collaborations that
            highlight their charisma and energy. Notable brands that have
            partnered with Wanni x Handi include Spotify, Heineken, Desperados,
            Martell, Budweiser, Smirnoff, Guinness, and Femme Fest. In addition,
            they have held residencies at prestigious clubs, further
            establishing their reputation as vibrant and innovative performers.<br/>
            These collaborations highlight the trust and recognition they have
            earned for seamlessly aligning with brand identities, delivering
            unmatched energy, and solidifying their status as influential
            tastemakers. Their partnerships have also amplified their impact
            within the music industry, cementing their position as dynamic
            leaders in the field. Beyond their performances, Wanni x Handi are
            deeply committed to championing women in music. <br/>Through their
            platform, they actively support and uplift fellow female artists,
            advocating for diversity and inclusivity across the entertainment
            landscape. Their dedication to these causes underscores their role
            as trailblazers, using their influence to inspire change and foster
            empowerment within the industry and beyond. Wanni x Handi&#39;s journey
            exemplifies the perfect blend of talent, passion, and purpose,
            making them a force to be reckoned with in both music and
            entertainment.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;

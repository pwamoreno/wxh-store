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
            <strong>WannixHandi</strong> have swiftly
            established themselves as prominent figures in the music and
            entertainment industry, thanks to their unique sound and electric
            performances. Their dynamic presence has caught the attention of
            leading brands, resulting in exciting collaborations that showcase
            their talent and charisma.{" "}
            <strong>
              <em>Heineken, Desperados, Martell, Budweiser, and Guinness</em>{" "}
            </strong>
            have all recognized the vibrant energy that these twin sisters bring
            to the table, making them perfect ambassadors for their brands.
          </p>
          <p className="pt-3 px-10">
            With <strong><em>Spotify</em></strong>, Wanni and Handi have taken their love for music to the
            next level, curating playlists that resonate with their fans while
            promoting emerging artists. Their partnership allows them to connect
            with a broader audience, sharing their passion for music while
            highlighting the sounds that inspire them. This collaboration not
            only solidifies their status as influential DJs but also enhances
            their role as tastemakers in the industry.
          </p>
          <p className="pt-3 px-10">
            At{" "}
            <strong>
              <em>Femme Fest</em>
            </strong>
            , Wanni and Handi have embraced their platform to champion women in
            music, using their influence to empower and uplift fellow female
            artists. Their involvement in such initiatives reflects their
            commitment to promoting diversity and inclusivity within the
            entertainment landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;

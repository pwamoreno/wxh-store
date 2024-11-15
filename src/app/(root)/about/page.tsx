import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <Image
        src="/wxhabout.png"
        alt="wannixhandi"
        width={1500}
        height={500}
        className="rounded-lg"
      />
      <div className="flex flex-col items-center max-w-[1500px] max-sm:w-[450px] max-md:w-[700px]">
        <p className="text-heading1-bold py-5 max-sm:text-heading3-bold">Let&#39;s Oparate!</p>
        <p className="px-10">
          Meet Wanni and Handi, the dynamic twin duo who have taken the world of
          music and entertainment by storm! Fresh off their electrifying stint
          on the reality TV show Big Brother Naija, these vibrant sisters have
          captured the hearts of fans with their infectious energy, playful
          banter, and undeniable talent as DJs. Known for their signature
          catchphrase, “Oparation!” Wanni and Handi are all about living life to
          the fullest and spreading joy wherever they go.
        </p>
        <p className="px-10 py-5">
          As they navigate their newfound fame, the sisters embark on a
          whirlwind journey filled with music festivals, exclusive DJ gigs, and
          exciting collaborations. From their lively performances that make the
          crowd dance to their hilarious antics behind the turntables, Wanni and
          Handi are not just entertainers; they are a force of nature.
        </p>

        <p className="px-10">
          Join Wanni and Handi in this exhilarating tale of sisterhood,
          self-discovery, and the power of music as they prove that together,
          they can conquer anything. With their infectious laughter, vibrant
          personalities, and a beat that makes you want to dance, it&#39;s time
          to turn up the volume and embrace the rhythm of life.
        </p>
        <p className="py-5">So, are you ready? “Let&#39;s oparate!”</p>
      </div>
    </div>
  );
};

export default About;

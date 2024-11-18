import Image from "next/image";
import Footer from "@/components/Footer"

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 py-8 max-md:py-4 max-sm:py-2">
      <Image
        src="/wxhabout.png"
        alt="wannixhandi"
        width={1500}
        height={500}
        className="rounded-lg"
      />
      <div className="flex flex-col items-center max-w-[1500px] max-sm:w-[350px] max-md:w-[700px]">
        <p className="text-heading1-bold py-5 max-sm:text-heading3-bold">
          Let&#39;s Oparate!
        </p>
        <div className="flex items-center md:flex-col max-md:flex-col max-sm:flex-col">
          <div className="flex flex-col items-center justify-center">
            <p className="px-10 lg:max-w-[800px] md:max-w-[600px] sm:max-w-[500px] max-sm:px-2">
              Wanni and Handi Danbaki, collectively known as WannixHandi, are a
              powerhouse DJ duo from Kaduna, Nigeria. Born on December 10, 1996,
              in Lagos State, the twins have made an indelible mark in the
              entertainment industry, becoming celebrated figures in music,
              television, and digital media. With their electrifying DJ
              performances, seamless transitions, and infectious energy,
              they&#39;ve captured the hearts of audiences both locally and
              globally.
            </p>
            <p className="px-10 max-w-[500px] lg:max-w-[800px] md:max-w-[600px] sm:max-w-[500px] max-sm:px-2 pt-4">
              Raised by a father from Kaduna and a mother from Delta State,
              Wanni and Handi&#39;s multicultural background has shaped their
              diverse approach to music and entertainment. They both attended
              Ahmadu Bello University in Zaria, where they studied Mass
              Communication. During their time in university, the twins
              showcased their talents in multiple areas, including dancing,
              singing, and sports, but it was their shared love for music that
              ultimately led them to pursue careers as DJs. Their bond as twins
              has always been their greatest strength an unbreakable connection
              that began even before birth and has fuelled their success in the
              competitive world of entertainment. Together, they&#39;ve tackled
              every challenge with unwavering determination, creating an
              unstoppable force in Nigeria&#39;s entertainment scene.
            </p>
          </div>
          <Image
            src="/wxh0.jpg"
            alt="wannixhandi"
            width={650}
            height={300}
            className="rounded-lg md:max-w-[60%] max-sm:max-w-[80%] md:pt-5"
          />
        </div>
      </div>
      <div 
        className="bg-no-repeat bg-cover bg-center bg-blend-darken bg-black bg-opacity-50 w-full h-[40vh] flex flex-col justify-center mb-12 max-sm:h-[14vh] max-sm:bg-cover"
           style={{ backgroundImage: "url('/wxhabout2.png')" }}
      >
        <h1 className="text-white text-center pt-5 text-base-bold">
          FROM MTVBASE TO THE DJ SCENE
        </h1>
      </div>
      <div>
        <div className="flex items-center max-sm:flex-col px-10">
          <div>
            <p className="px-10 max-w-[500px] md:px-5 max-sm:px-2">
              In 2016, Wanni and Handi reached a major milestone as Top 4
              finalists in the highly competitive MTV Base VJ Search, a platform
              that propelled them into the national spotlight. Their unique
              energy, charisma, and confidence made them stand out, but it was
              their transition to DJing that truly solidified their place in the
              entertainment world. After graduating, the twins began their
              professional careers as TV presenters at Linda Ikeji Television,
              hosting the popular celebrity gossip show, Rumor Has It, their
              natural chemistry and engaging presence made them attract
              attention on the small screen. However, it was the music industry
              that truly captured their hearts. Combining their vibrant
              personalities with their DJ skills, they formed WannixHandi,
              quickly becoming a sought-after act in the Nigerian entertainment
              scene.
            </p>
          </div>
          <Image
            src="/wxh3.jpg"
            alt="wannixhandi"
            width={350}
            height={200}
            className="rounded-lg"
          />
        </div>

        <div className="flex items-center pt-11 max-sm:flex-col-reverse px-10">
          <Image
            src="/wxh2.jpg"
            alt="wannixhandi"
            width={350}
            height={200}
            className="rounded-lg"
          />

          <div>
            <p className="px-10 max-w-[500px] md:px-5 max-sm:px-2">
              Beyond music and TV presenting, Wanni and Handi have expanded
              their talents to acting. They starred in the Africa Magic TV
              series, Unbroken, demonstrating their versatility as entertainers.
              In addition, they&#39;ve built a strong digital presence,
              leveraging their background in digital marketing to connect with
              their fans and promote their brand. Their ability to blend
              creativity and business savvy has made them influential figures in
              the entertainment industry. scene.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[url('/wxhabout3.png')] bg-no-repeat bg-cover bg-center bg-blend-darken bg-black bg-opacity-50 w-full h-[40vh] flex flex-col justify-center mb-12 max-sm:h-[14vh] max-sm:bg-cover">
        <h1 className="text-white text-center pt-5 text-base-bold">
          RISING STARS IN THE ENTERTAINMENT WORLD
        </h1>
      </div>
      <div>
        <div className="flex items-center max-sm:flex-col px-10">
          <div>
            <p className="px-10 max-w-[500px] md:px-5 max-sm:px-2">
              Wanni and Handi&#39;s music sets are renowned for blending
              Afrobeats with contemporary sounds, captivating audiences across
              Nigeria and beyond. Their energy-filled DJ performances, combined
              with impeccable choreography, have earned them a loyal fanbase, as
              well as opportunities to perform at some of the biggest events in
              the country. They have worked with notable brands like Heineken,
              Chivas Regal, Spotify, Grants, and Budweiser, solidifying their
              status as brand ambassadors and top-tier entertainers. Their rise
              to fame reached new heights when they competed in Big Brother
              Naija Season 9, where their vibrant personalities and undeniable
              chemistry won over the hearts of fans. Wanni emerged as the first
              runner-up, further cementing their position as leading
              entertainers in Nigeria.
            </p>
          </div>
          <Image
            src="/wxh1.jpg"
            alt="wannixhandi"
            width={350}
            height={200}
            className="rounded-lg"
          />
        </div>

        <div className="flex items-center pt-11 px-10 max-sm:flex-col-reverse">
          <Image
            src="/wxh5.jpg"
            alt="wannixhandi"
            width={350}
            height={200}
            className="rounded-lg"
          />

          <div>
            <p className="px-10 max-w-[500px] md:px-5 max-sm:px-2">
              Throughout their journey, Wanni and Handi have proven that talent,
              dedication, and the power of sisterhood are the keys to success.
              Their story is one of resilience, passion, and the unwavering
              belief that together, they can conquer any challenge. Whether
              it&#39;s through their DJ sets, television appearances, acting
              roles, or digital campaigns, WannixHandi continue to leave a
              lasting impression on the entertainment industry. With their
              magnetic energy, versatile talents, and strong fan connection,
              Wanni and Handi are sure to remain at the forefront of Nigerian
              entertainment for years to come
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;

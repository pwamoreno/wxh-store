import Image from "next/image";

const HomeDetails = () => {
  return (
    <div className="bg-[url('/wxhbanner.png')] bg-no-repeat bg-cover bg-center bg-blend-darken bg-black bg-opacity-50 h-[75vh] flex flex-col justify-center mb-12 max-sm:mb-2 max-sm:h-[14vh] max-sm:bg-cover">
      <Image
        src="/logo.svg"
        alt="banner"
        width={400}
        height={150}
        className="mx-auto max-sm:w-[45vw]"
      />
      <h1 className="text-white text-center pt-5 text-base-bold ">
        Let&#39;s Oparate: The Twin Beat
      </h1>
    </div>
  );
};

export default HomeDetails;

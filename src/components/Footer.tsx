import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex border border-black justify-between py-8 px-40 max-sm:flex-col max-sm:px-20 max-sm:items-center">
      <p>&#169; Copyright 2024, WannixHandi</p>
      <div className="flex">
        <Link
          href="https://www.instagram.com/wannixhandi?igsh=MWFpdjFlZWJpYnN5Mg=="
          target="_blank"
          className="p-2 hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:text-white"
        >
          <FaInstagram size={20}/>
        </Link>
        <Link
          href="https://x.com/wannixhandi?s=21"
          target="_blank"
          className="p-2 hover:bg-black hover:text-white"
        >
          <FaXTwitter size={20}/>
        </Link>
        <Link
          href="https://www.tiktok.com/@wannixhandistar?_t=8rUtiyRftSL&_r=1"
          target="_blank"
          className="p-2 hover:bg-black hover:text-white"
        >
          <FaTiktok size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

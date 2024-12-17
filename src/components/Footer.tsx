import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex border border-black justify-between py-8 px-40 max-sm:flex-col max-sm:px-20 max-sm:items-center">
      <p>&#169; Copyright 2024, WannixHandi</p>
      <p>Contact us at: iwantwannixhandi@gmail.com</p>
      <div className="flex">
        <Link
          href="https://www.instagram.com/wannixhandi?igsh=MWFpdjFlZWJpYnN5Mg=="
          target="_blank"
          className="p-2 hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:text-white"
        >
          <FaInstagram size={20}/>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100074646602635&mibextid=LQQJ4d"
          target="_blank"
          className="p-2 hover:bg-[#316ff6] hover:text-white"
        >
          <FaFacebookF size={20}/>
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
        <Link
          href="https://youtube.com/@moreofwanniandhandi?si=mwN8T_ks2_aETepD"
          target="_blank"
          className="p-2 hover:bg-red-500 hover:text-white"
        >
          <FaYoutube size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

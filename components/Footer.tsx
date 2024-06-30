import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.png";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="mt-32 w-full bg-teal-700 flex flex-col">
      <div className="flex items-start lg:flex-row flex-col lg:px-20 md:px-8 px-4 py-16 gap-4">
        <div className="basis-1/3 text-wrap">
          <Link href="/" className="">
            <Image src={logo} alt="Logo" />
          </Link>
          <p className="text-white mt-8 pr-2 text-[14px]">
            Since the world is wide and life is short, start exploring it with
            Ghumakkad Soul! Their exceptional guides and breathtaking trails
            made my trekking experience unforgettable.
          </p>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-col lg:ml-8 font-bold text-white">
            <h1 className="mb-4">Contact Us</h1>

            <p className="flex items-center font-medium justify-normal gap-2">
              <Phone size={17} />
              +91 9912345678
            </p>
            <p className="flex mt-4 font-medium items-center justify-normal gap-2">
              <Mail size={17} />
              info@ghumakkadsoul.in
            </p>
            <p className="flex mt-4 font-medium items-center justify-normal gap-2">
              <MapPin size={17} />
              Dehradun, India
            </p>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-col lg:ml-8 mt-4 lg:mt-0 text-white">
            <h1 className="text-lg font-semibold mb-4">Quick Link</h1>
            <ul>
              <li>
                <Link href="/" className=" font-semibold tex-[16px] mt-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className=" font-semibold tex-[16px] mt-2">
                  Treks
                </Link>
              </li>
              <li>
                <Link href="/" className=" font-semibold tex-[16px] mt-2">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/" className=" font-semibold tex-[16px] mt-2">
                  Contect Us
                </Link>
              </li>
              <li>
                <Link href="/studio" className=" font-semibold tex-[16px] mt-2">
                  Studio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/3 lg:mt-0 mt-4">
          <h1 className="text-lg font-bold text-white">Follow Us</h1>
          <div className="flex items-center justify-normal gap-4 lg:mt-12 mt-4">
            <Link
              href=""
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Instagram className="text-teal-700" />
            </Link>
            <Link
              href=""
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Twitter className="text-teal-700" />
            </Link>
            <Link
              href=""
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Facebook className="text-teal-700" />
            </Link>
            <Link
              href=""
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Youtube className="text-teal-700" />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full border-dotted bg-white lg:my-12 my-6" />
      <div className="mb-4 flex items-center lg:flex-row md:flex-row flex-col gap-3 justify-between px-4 text-white">
        <Link href="">Design and Managed by</Link>
        <Link href="" className="text-wrap text-center">
          ©2024 ghumakkadsoul.in All rights reserved
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

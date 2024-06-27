"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AlignRight, Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearch } from "@/hooks/use-search";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavLink {
  title: string;
  url: string;
}

interface NavbarData {
  logoUrl: string;
  navLinks: NavLink[];
}

async function getNav(): Promise<NavbarData> {
  const query = `
    *[_type == "navbar"][0]{
      "logoUrl": logo.asset->url,
      navLinks[]{
        title,
        url
      }
    }
  `;
  const data = await client.fetch(query);
  return data;
}

const Navbar: React.FC = () => {
  const [navbarData, setNavbarData] = useState<NavbarData | null>(null);
  const { onOpen } = useSearch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNav();
        setNavbarData(data);
      } catch (error) {
        console.error("Failed to fetch navbar data:", error);
      }
    };
    fetchData();
  }, []);

  if (!navbarData) return <NavbarSkeleton />;

  return (
    <nav className="w-full h-[80px] relative">
      <div className="md:hidden lg:hidden w-full h-full shadow-sm flex items-center justify-between bg-teal-700 px-4">
        <div className="w-[150px]">
          {navbarData.logoUrl && (
            <Link href="/">
              <Image
                src={navbarData.logoUrl}
                alt="Logo"
                width={0}
                height={0}
                className="object-contain w-full h-full"
              />
            </Link>
          )}
        </div>
        <div className="flex items-center justify-center gap-4">
          <Search className="text-white" onClick={onOpen} />
          <Sheet>
            <SheetTrigger>
              <AlignRight className="text-white" />
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-32">
                <ul className="flex items-center justify-center flex-col space-y-6 ">
                  {navbarData.navLinks.map((link) => (
                    <Link
                      href={link.url}
                      key={link.url}
                      className=" font-semibold text-[#222] text-[18px]"
                    >
                      {link.title}
                    </Link>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="w-full md:fixed lg:fixed hidden h-[80px] bg-[#fff] backdrop-blur-lg shadow-sm lg:flex md:flex items-center justify-between">
        <div className="h-full relative bg-teal-700 lg:w-[30%] w-[40%] flex items-center justify-normal px-8 lg:px-20 py-7 rounded-tr-[135px] rounded-br-[135px]">
          {navbarData.logoUrl && (
            <Link href="/">
              <Image
                src={navbarData.logoUrl}
                alt="Logo"
                width={0}
                height={0}
                className="object-contain w-full h-full"
              />
            </Link>
          )}
        </div>
        <div className="flex items-center justify-center lg:px-20 px-8">
          <ul className="flex lg:space-x-14 space-x-6 ">
            {navbarData.navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.url}
                className=" font-semibold text-[#222] text-[18px]"
              >
                {link.title}
              </Link>
            ))}
            <div className="bg-red-400 w-[100%] absolute "></div>
            <Search className="cursor-pointer" onClick={onOpen} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export function NavbarSkeleton() {
  return (
    <Skeleton className="w-full h-[80px]">
      <div className="flex items-center justify-between md:hidden lg:hidden h-full px-4">
        <Skeleton className="w-[150px] h-[50px] bg-slate-300" />
        <Skeleton className="w-[50px] h-[50px] bg-slate-300" />
      </div>
      <div className="md:flex lg:flex hidden items-center justify-between">
        <div className="w-[30%] h-[80px] flex items-center justify-center px-20">
          <Skeleton className="w-[200px] h-[50px] bg-slate-400" />
        </div>
        <div className="flex items-center justify-center gap-14 px-20">
          <Skeleton className="w-[60px] h-[30px] bg-slate-400" />
          <Skeleton className="w-[60px] h-[30px] bg-slate-400" />
          <Skeleton className="w-[60px] h-[30px] bg-slate-400" />
          <Skeleton className="w-[60px] h-[30px] bg-slate-400" />
        </div>
      </div>
    </Skeleton>
  );
}

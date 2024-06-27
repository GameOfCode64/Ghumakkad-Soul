"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearch } from "@/hooks/use-search";

// Define types for the fetched data
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
      <div className="w-full fixed h-[80px] bg-[#fff] backdrop-blur-lg shadow-sm flex items-center justify-between">
        <div className="h-full relative bg-teal-700 w-[30%] flex items-center justify-normal px-20 rounded-tr-[135px] rounded-br-[135px]">
          {navbarData.logoUrl && (
            <Image
              src={navbarData.logoUrl}
              alt="Logo"
              width={200}
              height={200}
              className="object-contain "
            />
          )}
        </div>
        <div className="lg:flex hidden items-center justify-center px-20">
          <ul className="flex space-x-14 relative">
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
      <div className="flex items-center justify-between">
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

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { PortableText } from "next-sanity";
import getfullblogs from "@/sanity/lib/querys/getfullblog";
import NotFound from "@/app/(client)/blogs/[slug]/not-found";
import { urlForImage } from "@/sanity/lib/image";
import { Metadata } from "next";

interface Params {
  params: {
    slug: string;
  };
}

interface BlogProps {
  _id: string;
  title: string;
  slug: string;
  author: string;
  authorimage: string;
  blogbgimage: string;
  time: string;
  excerpt: string;
  body: any;
  publishedAt: string;
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  return {
    title: `${params?.slug}`,
    description: `Blog Post About | ${params?.slug}`,
    icons: {
      icon: "./favicon.ico",
    },
    openGraph: {
      title: `${params?.slug}`,
      description: `Blog Post About | ${params?.slug}`,
      type: "website",
      locale: "en_IN",
      url: `https://localhost:3000/blogs/${params?.slug}`,
      siteName: "Ghumakkadsoul",
    },
  };
}

const Page = async ({ params }: Params) => {
  const data: BlogProps = await getfullblogs(params?.slug);
  if (!data) {
    return <NotFound />;
  }

  return (
    <div className="my-12 lg:px-20 md:px-12 px-4">
      <div className="flex flex-col">
        <div className="w-full lg:h-[80dvh] h-[50dvh] rounded-3xl">
          <Image
            src={data?.blogbgimage}
            width={700}
            height={500}
            alt="Blog_Banner"
            className="w-full h-full rounded-3xl object-fill"
          />
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-[50px] h-[50px]">
                <Image
                  src={data.authorimage}
                  alt="author_image"
                  width={50}
                  height={50}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-teal-700">{data.author}</p>
                <span className="text-sm font-semibold">
                  {new Date(data?.publishedAt).toDateString()}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href=""
                className="lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] text-[20px] md:text-[24px] lg:text-[24px] bg-teal-700 text-white rounded-full flex items-center justify-center"
              >
                <Instagram />
              </Link>
              <Link
                href=""
                className="lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] text-[20px] md:text-[24px] lg:text-[24px] bg-teal-700 text-white rounded-full flex items-center justify-center"
              >
                <Linkedin />
              </Link>
              <Link
                href=""
                className="lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] text-[20px] md:text-[24px] lg:text-[24px] bg-teal-700 text-white rounded-full flex items-center justify-center"
              >
                <Facebook />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <h1 className="font-bold text-[20px] lg:text-[30px] text-teal-700">
              {data.title}
            </h1>
            <p className="mt-4 font-medium lg:w-[90%]">{data.excerpt}</p>
            <div className={BlogStyle}>
              <PortableText
                value={data?.body}
                components={myPortableTextComponents}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogStyle = `prose prose-teal mt-8 text-justify lg:max-w-[90%] md:max-w-[90%] max-w-full prose-headings:text-left prose-p:text-left prose-p:w-full prose-headings:text-2xl prose-headings:text-teal-700 prose-p:mb-5 prose-img:my-5 prose-a:text-teal-700 prose-blockquote:italic prose-blockquote:pl-4 prose-blockquote:border-l-4 prose-blockquote:border-teal-700`;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
    ),
  },
};

export default Page;

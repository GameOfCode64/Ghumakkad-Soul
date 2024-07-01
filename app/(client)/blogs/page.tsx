"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import getblogs from "@/sanity/lib/querys/getblogs";
import { BlogSkel } from "@/components/BlogSkel";

interface BlogsProps {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: string;
  authorimage: string;
  blogbgimage: string;
  time: string;
  excerpt: string;
}

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blogs, setBlogs] = useState<BlogsProps[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setisLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const getdata = async () => {
      try {
        setisLoading(true);
        const data = await getblogs();
        setisLoading(false);
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);
  if (isLoading) {
    return <BlogSkel />;
  }

  return (
    <div className="w-full">
      <div className="lg:px-20 md:px-12 px-4">
        <h1 className="mt-8 text-center w-full  text-teal-700 font-extrabold text-[35px]">
          Blogs
        </h1>
        <div className="h-1 bg-teal-700 mt-3 rounded-3xl" />
      </div>
      <div>
        <div className="lg:px-20 md:px-8 px-1">
          <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 w-full lg:gap-16 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex items-center justify-start flex-col h-[550px] p-4"
              >
                <div className="w-full lg:h-[70%] h-[50%]">
                  <Image
                    src={blog.blogbgimage}
                    width={500}
                    height={500}
                    className="w-full h-full rounded-3xl object-cover"
                    alt="blog_image"
                  />
                </div>
                <div className="flex flex-col mt-3 w-full px-2">
                  <Link href={`/blogs/${blog.slug.current}`}>
                    <h1 className="font-bold text-teal-700">{blog.title}</h1>
                  </Link>
                  <p className="text-sm mt-2 text-gray-700">{blog.excerpt}</p>
                  <div className="flex items-center justify-start mt-4 gap-4">
                    <div className="w-[50px] h-[50px]">
                      <Image
                        src={blog.authorimage}
                        height={50}
                        width={50}
                        alt="author_image"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-teal-700">
                        {blog.author}
                      </h1>
                      <p className="font-semibold">
                        Reading Time:{" "}
                        <span className="font-semibold text-teal-700">
                          {blog.time} min
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

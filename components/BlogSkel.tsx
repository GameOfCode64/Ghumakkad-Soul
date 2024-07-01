import { Skeleton } from "@/components/ui/skeleton";

export function BlogSkel() {
  return (
    <div className="mt-32 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
      <div className="flex flex-col lg:px-20 md:px-12 px-4">
        <Skeleton className="lg:w-[550px] h-[350px] w-full md:w-[350px] rounded-3xl" />
        <Skeleton className="lg:w-[550px] h-[30px] w-full md:w-[350px] mt-4" />
        <Skeleton className="lg:w-[550px] h-[30px] w-full md:w-[350px] my-4" />
      </div>
      <div className="flex flex-col lg:px-20 md:px-12 px-4">
        <Skeleton className="lg:w-[550px] h-[350px] w-full md:w-[350px] rounded-3xl" />
        <Skeleton className="lg:w-[550px] h-[30px] w-full md:w-[350px] mt-4" />
        <Skeleton className="lg:w-[550px] h-[30px] w-full md:w-[350px] my-4" />
      </div>
    </div>
  );
}

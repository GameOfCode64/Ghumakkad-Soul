"use client";
import { z } from "zod";
import React, { useEffect, useState } from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Custominput, { BookingFormeSchema } from "@/components/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import getTrekName from "@/sanity/lib/querys/getalltrekname";
import { useRouter } from "next/navigation";
import { usebook } from "@/hooks/book-now";

interface BookingFomrProps {
  _id: string;
  trekName: string;
}

const BookingForm = () => {
  const { onClose } = usebook();
  const router = useRouter();
  const [trekname, setTrekname] = useState<BookingFomrProps[]>([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await getTrekName();
      setTrekname(data);
    };
    fetchdata();
  }, []);
  const form = useForm<z.infer<typeof BookingFormeSchema>>({
    resolver: zodResolver(BookingFormeSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof BookingFormeSchema>) => {
    try {
      setisLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        onClose();
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setisLoading(false);
      router.push("/submit");
    }
  };
  return (
    <div className="w-full flex flex-col  space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <Custominput
            control={form.control}
            placeholder="Full Name"
            name="fullName"
          />
          <Custominput
            control={form.control}
            placeholder="Email Addres"
            name="email"
          />
          <Custominput
            control={form.control}
            placeholder="Phone Number"
            name="phoneNumber"
          />
          <FormField
            control={form.control}
            name="trekName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="focus:ring-1 focus:ring-teal-700">
                      <SelectValue placeholder="Select...." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {trekname.map((trek, index) => (
                          <SelectItem key={index} value={trek.trekName}>
                            {trek.trekName}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about your Role"
                    className="resize-none focus-visible:ring-teal-700"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-white mt-4 w-full font-semibold py-6 bg-teal-700 hover:bg-teal-600"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2Icon className="animate-spin mr-2" /> Sending...
              </>
            ) : (
              <> Send Message</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;

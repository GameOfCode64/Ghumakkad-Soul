"use client";
import React, { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Toast } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { usepop } from "@/hooks/contact-pop-up";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import travel from "@/public/traveling.svg";
const BookingForm = () => {
  const { onOpen } = usepop();

  const [isLoading, setisLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    trekName: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setisLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Email sent successfully",
          description: "Our Team Will Connect you Soon 😊",
        });
        setisLoading(false);
        onOpen();
      } else {
        toast({
          title: "Failed to send message.",
          description: "Try Again After Some Time",
        });
      }
    } catch (error) {
      Toast({
        title: `${error}`,
      });
    }
  };
  return (
    <div className="flex items-center justify-center h-full lg:px-20 md:px-12 px-4">
      <div className="w-full flex justify-between bg-[#f5f7f7] rounded-3xl shadow-md lg:px-12 md:px-12 px-6 py-16">
        <div className="lg:flex md:flex hidden flex-col basis-[40%]">
          <h1 className="text-3xl font-bold">Book Your Favorite ❤️ Trek</h1>
          <div className="mt-16">
            <div className="w-[350px]">
              <Image src={travel} alt="contact-us" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="lg:basis-[45%] md:basis-[45%] w-full flex flex-col">
          <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              name="fullName"
              placeholder="Full Name"
              className="py-6 focus-visible:ring-teal-700 w-full"
              required
              onChange={handleChange}
            />
            <Input
              name="email"
              placeholder="Email Address"
              className="py-6 focus-visible:ring-teal-700"
              required
              type="email"
              onChange={handleChange}
            />
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              className="py-6 focus-visible:ring-teal-700"
              onChange={handleChange}
            />
            <Input
              name="trekName"
              placeholder="Trek Name"
              className="py-6 focus-visible:ring-teal-700"
              onChange={handleChange}
            />
            <Textarea
              name="message"
              placeholder="Message"
              className="focus-visible:ring-teal-700"
              required
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="text-white font-semibold py-6 bg-teal-700 hover:bg-teal-600"
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
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

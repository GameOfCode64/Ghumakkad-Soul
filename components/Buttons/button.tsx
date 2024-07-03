"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { usebook } from "@/hooks/book-now";

const BookBtn = () => {
  const { onOpen } = usebook();
  return (
    <Button
      className="w-full bg-teal-600 hover:bg-teal-700"
      onClick={() => onOpen()}
    >
      Book Now
    </Button>
  );
};

export default BookBtn;

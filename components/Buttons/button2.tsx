"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { usebook } from "@/hooks/book-now";

const Btn2 = () => {
  const { onOpen } = usebook();
  return (
    <Button
      className="w-[120px] mt-4 bg-teal-600 hover:bg-teal-700"
      onClick={() => onOpen()}
    >
      Book Now
    </Button>
  );
};

export default Btn2;

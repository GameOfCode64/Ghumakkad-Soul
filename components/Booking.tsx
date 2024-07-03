"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { usebook } from "@/hooks/book-now";
import BookingForm from "./BookingForm";

const Booking = () => {
  const { isOpen, onClose, onOpen } = usebook();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-8 text-center text-teal-700 font-bold text-2xl">
          Book Now
        </DialogTitle>
        <div className="w-full px-4 mt-8">
          <BookingForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Booking;

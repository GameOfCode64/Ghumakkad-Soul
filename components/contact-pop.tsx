"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { usepop } from "@/hooks/contact-pop-up";
import { Button } from "./ui/button";

const ContactPop = () => {
  const { isOpen, onClose, onOpen } = usepop();
  function popup() {
    window.location.reload();
  }
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-8 text-center font-bold text-teal-700">
          Message Sent Successfully
        </DialogTitle>
        <div className="my-6 text-center font-semibold text-3xl">
          Our Team Will Connect you Soon 😊
        </div>
        <DialogFooter>
          <Button
            onClick={() => popup()}
            className="bg-teal-700 text-white font-semibold"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPop;

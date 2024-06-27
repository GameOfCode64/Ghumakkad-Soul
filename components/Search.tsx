"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSearch } from "@/hooks/use-search";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  const { isOpen, onClose, onOpen } = useSearch();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-8">Search</DialogTitle>
        <div className="w-full h-[50px]">
          <Input
            placeholder="Search for Treks"
            className="w-full h-full border-none "
          />
        </div>
        <DialogFooter>
          <Button className=" bg-teal-900 hover:bg-teal-800">Search</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Search;

import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

export const BookingFormeSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  trekName: z.string(),
  message: z.string(),
});

interface CustominputProps {
  control: Control<z.infer<typeof BookingFormeSchema>>;
  name: FieldPath<z.infer<typeof BookingFormeSchema>>;
  placeholder: string;
}

const Custominput = ({ control, name, placeholder }: CustominputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="my-4 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-teal-700 rounded-mdprim-input"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Custominput;

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

export const CommentFormeSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  message: z.string(),
});

interface CustominputProps {
  control: Control<z.infer<typeof CommentFormeSchema>>;
  name: FieldPath<z.infer<typeof CommentFormeSchema>>;
  placeholder: string;
}

const CommentInput = ({ control, name, placeholder }: CustominputProps) => {
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
              required
              className="my-6 w-full focus:ring-[#FF0000] focus-visible:ring-1 focus-visible:ring-teal-700 rounded-mdprim-input"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CommentInput;

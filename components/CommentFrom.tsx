"use client";
import React, { useState } from "react";
import CommentInput, { CommentFormeSchema } from "@/components/CommentInpu";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const CommentFrom = ({ trekId }: { trekId: string }) => {
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<z.infer<typeof CommentFormeSchema>>({
    resolver: zodResolver(CommentFormeSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof CommentFormeSchema>) => {
    try {
      setisLoading(true);
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trekId, ...values }),
      });
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setisLoading(false);
      window.location.reload();
    }
  };

  return (
    <div className="lg:w-[900px] w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <CommentInput
            name="fullName"
            placeholder="Full Name"
            control={form.control}
          />
          <CommentInput
            name="email"
            placeholder="Email Address"
            control={form.control}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormControl>
                  <Textarea
                    placeholder="Your Review...."
                    className="resize-none focus-visible:ring-teal-700"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="lg:w-auto mt-4 w-full bg-teal-700 hover:bg-teal-600">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 animate-spin" /> Loading...
              </>
            ) : (
              <>Submit Review</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CommentFrom;

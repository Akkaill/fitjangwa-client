"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import { useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(3, { message: "At least 3 characters" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(8).max(15, { message: "Too much character" }),
  phone: z.string().min(10).max(10),
  address: z.string().min(8).max(500),
});
const Registerform = () => {
  const { refresh, push } = useRouter();
  // const searchParams = useSearchParams();
  // const redirect = searchParams.get("redirect") || "/";
  const checkForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
  });
  async function HandleForm(data: z.infer<typeof formSchema>) {
    const res = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (res.ok) {
      toast.success("Thanks for joining us");
      push("/login");
      refresh();
    } else {
      toast.error("something went wrong with your fields");
    }
    console.log(data);
  }

  return (
    <Form {...checkForm}>
      <form onSubmit={checkForm.handleSubmit(HandleForm)}>
        <FormField
          control={checkForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Fill in ur name" {...field} type="text" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={checkForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Fill in ur email correctly"
                  {...field}
                  type="email"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={checkForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Fill in ur email correctly"
                  {...field}
                  type="password"
                />
              </FormControl>
            </FormItem>
          )}
        />{" "}
        <FormField
          control={checkForm.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Fill in ur email correctly"
                  {...field}
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={checkForm.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Fill in ur address correctly"
                  {...field}
                  id="Address"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Register</Button>
      </form>
    </Form>
  );
};

export default Registerform;

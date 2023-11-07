"use client";
import React, { useEffect, useRef } from "react";
import useAuth from "@/hook/use-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useSearchParams } from "next/navigation";
const formSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(8).max(15, { message: "Too much character" }),
});
const LoginForm = () => {
  const { login, logout } = useAuth();
  const { refresh, push } = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const checkForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handlesubmit(data: z.infer<typeof formSchema>) {
    login(data.email, data.password)
      .then(() => {
        toast.success("Welcome");
        push(redirect);
        refresh();
      })
      .catch((e) => {
        toast.error("You must to register first");
        console.log(e);
      });

    console.log(data);
  }
  return (
    <Form {...checkForm}>
      <form onSubmit={checkForm.handleSubmit(handlesubmit)}>
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
                  placeholder="Fill in ur password correctly"
                  {...field}
                  type="password"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;

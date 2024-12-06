"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/auth-schema";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

const signUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password, name } = values;
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        role: "users",
      },
      {
        onRequest: (ctx) => {
          setLoading(true);
        },
        onSuccess: (ctx) => {
          setLoading(false);
          form.reset();
          toast({
            title: "Success",
            description: "You account have been created.",
          });
          redirect("/sign-in");
        },
        onError: (ctx) => {
          setLoading(false);
          toast({
            title: "Error",
            description: ctx.error.message,
            variant: "destructive",
          });
        },
      }
    );
  }

  return (
    <Card className='w-full max-w-xs'>
      <CardHeader>
        <CardTitle>
          <h3 className='text-lg font-bold'>Create account</h3>
        </CardTitle>
        <CardDescription>Create Your superior account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Jhon Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='jhon@email.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='your password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={loading} type='submit' className='w-full'>
              {loading && <Loader2 className='animate-spin' />}
              Submit
            </Button>
            <div className='flex w-full justify-center'>
              <p className='text-xs font-sans text-center'>
                Already have account.?{" "}
                <Link href='/sign-in' className='text-blue-900 font-semibold'>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className='flex justify-between'></CardFooter>
    </Card>
  );
};

export default signUpPage;

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
import { signInSchema } from "@/lib/auth-schema";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";

const page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const { email, password } = values;

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: (ctx) => {
          setLoading(true);
        },
        onSuccess: (ctx) => {
          console.log(ctx.data.user.role);

          setLoading(false);
          form.reset();
          toast({
            title: "Success",
            description: "You account have been created.",
          });
          if (ctx.data.user.role == "admin") {
            redirect("/dashboard");
          } else {
            redirect("/me");
          }
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
          <h3 className='text-lg font-bold'>Login to Superior</h3>
        </CardTitle>
        <CardDescription>Login to access your content</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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
              LOGIN
            </Button>
            <div className='flex w-full justify-center'>
              <p className='text-xs font-sans text-center'>
                Don't have account yet.?{" "}
                <Link href='/sign-up' className='text-blue-900 font-semibold'>
                  Register
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

export default page;

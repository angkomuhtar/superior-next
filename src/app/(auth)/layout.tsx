import Image from "next/image";
import React from "react";
import logolight from "@/../public/images/logo-light.png";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
        <header className='sticky top-0 z-[999] flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark'>
          <div className='flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10 container mx-auto'>
            <div>
              <Image
                src={logolight}
                alt='logo'
                height={45}
                width={100}
                className='dark:hidden'
              />
            </div>
          </div>
        </header>
        <main>
          <div className='container mx-auto flex justify-center items-center h-[calc(100vh-100px)]'>
            {children}
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default AuthLayout;

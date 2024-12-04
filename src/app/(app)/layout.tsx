import Image from "next/image";
import React from "react";
import logolight from "@/../public/images/logo-light.png";
import { Button } from "@/components/ui/button";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
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
            <div className='flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal'>
              <Button variant='outline'>Button</Button>
            </div>
          </div>
        </header>
        <main>
          <div className='container mx-auto p-4 md:p-6 2xl:p-10'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

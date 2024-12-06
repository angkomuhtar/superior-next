import Image from "next/image";
import React from "react";
import logolight from "@/../public/images/logo-light.png";
import { Button } from "@/components/ui/button";
import { DropdownProfile } from "@/components/admin/profil-dropdown";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className='flex h-screen overflow-hidden'>
      <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
        <header className='sticky top-0 z-10 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark'>
          <div className='flex flex-grow items-center justify-between px-4 shadow-2 md:px-5 2xl:px-10 container mx-auto space-x-20'>
            <div className='flex items-center'>
              <Link href='/'>
                <Image
                  src={logolight}
                  alt='logo'
                  height={45}
                  width={100}
                  className='dark:hidden'
                />
              </Link>
            </div>
            <div className='flex-1 flex justify-between items-center'>
              <nav className=''>
                <ul className='flex items-center gap-x-8 font-semibold'>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='/'
                      className='hover:text-sky-500 dark:hover:text-sky-400'>
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/blog'>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='hover:text-sky-500 dark:hover:text-sky-400'
                      href='/showcase'>
                      Showcase
                    </a>
                  </li>
                </ul>
              </nav>
              {session ? (
                <DropdownProfile data={session.user} />
              ) : (
                <div className='flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal'>
                  <Link href='/sign-in'>
                    <Button className='bg-blue-500 hover:bg-blue-500'>
                      Login
                    </Button>
                  </Link>
                </div>
              )}
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

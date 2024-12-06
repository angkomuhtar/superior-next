import { DropdownProfile } from "@/components/admin/profil-dropdown";
import SidebarMenu from "@/components/sidebar-menu";
import { auth } from "@/lib/auth";
import { Icon } from "@iconify/react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
const Adminlayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className='flex h-screen overflow-hidden'>
      <aside className='absolute left-0 top-0 z-99 flex h-screen w-72 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0'>
        <div className='flex items-center justify-between gap-2 px-6 py-5'>
          <a href='/'>
            <img
              alt='Logo'
              className='dark:hidden object-contain h-10 aspect-auto'
              src='/images/logo-light.png'
            />
          </a>
          <button className='block lg:hidden'>
            <svg
              className='fill-current'
              width='20'
              height='18'
              viewBox='0 0 20 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z'
                fill=''></path>
            </svg>
          </button>
        </div>
        <SidebarMenu />
      </aside>
      <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
        <header className='sticky top-0 z-10 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark'>
          <div className='flex flex-grow items-center justify-between px-4 shadow-2 md:px-5 2xl:px-10'>
            <div>
              <h1 className='mb-0.5 text-heading-5 font-bold text-dark dark:text-white'>
                Dashboard
              </h1>
              <p className='font-light text-xs'>Dashboard admin</p>
            </div>
            <div className='flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal mx-5 '>
              <DropdownProfile data={session?.user} />
            </div>
          </div>
        </header>
        <main>
          <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Adminlayout;

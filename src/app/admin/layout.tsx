import { DropdownProfile } from "@/components/admin/profil-dropdown";
import React from "react";
const Adminlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <aside className='absolute left-0 top-0 z-99 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 -translate-x-full'></aside>
      <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
        <header className='sticky top-0 z-999 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark'>
          <div className='flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10'>
            <div>
              <h1 className='mb-0.5 text-heading-5 font-bold text-dark dark:text-white'>
                Dashboard
              </h1>
              <p className='font-light text-xs'>Dashboard admin</p>
            </div>
            <div className='flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal'>
              <DropdownProfile />
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

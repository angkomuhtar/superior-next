"use client";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const router = usePathname();
  const navLinks = [
    {
      href: "/dashboard",
      label: "dashboard",
      icon: "solar:home-2-linear",
    },
    {
      href: "/soal",
      label: "Soal",
      icon: "solar:bill-check-linear",
    },
  ];

  console.log(router);

  const isActive = (path: string) => router === path;

  return (
    <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
      <nav className='mt-1 px-4 lg:px-6'>
        <div>
          <h3 className='mb-5 text-sm font-medium text-dark-4 dark:text-dark-6'>
            Dashboard
          </h3>
          <ul className='mb-6 flex flex-col gap-1'>
            {navLinks.map((data) => (
              <li key={data.href}>
                <Link
                  className={`text-black group hover:bg-blue-500/10 ${
                    isActive(data.href) && "bg-blue-100"
                  }  relative flex items-center gap-3 rounded-[7px] p-3 font-medium duration-100 ease-in-out`}
                  href={data.href}>
                  <Icon icon={data.icon} />
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SidebarMenu;

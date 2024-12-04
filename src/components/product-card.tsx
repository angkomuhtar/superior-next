import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BellRing, Check, ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type CardProps = React.ComponentProps<typeof Card>;

const ProductCard = ({ className, ...props }: CardProps) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative'>
      <a href='#'>
        <img
          className='rounded-t-lg w-full aspect-auto object-cover'
          src='https://nextui.org/images/hero-card-complete.jpeg'
          alt=''
        />
      </a>
      <Badge className='absolute top-2 left-2 bg-red-500'>CAT</Badge>
      <div className='p-5'>
        <h5 className='font-bold tracking-tight text-gray-900 dark:text-white leading-tight'>
          TRY OUT SKD 2024 PART 16
        </h5>
        <p className='font-semibold text-xs'>110 soal</p>
      </div>
      <div className='px-5 flex items-end'>
        <div className='relative'>
          <h5 className='text-base font-bold font-inter'>Rp. 2.000</h5>
          <Badge
            variant='destructive'
            className='text-[8px] p-0.5 absolute -top-1 -right-6 font-bold'>
            50%
          </Badge>
        </div>
        <p className='font-light text-xs pl-8 line-through'>Rp. 4.000</p>
      </div>
      <div className='flex justify-between w-full p-5 gap-4'>
        <Button variant='outline' className='flex-1'>
          Chart
          <ShoppingCart />
        </Button>
        <Button className='flex-1 bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border'>
          Beli <ShoppingBag />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

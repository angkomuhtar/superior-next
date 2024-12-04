import ProductCard from "@/components/product-card";
import Image from "next/image";

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 relative min-h-[calc(95vh-150px)] overflow-x-hidden'>
      <div className="absolute -z-10 left-0 -top-40 bottom-0 w-screen bg-[url('/images/looper-pattern.svg')] bg-contain bg-repeat bg-top"></div>
      <section className='grid grid-cols-2 gap-4 py-40'>
        <div className='leading-8 md:leading-10 md:text-left font-sans'>
          <div className='inline-block'>
            <h1 className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl'>
              Jadikan&nbsp;
            </h1>
            <h1 className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl text-primary-500'>
              Belajarmu&nbsp;
            </h1>
          </div>
          <h1 className='tracking-tight inline font-bold text-[2.5rem] lg:text-5xl'>
            Mudah dan Menyenangkan Bersama Superior
          </h1>
        </div>
        <div></div>
      </section>
      <section className='flex flex-col items-center justify-center'>
        <div className='w-3/5'>
          <h1 className='font-inter font-semibold text-[2.5rem] text-center'>
            Popular Course
          </h1>
          <p className='text-center text-md font-sans '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus vitae voluptatum temporibus corporis exercitationem
            consectetur. A odit voluptatibus quam, beatae similique labore
            earum, vitae ipsa architecto magni voluptas ad sed?
          </p>
        </div>
        <div className='grid grid-cols-4 py-16 px-6 gap-6 items-center'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </section>
  );
}

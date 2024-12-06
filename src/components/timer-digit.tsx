import React from "react";

const TimerDigit = ({ time, label }: { time: string; label?: string }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='bg-blue-500 flex justify-center items-center rounded-md p-2'>
        <h1 className='font-inter text-3xl font-semibold text-white'>{time}</h1>
      </div>
      <h3 className='font-semibold text-sm mt-2 capitalize'>{label}</h3>
    </div>
  );
};

export default TimerDigit;

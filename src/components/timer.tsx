import React, { useEffect, useRef, useState } from "react";
import TimerDigit from "./timer-digit";

interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DDTHH:mm:ss' - The target date and time for the countdown timer.
  labels: string[];
}

const calculateTimeLeft = (targetDate: Date): number[] => {
  const target = targetDate.getTime();
  const now = new Date().getTime();
  const difference = target - now;

  return difference > 0
    ? [
        Math.floor((difference / (1000 * 60 * 60)) % 24), // Hours
        Math.floor((difference / (1000 * 60)) % 60), // Minutes
        Math.floor(difference / 1000) % 60, // Seconds
      ]
    : [0, 0, 0]; // zeros instead of undefined or null
};

const Timer = ({ targetDate, labels }: CountdownTimerProps) => {
  const [timeLeft, setTimerLeft] = useState(
    calculateTimeLeft(new Date(targetDate))
  ); // State to hold the time left until the target date.
  const [hasMounted, setHasMounted] = useState(false); // State to track if the component has mounted.
  const prevTimeLeft = useRef(timeLeft);

  useEffect(() => {
    setHasMounted(true); // Set hasMounted to true when the component mounts.

    if (hasMounted) {
      // Update the time left at every second interval.
      const interval = setInterval(() => {
        setTimerLeft(calculateTimeLeft(new Date(targetDate)));
        prevTimeLeft.current = timeLeft;
      }, 1000);

      // Clean up the interval when the component unmounts.
      return () => clearInterval(interval);
    }
  }, [targetDate, hasMounted, timeLeft]);

  if (!hasMounted) return <div>Loading....</div>; // Display a loading message if the component has not yet mounted.

  return (
    <div className='flex justify-center gap-4 py-3'>
      {timeLeft.map((num, index) => (
        <TimerDigit
          key={index}
          time={String(num).padStart(2, "0")}
          label={labels[index]}
        />
      ))}
    </div>
  );
};

export default Timer;

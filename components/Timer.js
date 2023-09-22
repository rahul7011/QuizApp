import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { timeUpdate } from "../src/timeSlice";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  // Function to calculate time left in minutes and seconds
  const calculateTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return {
      minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
      seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
    };
  };

  useEffect(() => {
    // Set up a timer to decrement timeLeft every second
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const time = calculateTimeLeft();
  const dispatch = useDispatch();

  if (timeLeft == 0) {
    // If timeLeft reaches 0, dispatch a timeUpdate action
    dispatch(timeUpdate(true));
  }
  return (
    <div className="text-center mt-9 px-3 mb-1 rounded-md border-4 bg-opacity-60 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-2xl lg:text-3xl sm:text-3xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold ">Time Left</h1>
      <div className="text-2xl lg:text-4xl sm:text-4xl md:text-4xl xl:text-4xl 2xl:text-4xl font-extrabold">
        {time.minutes}:{time.seconds}
      </div>
    </div>
  );
}

export default Timer;

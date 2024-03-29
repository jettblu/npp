"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer(params: { date: string }) {
  const [time, setTime] = useState<number>(Date.parse(params.date));
  const [newTime, setNewTime] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();

      var difference = time - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);
  return (
    <div className="max-w-xl mx-auto">
      <div className="mx-auto w-fit text-3xl text-yellow-400 font-semibold my-6 flex flex-row space-x-8">
        <div className="flex-cols w-fit">
          <div className="rounded-md p-2  w-fit">
            {days < 10 ? `0${days}` : days}
          </div>
          <p className="text-sm text-gray-500 text-center font-regular">Days</p>
        </div>
        <div className="flex-cols w-fit">
          <div className="rounded-md p-2 w-fit">
            {hours < 10 ? `0${hours}` : hours}
          </div>
          <p className="text-sm text-gray-500 text-center font-regular">
            Hours
          </p>
        </div>
        <div className="flex-cols w-fit">
          <div className="rounded-md p-2 w-fit">
            {seconds < 10 ? `0${seconds}` : seconds}
          </div>
          <p className="text-sm text-gray-500 text-center font-regular">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
}

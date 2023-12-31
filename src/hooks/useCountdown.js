import { useEffect, useState } from "react";

function useCountdown(targetDate) {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
}

const getReturnValues = (countDown) => {
  // calculate time left
  const days = String(Math.floor(countDown / (1000 * 60 * 60 * 24))).padStart(2,'0');
  const hours = String(Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,'0')
  const seconds = String(Math.floor((countDown % (1000 * 60)) / 1000)).padStart(2,'0');
  
  return `${days}:${hours}:${minutes}:${seconds}`;
};

export default useCountdown;

"use client";

import { useState, useEffect } from "react";
import style from "@/components/TimeNotification/TimeNotification.module.scss";
import { getFormattedTime } from "@/utils/getFormattedTime";

const SALE_END = "2024, 11, 04, 17:21";

export default function TimeNotification({
  getIsInitialTime,
}: {
  getIsInitialTime?: (isTime: boolean) => void;
}) {
  const [saleTime, setSaleTime] = useState<number | null>(null);
  const [isInitialTime, setIsInitialTime] = useState<boolean>(false);

  function getInitialTime() {
    return new Date(SALE_END).getTime() - new Date().getTime();
  }

  useEffect(() => {
    setSaleTime(getInitialTime());
    setIsInitialTime(getInitialTime() >= 1000);
    getIsInitialTime && getIsInitialTime(isInitialTime);
  }, []);

  useEffect(() => {
    getIsInitialTime && getIsInitialTime(isInitialTime);
  }, [isInitialTime]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSaleTime((prevTime) => {
        return prevTime && prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [saleTime]);

  function getTime() {
    if ((!getInitialTime() || getInitialTime() < 1000) && !isInitialTime)
      return;

    if (saleTime) {
      return saleTime >= 1000 ? getFormattedTime(saleTime) : "00:00";
    }
  }

  if (!isInitialTime) {
    return <></>;
  }

  return <span className={style.notification}>Sale ends in {getTime()}</span>;
}

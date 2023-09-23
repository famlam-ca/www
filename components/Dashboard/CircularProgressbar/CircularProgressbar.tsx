"use client";

import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "./CircularProgressbar.css";

const Progressbar = () => {
  const [num, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setNumber(Math.floor(Math.random() * 100 + 1)),
      300000 // 5 min
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  const percentage = num;

  return (
    <div>
      <CircularProgressbar value={percentage} text={`${num}%`} />
    </div>
  );
};

export default Progressbar;
